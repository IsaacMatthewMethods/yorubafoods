import CategoryCard from "@/components/category-card"
import { getSupabaseServerClient } from "@/lib/supabase"

export default async function CategoriesPage() {
  const supabase = getSupabaseServerClient()

  const { data: categories, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    console.error("Error fetching categories:", error)
  }

  return (
    <main className="w-full px-4 py-6 mt-16">
      <h1 className="text-2xl font-bold mb-6">Food Categories</h1>

      <div className="grid gap-4">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.slug}
              name={category.name}
              description={category.description || ""}
              image={category.image_url || "/placeholder.svg?height=800&width=600"}
            />
          ))
        ) : (
          <div className="text-center p-8 border rounded-lg">
            <p className="text-muted-foreground">No categories found</p>
          </div>
        )}
      </div>
    </main>
  )
}
