import { Button } from "@/shared/ui/button/Button";
import { ChevronRight } from "lucide-react";
import ArticleCard from "@/entities/article/ui/ArticleCard";
import NewsletterSection from "@/widgets/news-letter/NewsletterSection";
import HeroSection from "@/widgets/hero-section/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
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
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  size="sm"
                >
                  모든 글 보기
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ArticleCard
                  key={i}
                  sid={`article-${i}`}
                  title={`Article ${i}`}
                  description={`Description ${i}`}
                  date={`2025-03-18`}
                  tags={[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "AI",
                    "DevOps",
                  ]}
                  image={`/placeholder.svg?height=200&width=400&text=Article+${i}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <NewsletterSection />
    </div>
  );
}
