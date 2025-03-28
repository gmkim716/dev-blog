"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">페이지를 찾을 수 없습니다</h2>
      <p className="text-muted-foreground mb-6">페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
      >
        다시 시도
      </Link>
    </div>
  );
}
