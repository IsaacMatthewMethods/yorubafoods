import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <Skeleton className="h-8 w-48 mb-6" />

      <div className="space-y-6">
        <div className="relative rounded-lg overflow-hidden">
          <Skeleton className="w-full h-48" />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div>
            <Skeleton className="h-6 w-32 mb-3" />
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-start">
                  <Skeleton className="w-2 h-2 rounded-full mt-2 mr-2" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-40 mb-3" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-32 mb-3" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-36 mb-3" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
