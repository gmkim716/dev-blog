import { Card } from "@/shared/ui/card/Card";
import { CardContent } from "@/shared/ui/card/CardContent";
import { CardDescription } from "@/shared/ui/card/CardDescription";
import { CardFooter } from "@/shared/ui/card/CardFooter";
import { CardHeader } from "@/shared/ui/card/CardHeader";
import { CardTitle } from "@/shared/ui/card/CardTitle";
import { CalendarDays, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  sid: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
}
export default function ArticleCard({
  sid,
  title,
  description,
  date,
  tags,
  image,
}: ArticleCardProps) {
  return (
    <Card
      key={sid}
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer"
    >
      <div className="relative">
        {image && (
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="w-full object-cover h-48"
          />
        )}
        {/* <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
          {tags?.join(", ")}
        </div> */}
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="line-clamp-2 text-xl">
          <Link href="#">{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center text-sm text-muted-foreground">
        <div className="flex items-center">
          <CalendarDays className="mr-1 h-3 w-3" />
          <span>{date}</span>
        </div>
        <div className="flex items-center ml-4">
          <Tag className="mr-1 h-3 w-3" />
          <span>{tags?.join(", ")}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
