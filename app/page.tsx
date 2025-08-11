import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Search, Utensils, Info, MessageSquare } from "lucide-react"
import CategoryCard from "@/components/category-card"
import FoodCard from "@/components/food-card"

export default function Home() {
  const featuredCategories = [
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
      id: "snacks",
      name: "Snacks",
      description: "Delicious small bites and pastries for any time of day",
      image: "/placeholder.svg?height=800&width=600",
    },
  ]

  const featuredFoods = [
    {
      id: "amala-ewedu",
      name: "Amala & Ewedu",
      description: "A classic Yoruba combination of yam flour swallow with jute leaf soup",
      image: "/placeholder.svg?height=800&width=600",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    },
    {
      id: "jollof-rice",
      name: "Jollof Rice",
      description: "Spicy tomato rice dish popular throughout West Africa",
      image: "/placeholder.svg?height=800&width=600",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    },
    {
      id: "moin-moin",
      name: "Moin Moin",
      description: "Steamed bean pudding with peppers, onions, and spices",
      image: "/placeholder.svg?height=800&width=600",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    },
  ]

  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
          <Image src="https://i0.wp.com/outravelandtour.com/wp-content/uploads/2021/05/Yoruba-Cuisines.jpg?resize=768%2C510&ssl=1" alt="Yoruba Food" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
            <h1 className="text-3xl font-bold text-white">Yoruba Food Helper</h1>
            <p className="text-white/90 mt-2">Discover the rich flavors of Yoruba cuisine</p>
            <div className="flex gap-3 mt-4">
              <Button asChild className="rounded-full">
                <Link href="/categories">Explore Foods</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                <Link href="/cuisine-finder">Find Cuisine</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/categories">
            <Card className="hover:bg-accent transition-colors h-full">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <Utensils className="h-8 w-8 mb-2 text-yoruba-500" />
                <h2 className="font-medium">Browse Categories</h2>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cuisine-finder">
            <Card className="hover:bg-accent transition-colors h-full">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <Search className="h-8 w-8 mb-2 text-yoruba-500" />
                <h2 className="font-medium">Find Cuisine</h2>
              </CardContent>
            </Card>
          </Link>

          <Link href="/chat">
            <Card className="hover:bg-accent transition-colors h-full">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <MessageSquare className="h-8 w-8 mb-2 text-yoruba-500" />
                <h2 className="font-medium">AI Chat</h2>
              </CardContent>
            </Card>
          </Link>

          <Link href="/about">
            <Card className="hover:bg-accent transition-colors h-full">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <Info className="h-8 w-8 mb-2 text-yoruba-500" />
                <h2 className="font-medium">About</h2>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Featured Categories */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Featured Categories</h2>
            <Link href="/categories" className="text-yoruba-500 text-sm font-medium flex items-center">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {featuredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
        </div>

        {/* Featured Foods */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Featured Foods</h2>
            <Link href="/categories" className="text-yoruba-500 text-sm font-medium flex items-center">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {featuredFoods.map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                description={food.description}
                image={food.image}
                videoId={food.videoId}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
