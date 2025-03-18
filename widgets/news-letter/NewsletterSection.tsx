import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";

export default function NewsletterSection() {
  return (
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
  );
}
