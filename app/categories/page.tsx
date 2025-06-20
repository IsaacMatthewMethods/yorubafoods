import CategoryCard from "@/components/category-card"

const categories = [
  {
    id: "soups",
    name: "Soups",
    description: "Traditional Yoruba soups with rich flavors and nutritional benefits",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: "swallows",
    name: "Swallows",
    description: "Starchy accompaniments perfect for enjoying with Yoruba soups",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: "rice-dishes",
    name: "Rice Dishes",
    description: "Flavorful rice preparations that showcase Yoruba culinary expertise",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: "snacks",
    name: "Snacks",
    description: "Delicious small bites and pastries for any time of day",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Traditional beverages that complement Yoruba meals perfectly",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: "festival-foods",
    name: "Festival Foods",
    description: "Special dishes prepared for celebrations and cultural events",
    image: "/placeholder.svg?height=800&width=600",
  },
]

export default function CategoriesPage() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <h1 className="text-2xl font-bold mb-6">Food Categories</h1>

      <div className="grid gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
            image={category.image}
          />
        ))}
      </div>
    </main>
  )
}
