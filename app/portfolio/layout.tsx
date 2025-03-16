import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "포트폴리오 | 개발자 홍길동의 기술 블로그",
  description:
    "웹 개발, AI, 모바일 앱, 블록체인 등 다양한 분야의 프로젝트 포트폴리오",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="font-bold text-xl">
              TechBlog
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Articles
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Categories
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {children}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2023 TechBlog. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
