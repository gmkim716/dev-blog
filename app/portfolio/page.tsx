import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/shared/ui/badge/Badge";
import { Button } from "@/shared/ui/button/Button";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/tab";
import { Card } from "@/shared/ui/card/Card";
import { CardHeader } from "@/shared/ui/card/CardHeader";
import { CardTitle } from "@/shared/ui/card/CardTitle";
import { CardContent } from "@/shared/ui/card/CardContent";
import { CardDescription } from "@/shared/ui/card/CardDescription";
import { CardFooter } from "@/shared/ui/card/CardFooter";
// 포트폴리오 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: "AI 기반 이미지 분석 서비스",
    description:
      "TensorFlow와 React를 활용한 이미지 분석 웹 애플리케이션으로, 사용자가 업로드한 이미지를 분석하여 객체를 인식하고 분류합니다.",
    image: "/placeholder.svg?height=400&width=600&text=AI+Image+Analyzer",
    demoUrl: "#",
    repoUrl: "#",
    category: "ai",
    tags: ["React", "TensorFlow.js", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "실시간 협업 노트 앱",
    description:
      "WebSocket을 활용한 실시간 협업 노트 애플리케이션으로, 여러 사용자가 동시에 문서를 편집할 수 있습니다.",
    image: "/placeholder.svg?height=400&width=600&text=Collaborative+Notes",
    demoUrl: "#",
    repoUrl: "#",
    category: "web",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: 3,
    title: "개발자 포트폴리오 템플릿",
    description:
      "개발자를 위한 맞춤형 포트폴리오 템플릿으로, 쉽게 커스터마이징할 수 있는 Next.js 기반 정적 웹사이트입니다.",
    image: "/placeholder.svg?height=400&width=600&text=Portfolio+Template",
    demoUrl: "#",
    repoUrl: "#",
    category: "web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "블록체인 기반 투표 시스템",
    description:
      "이더리움 블록체인을 활용한 투명한 투표 시스템으로, 투표 결과의 무결성을 보장합니다.",
    image: "/placeholder.svg?height=400&width=600&text=Blockchain+Voting",
    demoUrl: "#",
    repoUrl: "#",
    category: "blockchain",
    tags: ["Solidity", "Ethereum", "React", "Web3.js"],
  },
  {
    id: 5,
    title: "자연어 처리 챗봇",
    description:
      "자연어 처리 기술을 활용한 지능형 챗봇으로, 사용자의 질문에 맞춤형 응답을 제공합니다.",
    image: "/placeholder.svg?height=400&width=600&text=NLP+Chatbot",
    demoUrl: "#",
    repoUrl: "#",
    category: "ai",
    tags: ["Python", "NLTK", "TensorFlow", "Flask"],
  },
  {
    id: 6,
    title: "모바일 건강 관리 앱",
    description:
      "사용자의 건강 데이터를 추적하고 분석하는 모바일 애플리케이션으로, 맞춤형 건강 관리 조언을 제공합니다.",
    image: "/placeholder.svg?height=400&width=600&text=Health+Tracker",
    demoUrl: "#",
    repoUrl: "#",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            포트폴리오
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            제가 개발한 다양한 프로젝트들을 소개합니다. 각 프로젝트는 문제
            해결과 기술적 도전을 통해 완성되었습니다.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="web">웹 개발</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
            <TabsTrigger value="mobile">모바일</TabsTrigger>
            <TabsTrigger value="blockchain">블록체인</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "web")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "ai")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "mobile")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "blockchain")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <CardDescription className="mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-2 py-0.5 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Link>
        </Button>
        <Button variant="outline" size="sm">
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
