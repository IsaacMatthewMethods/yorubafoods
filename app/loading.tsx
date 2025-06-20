import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function HomeLoading() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-8">
        {/* Hero Section Skeleton */}
        <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
          <Skeleton className="w-full h-full" />
        </div>

        {/* Quick Actions Skeleton */}
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <Skeleton className="h-8 w-8 mb-2" />
                <Skeleton className="h-4 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Categories Skeleton */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-40">
                  <Skeleton className="w-full h-full" />
                </div>
                <CardContent className="p-4">
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Foods Skeleton */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <Skeleton className="w-full h-[200px]" />
                </div>
                <CardContent className="p-4">
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
                <div className="p-4 pt-0">
                  <Skeleton className="h-10 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
