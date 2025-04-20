"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, AlertTriangle } from "lucide-react"
import { getSupabaseBrowserClient, type Category } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"

export default function DeleteCategoryPage({ params }: { params: { id: string } }) {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data, error } = await supabase.from("categories").select("*").eq("id", params.id).single()

        if (error) throw error

        setCategory(data)
      } catch (error) {
        console.error("Error fetching category:", error)
        toast({
          title: "Error",
          description: "Failed to load category. Please try again.",
          variant: "destructive",
        })
        router.push("/admin/categories")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategory()
  }, [params.id, router, supabase])

  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      const { error } = await supabase.from("categories").delete().eq("id", params.id)

      if (error) throw error

      toast({
        title: "Category deleted",
        description: "The category has been deleted successfully.",
      })

      router.push("/admin/categories")
      router.refresh()
    } catch (error) {
      console.error("Error deleting category:", error)
      toast({
        title: "Error",
        description: "Failed to delete category. Please try again.",
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
            Delete Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Are you sure you want to delete the category <strong>{category?.name}</strong>?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            This action cannot be undone. This will permanently delete the category and all associated data.
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
              "Delete Category"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
