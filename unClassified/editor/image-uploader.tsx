"use client";

import { useState, useRef, type ChangeEvent } from "react";
import { Card } from "@/shared/ui/card/Card";
import { Input } from "@/shared/ui/input/Input";
import { ImageIcon, X } from "lucide-react";
import { Button } from "@/shared/ui/button/Button";
import { CardHeader } from "@/shared/ui/card/CardHeader";
import { CardTitle } from "@/shared/ui/card/CardTitle";
import { CardContent } from "@/shared/ui/card/CardContent";
import Label from "@/shared/ui/label/Label";
import Slider from "@/shared/ui/slider/Slider";
import { CardFooter } from "@/shared/ui/card/CardFooter";

interface ImageUploaderProps {
  onInsert: (imageUrl: string, width?: number, height?: number) => void;
  onCancel: () => void;
}

export default function ImageUploader({
  onInsert,
  onCancel,
}: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(400);
  const [height, setHeight] = useState<number>(300);
  const [aspectRatio, setAspectRatio] = useState<number>(4 / 3);
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setUploadedImage(result);

      // Get natural dimensions of the image
      const img = new Image();
      img.onload = () => {
        setWidth(img.width > 800 ? 800 : img.width);
        setHeight(img.height > 600 ? 600 : img.height);
        setAspectRatio(img.width / img.height);
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const handleWidthChange = (newWidth: number[]) => {
    setWidth(newWidth[0]);
    if (lockAspectRatio) {
      setHeight(Math.round(newWidth[0] / aspectRatio));
    }
  };

  const handleHeightChange = (newHeight: number[]) => {
    setHeight(newHeight[0]);
    if (lockAspectRatio) {
      setWidth(Math.round(newHeight[0] * aspectRatio));
    }
  };

  const handleInsert = () => {
    const finalImageUrl = uploadedImage || imageUrl;
    if (finalImageUrl) {
      onInsert(finalImageUrl, width, height);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>이미지 추가</CardTitle>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image-url">이미지 URL</Label>
            <Input
              id="image-url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              disabled={!!uploadedImage}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image-upload">또는 이미지 업로드</Label>
            <div
              className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {uploadedImage ? (
                <div className="relative w-full">
                  <img
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded preview"
                    className="max-w-full h-auto mx-auto"
                    style={{ maxHeight: "200px" }}
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedImage(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <>
                  <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    클릭하여 이미지 선택
                  </p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                id="image-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {(uploadedImage || imageUrl) && (
            <>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="width-slider">너비: {width}px</Label>
                  <Label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={lockAspectRatio}
                      onChange={(e) => setLockAspectRatio(e.target.checked)}
                      className="mr-2"
                    />
                    비율 유지
                  </Label>
                </div>
                <Slider
                  id="width-slider"
                  min={50}
                  max={1200}
                  step={1}
                  value={[width]}
                  onChange={handleWidthChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height-slider">높이: {height}px</Label>
                <Slider
                  id="height-slider"
                  min={50}
                  max={800}
                  step={1}
                  value={[height]}
                  onChange={handleHeightChange}
                />
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>
            취소
          </Button>
          <Button onClick={handleInsert} disabled={!uploadedImage && !imageUrl}>
            삽입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
