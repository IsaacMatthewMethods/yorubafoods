import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function CuisineFinderLoading() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-6">
        <div className="text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-2" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>

        <div className="relative rounded-lg overflow-hidden mb-6">
          <Skeleton className="w-full h-40" />
        </div>

        {/* Search form skeleton */}
        <div className="space-y-4">
          <div className="relative">
            <Skeleton className="h-12 w-full rounded-full" />
          </div>
          <Skeleton className="h-12 w-full rounded-full" />
        </div>

        {/* Results skeleton */}
        <Card className="overflow-hidden">
          <Skeleton className="w-full h-48" />
          <CardContent className="p-4">
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />

              <div className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <div className="pl-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>

              <div className="space-y-2">
                <Skeleton className="h-6 w-28" />
                <div className="pl-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
