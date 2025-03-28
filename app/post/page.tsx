"use client";

import { useState, useRef, useCallback, ClipboardEvent } from "react";
import {
  ImagePlus,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Quote,
  Code,
  Save,
} from "lucide-react";
import { Card } from "@/shared/ui/card/Card";
import { CardContent } from "@/shared/ui/card/CardContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tab";
import { Button } from "@/shared/ui/button/Button";
import ImageUploader from "@/unClassified/editor/image-uploader";
import MarkdownPreview from "@/unClassified/editor/markdown-preview";
import TextareaAutosize from "react-textarea-autosize";
import Separator from "@/shared/ui/separator/Separator";
import supabase from "@/shared/lib/supabase";

export default function PostPage() {
  const [content, setContent] = useState<string>("");
  const [showImageUploader, setShowImageUploader] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const insertMarkdown = (markdownSyntax: string, placeholder?: string) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    let newText = "";
    if (placeholder && selectedText.length === 0) {
      newText = markdownSyntax.replace(placeholder, "텍스트를 입력하세요");
    } else {
      newText = markdownSyntax.replace(placeholder || "$$", selectedText);
    }

    const newContent =
      content.substring(0, start) + newText + content.substring(end);
    setContent(newContent);

    // Set cursor position after update
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + newText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleImageInsert = (
    imageUrl: string,
    width?: number,
    height?: number
  ) => {
    const imageMarkdown =
      width && height
        ? `![이미지](${imageUrl} ==${width}x${height})`
        : `![이미지](${imageUrl})`;

    insertMarkdown(imageMarkdown);
    setShowImageUploader(false);
  };

  // 클립보드 이미지 처리 함수
  const handlePaste = useCallback(
    async (e: ClipboardEvent<HTMLTextAreaElement>) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      // 이미지 파일 찾기
      const imageItem = Array.from(items).find(
        (item) => item.type.indexOf("image") !== -1
      );

      if (!imageItem) return; // 이미지가 아니면 그냥 반환

      // 기본 붙여넣기 동작 방지
      e.preventDefault();

      try {
        setIsUploading(true);

        // 파일 가져오기
        const file = imageItem.getAsFile();
        if (!file) return;

        // 파일 이름 생성 (현재 시간 + 랜덤 문자열)
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}_${Math.random()
          .toString(36)
          .substring(2, 15)}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        // Supabase Storage에 업로드
        const { error } = await supabase.storage
          .from("images") // 버킷 이름을 적절히 변경하세요
          .upload(filePath, file);

        if (error) throw error;

        // 이미지 URL 가져오기
        const { data: urlData } = supabase.storage
          .from("images")
          .getPublicUrl(filePath);

        const imageUrl = urlData.publicUrl;

        // 텍스트 에디터에 마크다운 이미지 구문 삽입
        const textarea = textareaRef.current;
        if (!textarea) return;

        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        const beforeText = content.substring(0, startPos);
        const afterText = content.substring(endPos);

        // 마크다운 이미지 구문 생성
        const imageMarkdown = `![붙여넣은 이미지](${imageUrl})`;

        // 새 텍스트 조합 및 상태 업데이트
        const newValue = beforeText + imageMarkdown + afterText;
        setContent(newValue);

        // 커서 위치 조정
        setTimeout(() => {
          textarea.focus();
          const newCursorPos = startPos + imageMarkdown.length;
          textarea.selectionStart = newCursorPos;
          textarea.selectionEnd = newCursorPos;
        }, 0);
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
        alert("이미지 업로드에 실패했습니다.");
      } finally {
        setIsUploading(false);
      }
    },
    [content, setContent]
  );

  return (
    <div className="container mx-auto py-6 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">새 블로그 글 작성</h1>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          저장하기
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="제목을 입력하세요"
              className="w-full text-2xl font-bold border-none focus:outline-none focus:ring-0 p-0"
            />
          </div>

          <Separator className="my-4" />

          <Tabs defaultValue="write" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="write">작성</TabsTrigger>
                <TabsTrigger value="preview">미리보기</TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("**$$**", "$$")}
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("*$$*", "$$")}
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("\n## $$", "$$")}
                >
                  <Heading2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("\n### $$", "$$")}
                >
                  <Heading3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("\n- $$", "$$")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("\n1. $$", "$$")}
                >
                  <ListOrdered className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("\n> $$", "$$")}
                >
                  <Quote className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("\n```\n$$\n```", "$$")}
                >
                  <Code className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowImageUploader(true)}
                >
                  <ImagePlus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="write" className="mt-0">
              <div className="relative">
                {isUploading && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                    <span className="text-white">이미지 업로드 중...</span>
                  </div>
                )}
                <TextareaAutosize
                  ref={textareaRef}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  onPaste={handlePaste}
                  placeholder="마크다운으로 내용을 작성하세요... 이미지는 붙여넣기(Ctrl+V)로 추가할 수 있습니다."
                  className="w-full min-h-[400px] resize-none border-none focus:outline-none focus:ring-0 p-0 text-base leading-relaxed"
                />
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-0">
              <div className="min-h-[400px] prose max-w-none">
                <MarkdownPreview content={content} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {showImageUploader && (
        <ImageUploader
          onInsert={handleImageInsert}
          onCancel={() => setShowImageUploader(false)}
        />
      )}
    </div>
  );
}
