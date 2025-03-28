import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";
import { Search, Menu } from "lucide-react";
import Link from "next/link";

export default function HeadNavigation() {
  // 메뉴 항목 정의
  const navItems = [
    { path: "/", label: "Home", active: true },
    { path: "/articles", label: "Articles" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/sandbox", label: "Sandbox" },
    { path: "/post", label: "New Post" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-xl">
            TechBlog
          </Link>

          {/* 햄버거 메뉴 토글 (CSS로만 처리) */}
          {/* <label
            htmlFor="mobile-menu-toggle"
            className="md:hidden cursor-pointer"
          >
            <Menu className="h-6 w-6" />
          </label>
          <input
            type="checkbox"
            id="mobile-menu-toggle"
            className="hidden peer"
          /> */}

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.active ? "" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
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

      {/* 모바일 메뉴 (CSS로 표시/숨김 처리) */}
      <div className="md:hidden px-4 py-2 border-t max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-300">
        <nav className="flex flex-col space-y-3 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                item.active ? "" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t mt-2">
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full pl-8"
              />
            </div>
            <Button className="w-full">Subscribe</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
