import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { CalendarDays, ChevronRight, Search, Tag } from "lucide-react";
import { CardHeader } from "@/shared/ui/card/CardHeader";
import { CardTitle } from "@/shared/ui/card/CardTitle";
import { CardContent } from "@/shared/ui/card/CardContent";
import { CardDescription } from "@/shared/ui/card/CardDescription";
import { CardFooter } from "@/shared/ui/card/CardFooter";
import { Input } from "@/shared/ui/input/Input";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="font-bold text-xl">
              TechBlog
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
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
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-[200px] pl-8"
              />
            </div>
            <Button>Subscribe</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  안녕하세요!
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  개발자 홍길동입니다
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  저는 웹 개발과 인공지능에 관심이 많은 풀스택 개발자입니다. 이
                  블로그에서는 제가 배우고 경험한 기술적 인사이트와 프로젝트
                  경험을 공유합니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button>
                    <Link href="/portfolio">프로젝트 보기</Link>
                  </Button>
                  <Button variant="outline">연락하기</Button>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-sm rounded-full border overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Profile"
                  width={400}
                  height={400}
                  alt="Profile picture"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  최신 아티클
                </h2>
                <p className="text-muted-foreground">
                  개발자들을 위한 최신 기술 트렌드와 인사이트
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  모든 글 보기
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Article+${i}`}
                      width={400}
                      height={200}
                      alt={`Article ${i}`}
                      className="w-full object-cover h-48"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      {
                        [
                          "React",
                          "Next.js",
                          "TypeScript",
                          "Node.js",
                          "AI",
                          "DevOps",
                        ][i % 6]
                      }
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="line-clamp-2 text-xl">
                      <Link href="#">기술 블로그 아티클 제목 {i}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <CardDescription className="line-clamp-3">
                      이 글에서는 최신 웹 개발 트렌드와 기술에 대해 알아보고,
                      실제 프로젝트에 적용할 수 있는 방법을 소개합니다.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      <span>2023년 12월 15일</span>
                    </div>
                    <div className="flex items-center ml-4">
                      <Tag className="mr-1 h-3 w-3" />
                      <span>개발, 웹</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  뉴스레터 구독하기
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  최신 기술 트렌드와 개발 인사이트를 이메일로 받아보세요.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Input placeholder="이메일 주소" type="email" />
                  <Button type="submit">구독하기</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  구독은 언제든지 취소할 수 있습니다. 개인정보는 안전하게
                  보호됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
}
