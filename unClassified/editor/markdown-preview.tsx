"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

interface MarkdownPreviewProps {
  content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
  // Process custom image size syntax: ![alt](url ==WIDTHxHEIGHT)
  const processedContent = content.replace(
    /!\[(.*?)\]\((.*?) ==(\d+)x(\d+)\)/g,
    "![$1]($2 =$3x$4)"
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: (props) => {
          const { src, alt } = props;
          // Check if there's a size specification
          const sizeMatch = src?.match(/ =(\d+)x(\d+)$/);

          if (sizeMatch) {
            const width = Number.parseInt(sizeMatch[1]);
            const height = Number.parseInt(sizeMatch[2]);
            const cleanSrc = src?.replace(/ =\d+x\d+$/, "");

            return (
              <div className="relative my-4" style={{ width, height }}>
                <Image
                  src={cleanSrc || "/placeholder.svg"}
                  alt={alt || ""}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            );
          }

          // Regular image without size specification
          return (
            <div className="relative my-4 w-full max-w-2xl h-auto">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt || ""}
                width={500}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          );
        },
      }}
    >
      {processedContent}
    </ReactMarkdown>
  );
}
