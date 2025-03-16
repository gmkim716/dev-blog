// import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "개발자 홍길동의 기술 블로그",
  description:
    "웹 개발과 인공지능에 관한 인사이트와 프로젝트 경험을 공유합니다",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
