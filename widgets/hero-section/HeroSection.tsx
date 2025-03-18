import { NAME } from "@/shared/const/personal";
import { Button } from "@/shared/ui/button/Button";
import { Link } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              안녕하세요!
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              개발자 {NAME}입니다
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              저는 웹 개발과 인공지능에 관심이 많은 풀스택 개발자입니다. 이
              블로그에서는 제가 배우고 경험한 기술적 인사이트와 프로젝트 경험을
              공유합니다.
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
              src="/profile/profile-image.jpg"
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
  );
}
