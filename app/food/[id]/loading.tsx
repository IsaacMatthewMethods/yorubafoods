import { Skeleton } from "@/components/ui/skeleton"

export default function FoodDetailLoading() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-6">
        <div className="relative rounded-lg overflow-hidden">
          <Skeleton className="w-full h-64" />
        </div>

        <div>
          <Skeleton className="h-9 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        <div>
          <Skeleton className="h-6 w-32 mb-3" />
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-start">
                <Skeleton className="w-2 h-2 rounded-full mt-2 mr-2" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-6 w-32 mb-3" />
          <div className="space-y-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex items-start">
                <Skeleton className="w-6 h-6 rounded-full mr-3 shrink-0" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-6 w-48 mb-3" />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-accent p-3 rounded-lg">
                <Skeleton className="h-3 w-16 mb-1" />
                <Skeleton className="h-4 w-12" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-6 w-40 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </main>
  )
}
