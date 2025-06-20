import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ChatLoading() {
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

        <div className="flex flex-col h-[calc(100vh-20rem)]">
          <Card className="flex-1 overflow-hidden">
            <CardContent className="p-4 h-full flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 pb-4">
                {/* Assistant message skeleton */}
                <div className="flex items-start gap-3 justify-start">
                  <Skeleton className="h-8 w-8 rounded-full mt-1" />
                  <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted">
                    <Skeleton className="h-4 w-64 mb-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>

                {/* User message skeleton */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="rounded-lg px-4 py-2 max-w-[80%] bg-primary/20">
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-8 w-8 rounded-full mt-1" />
                </div>

                {/* Another assistant message skeleton */}
                <div className="flex items-start gap-3 justify-start">
                  <Skeleton className="h-8 w-8 rounded-full mt-1" />
                  <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted">
                    <Skeleton className="h-4 w-72 mb-2" />
                    <Skeleton className="h-4 w-56 mb-2" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 flex gap-2 mb-4">
            <Skeleton className="flex-1 h-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  )
}
