"use client";

import { useState, useRef } from "react";
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
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tab";
import { Button } from "@/shared/ui/button/Button";

export default function BlogEditor() {
  const [content, setContent] = useState<string>("");
  const [showImageUploader, setShowImageUploader] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
              <TextareaAutosize
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="마크다운으로 내용을 작성하세요..."
                className="w-full min-h-[400px] resize-none border-none focus:outline-none focus:ring-0 p-0 text-base leading-relaxed"
              />
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
