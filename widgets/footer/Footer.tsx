import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-auto bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © 2025 TechBlog. All rights reserved.
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
  );
}
