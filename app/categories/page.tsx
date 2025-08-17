import CategoryCard from "@/components/category-card"

const categories = [
  {
    id: "soups",
    name: "Soups",
    description: "Traditional Yoruba soups with rich flavors and nutritional benefits",
    image: "https://i.pinimg.com/1200x/96/3b/30/963b30ec3dcf94247814df27c98b62f8.jpg",
  },
  {
    id: "swallows",
    name: "Swallows",
    description: "Starchy accompaniments perfect for enjoying with Yoruba soups",
    image: "https://allnigerianfoods.com/wp-content/uploads/Tuwo-shinkafa-swallow.jpg",
  },
  {
    id: "rice-dishes",
    name: "Rice Dishes",
    description: "Flavorful rice preparations that showcase Yoruba culinary expertise",
    image: "https://i.pinimg.com/736x/1a/6c/98/1a6c987ee4fc70e97b9718a9d886a43c.jpg",
  },
  {
    id: "snacks",
    name: "Snacks",
    description: "Delicious small bites and pastries for any time of day",
    image: "https://i.pinimg.com/736x/7d/55/54/7d55549606d5b8c50014d2a18d26dfe0.jpg",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Traditional beverages that complement Yoruba meals perfectly",
    image: "https://i.pinimg.com/736x/fc/7c/8f/fc7c8ffdf7177418662a47dfa4a03169.jpg",
  },
  {
    id: "festival-foods",
    name: "Festival Foods",
    description: "Special dishes prepared for celebrations and cultural events",
    image: "https://i.pinimg.com/736x/3f/e6/b6/3fe6b67ab45fd7a5f88252a6ca345a12.jpg",
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
