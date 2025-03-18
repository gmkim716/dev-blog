import supabase from "@/shared/lib/supabase";
import Image from "next/image";

export default async function TesterPage() {
  const { data: items, error } = await supabase.from("test").select("*");

  console.log("items", items);

  if (error) {
    console.error(error);
  }

  // 환경 변수 가져오기
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL 또는 key가 설정되지 않았습니다");
  }

  const imageUrl = `${supabaseUrl}/storage/v1/object/sign/dev-blog/profile/blog.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtYmxvZy9wcm9maWxlL2Jsb2cuanBnIiwiaWF0IjoxNzQyMzA1MDY0LCJleHAiOjE3NDI5MDk4NjR9.fRGbNZMcKC6NEvkwtUqEsPjuUL8DW245glZdV8cPuwg`;

  return (
    <div>
      <Image src={imageUrl} alt="test" width={100} height={100} />
      {items?.map((item) => (
        <div key={item.id}>{item.cat0}</div>
      ))}
    </div>
  );
}
