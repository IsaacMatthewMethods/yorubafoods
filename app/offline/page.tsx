import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WifiOff } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <Card className="w-full max-w-sm">
          <CardContent className="p-8 text-center">
            <WifiOff className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">You're Offline</h1>
            <p className="text-muted-foreground mb-6">
              It looks like you're not connected to the internet. Some features may not be available.
            </p>
            <Button asChild className="w-full">
              <Link href="/">Go to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
