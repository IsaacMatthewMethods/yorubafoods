import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoriesLoading() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <Skeleton className="h-8 w-48 mb-6" />

      <div className="grid gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-40">
              <Skeleton className="w-full h-full" />
            </div>
            <CardContent className="p-4">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
