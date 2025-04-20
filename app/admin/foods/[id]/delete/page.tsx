"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, AlertTriangle } from "lucide-react"
import { getSupabaseBrowserClient, type Food } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"

export default function DeleteFoodPage({ params }: { params: { id: string } }) {
  const [food, setFood] = useState<Food | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const { data, error } = await supabase.from("foods").select("*").eq("id", params.id).single()

        if (error) throw error

        setFood(data)
      } catch (error) {
        console.error("Error fetching food:", error)
        toast({
          title: "Error",
          description: "Failed to load food. Please try again.",
          variant: "destructive",
        })
        router.push("/admin/foods")
      } finally {
        setIsLoading(false)
      }
    }

    fetchFood()
  }, [params.id, router, supabase])

  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      const { error } = await supabase.from("foods").delete().eq("id", params.id)

      if (error) throw error

      toast({
        title: "Food deleted",
        description: "The food has been deleted successfully.",
      })

      router.push("/admin/foods")
      router.refresh()
    } catch (error) {
      console.error("Error deleting food:", error)
      toast({
        title: "Error",
        description: "Failed to delete food. Please try again.",
        variant: "destructive",
      })
      setIsDeleting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Delete Food
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Are you sure you want to delete the food <strong>{food?.name}</strong>?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            This action cannot be undone. This will permanently delete the food and all associated data.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isDeleting}>
            Cancel
          </Button>
          <Button type="button" variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete Food"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
