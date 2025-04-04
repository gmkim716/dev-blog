import { NAME } from "@/shared/const/personal";
import "./globals.css";
// import { ThemeProvider } from "./theme-provider";
import { ReactNode } from "react";
import Footer from "@/widgets/footer/Footer";
import HeadNavigation from "@/widgets/header/HeadNavigation";

export const metadata = {
  title: `개발자 ${NAME}`,
  description: "재미있게 개발하고 싶어요",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
      {/* suppressHydrationWarning: 서버 렌더링 시 오류 방지, 특정 요소에 대한 하이드레이션 경고 억제 */}
      <body suppressHydrationWarning className="flex min-h-screen flex-col">
        <HeadNavigation />
        <main className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
