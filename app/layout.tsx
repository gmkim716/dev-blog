import { NAME } from "@/shared/const/personal";
import "./globals.css";
// import { ThemeProvider } from "./theme-provider";
import { ReactNode } from "react";

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
      {/* suppressHydrationWarning: 서버 렌더링 시 오류 방지, 특정 요소에 대한 하이드레이션 경고 억제 */}
      <body className="w-[50%] mx-auto" suppressHydrationWarning>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
