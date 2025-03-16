import { Skeleton } from "@/shared/ui/skeleton/Skeleton";

export default function Loading() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-[300px]" />
          <Skeleton className="h-6 w-full max-w-[800px]" />
        </div>

        <div className="h-10 w-[400px]">
          <Skeleton className="h-full w-full" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <div className="flex gap-2 mt-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-20" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
