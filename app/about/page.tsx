import Image from "next/image";
import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Badge } from "@/shared/ui/badge/Badge";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { CardContent } from "@/shared/ui/card/CardContent";
export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            안녕하세요, 홍길동입니다
          </h1>
          <p className="text-xl text-muted-foreground">
            웹 개발과 인공지능에 관심이 많은 풀스택 개발자입니다.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">소개</h2>
            <p>
              저는 5년 차 웹 개발자로, 프론트엔드와 백엔드 모두에 경험이
              있습니다. React, Next.js, TypeScript를 주로 사용하며, 최근에는
              인공지능과 머신러닝 기술에도 관심을 가지고 공부하고 있습니다.
            </p>
            <p>
              이 블로그는 제가 개발하면서 배운 것들과 경험한 문제 해결 과정을
              기록하고 공유하기 위한 공간입니다. 또한 개발자 커뮤니티에 기여하고
              다른 개발자들과 소통하기 위한 창구로 활용하고 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "TensorFlow",
                "AWS",
                "Docker",
                "Git",
              ].map((tech) => (
                <Badge key={tech} className="px-3 py-1 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="sm" variant="outline">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button size="sm" variant="outline">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button size="sm" variant="outline">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button size="sm" variant="outline">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-xl border overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=500&text=Profile"
              width={500}
              height={500}
              alt="Profile picture"
              className="object-cover"
              priority
            />
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">경력 요약</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-1">
                  <p className="font-medium">시니어 프론트엔드 개발자</p>
                  <p className="text-sm text-muted-foreground">
                    ABC 테크 | 2022 - 현재
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-1">
                  <p className="font-medium">풀스택 개발자</p>
                  <p className="text-sm text-muted-foreground">
                    XYZ 소프트웨어 | 2019 - 2022
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-1">
                  <p className="font-medium">주니어 개발자</p>
                  <p className="text-sm text-muted-foreground">
                    스타트업 인큐베이터 | 2017 - 2019
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
