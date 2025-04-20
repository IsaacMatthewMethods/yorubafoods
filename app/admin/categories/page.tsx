import { getSupabaseServerClient, type Category } from "@/lib/supabase"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, Edit, Trash } from "lucide-react"
import Image from "next/image"

export default async function CategoriesPage() {
  const supabase = getSupabaseServerClient()
  const { data: categories, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    console.error("Error fetching categories:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Link href="/admin/categories/new">
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>

      {categories && categories.length > 0 ? (
        <div className="grid gap-4">
          {categories.map((category: Category) => (
            <Card key={category.id} className="overflow-hidden">
              <div className="flex items-center">
                <div className="relative h-16 w-16">
                  <Image
                    src={category.image_url || "/placeholder.svg?height=64&width=64"}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{category.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/admin/categories/${category.id}`}>
                        <Button size="icon" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/categories/${category.id}/delete`}>
                        <Button size="icon" variant="outline" className="text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 border rounded-lg bg-muted/50">
          <p className="text-muted-foreground">No categories found</p>
          <Link href="/admin/categories/new">
            <Button className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Your First Category
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
