import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Search, Utensils, Info, MessageSquare } from "lucide-react"
import CategoryCard from "@/components/category-card"
import FoodCard from "@/components/food-card"
import { getSupabaseServerClient } from "@/lib/supabase"

export default async function Home() {
  const supabase = getSupabaseServerClient()

  // Fetch featured categories (limit to 3)
  const { data: featuredCategories } = await supabase.from("categories").select("*").order("name").limit(3)

  // Fetch featured foods
  const { data: featuredFoods } = await supabase.from("foods").select("*").eq("featured", true).order("name").limit(3)

  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
          <Image src="/placeholder.svg?height=800&width=600" alt="Yoruba Food" fill className="object-cover" priority />
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
        {featuredCategories && featuredCategories.length > 0 && (
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
                  id={category.slug}
                  name={category.name}
                  description={category.description || ""}
                  image={category.image_url || "/placeholder.svg?height=800&width=600"}
                />
              ))}
            </div>
          </div>
        )}

        {/* Featured Foods */}
        {featuredFoods && featuredFoods.length > 0 && (
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
                  id={food.slug}
                  name={food.name}
                  description={food.description || ""}
                  image={food.image_url || "/placeholder.svg?height=800&width=600"}
                  videoId={food.video_id || undefined}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
