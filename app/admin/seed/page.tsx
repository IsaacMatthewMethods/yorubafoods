"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function SeedPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { isAdmin } = useAuth()
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  const seedDatabase = async () => {
    if (!isAdmin) {
      toast({
        title: "Unauthorized",
        description: "You must be an admin to seed the database.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Seed categories
      const categories = [
        {
          name: "Soups",
          description: "Traditional Yoruba soups with rich flavors and nutritional benefits",
          image_url: "/placeholder.svg?height=800&width=600",
          slug: "soups",
        },
        {
          name: "Swallows",
          description: "Starchy accompaniments perfect for enjoying with Yoruba soups",
          image_url: "/placeholder.svg?height=800&width=600",
          slug: "swallows",
        },
        {
          name: "Rice Dishes",
          description: "Flavorful rice preparations that showcase Yoruba culinary expertise",
          image_url: "/placeholder.svg?height=800&width=600",
          slug: "rice-dishes",
        },
      ]

      const { data: categoriesData, error: categoriesError } = await supabase
        .from("categories")
        .upsert(categories, { onConflict: "slug" })
        .select()

      if (categoriesError) throw categoriesError

      // Get category IDs
      const { data: fetchedCategories } = await supabase.from("categories").select("id, slug")

      if (!fetchedCategories) throw new Error("Failed to fetch categories")

      const categoryMap = fetchedCategories.reduce(
        (acc, cat) => {
          acc[cat.slug] = cat.id
          return acc
        },
        {} as Record<string, string>,
      )

      // Seed foods
      const foods = [
        {
          name: "Efo Riro",
          description: "A rich vegetable soup made with spinach, assorted meats, and palm oil",
          long_description: `
            Efo Riro is a rich and nutritious vegetable soup that originates from the Yoruba people of Western Nigeria. The name "Efo Riro" literally translates to "stirred leafy vegetable" in the Yoruba language.

            This delicious soup is made with a variety of leafy greens, most commonly spinach (efo tete) or kale, which are cooked with palm oil, assorted meats, fish, and a blend of aromatic spices. The combination of these ingredients creates a flavorful and hearty soup that is both nutritious and satisfying.

            Efo Riro is typically served with swallows like amala, eba, or pounded yam, making it a complete and balanced meal. It's a staple in Yoruba households and is enjoyed throughout Nigeria and beyond.
          `,
          image_url: "/placeholder.svg?height=800&width=600",
          video_id: "dQw4w9WgXcQ",
          category_id: categoryMap["soups"],
          ingredients: [
            "2 bunches of spinach or kale, washed and chopped",
            "1/4 cup palm oil",
            "1 large onion, diced",
            "3 red bell peppers, blended",
            "3 scotch bonnet peppers, blended (adjust to taste)",
            "2 tablespoons locust beans (iru)",
            "1/2 pound beef, cut into bite-sized pieces",
            "1/2 pound tripe, cleaned and cut into pieces",
            "1/4 pound smoked fish, deboned",
            "1/4 pound stockfish, soaked and deboned",
            "2 tablespoons ground crayfish",
            "2 cubes of bouillon",
            "Salt to taste",
          ],
          instructions: [
            "Season the meat with salt, bouillon, and half of the diced onions. Cook until tender, adding water as needed to create a rich stock.",
            "Heat palm oil in a large pot. Add the remaining onions and sauté until translucent.",
            "Add the blended peppers and cook for about 10-15 minutes until the raw smell disappears and the oil floats to the top.",
            "Add the locust beans, ground crayfish, and bouillon. Stir well.",
            "Add the cooked meat, tripe, smoked fish, and stockfish. Stir to combine.",
            "Simmer for 5 minutes to allow the flavors to meld together.",
            "Add the chopped spinach or kale and stir gently. Cook for 3-5 minutes until the vegetables are wilted but still green.",
            "Adjust seasoning to taste and serve hot with your choice of swallow.",
          ],
          nutritional_info: {
            calories: "320 per serving",
            protein: "18g",
            carbs: "12g",
            fat: "24g",
            fiber: "5g",
          },
          cultural_significance:
            "Efo Riro is more than just a dish in Yoruba culture; it represents hospitality and community. It's often prepared for family gatherings and celebrations, symbolizing abundance and prosperity.",
          slug: "efo-riro",
          featured: true,
        },
        {
          name: "Amala",
          description: "Yam flour swallow with a smooth texture and dark color",
          long_description: `
            Amala is a popular Nigerian swallow made from yam flour (elubo). It has a smooth, stretchy texture and a distinctive dark brown to purple-black color. Amala is a staple food among the Yoruba people of Western Nigeria.

            The process of making amala involves drying yam pieces and then grinding them into a fine powder. This powder is then mixed with boiling water and stirred continuously until it forms a smooth, dough-like consistency.

            Amala is traditionally eaten with soups like ewedu, gbegiri, or efo riro. It's known for its ability to be easily molded with fingers and used to scoop up soup, making it a perfect accompaniment to the rich, flavorful Yoruba soups.
          `,
          image_url: "/placeholder.svg?height=800&width=600",
          video_id: "dQw4w9WgXcQ",
          category_id: categoryMap["swallows"],
          ingredients: ["2 cups of yam flour (elubo)", "3 cups of water", "Additional water as needed"],
          instructions: [
            "Boil 3 cups of water in a pot.",
            "Once the water is boiling, reduce the heat to medium-low.",
            "Gradually add the yam flour to the boiling water, stirring continuously to prevent lumps from forming.",
            "Continue stirring until the mixture becomes thick and smooth.",
            "Cover the pot and allow to cook on low heat for about 2-3 minutes.",
            "Stir again to ensure even cooking and a smooth consistency.",
            "If the amala is too thick, add a little more hot water and stir until you achieve the desired consistency.",
            "Serve hot with your choice of soup.",
          ],
          nutritional_info: {
            calories: "250 per serving",
            protein: "2g",
            carbs: "55g",
            fat: "0.5g",
            fiber: "3g",
          },
          cultural_significance:
            "Amala is deeply rooted in Yoruba culture and is often associated with traditional values and heritage. It's a symbol of cultural identity and is frequently served at important ceremonies and gatherings.",
          slug: "amala",
          featured: true,
        },
        {
          name: "Jollof Rice",
          description: "Spicy tomato rice dish popular throughout West Africa",
          long_description: `
            Jollof Rice is one of West Africa's most famous dishes, enjoyed across Nigeria, Ghana, Senegal, and other countries in the region. The Nigerian version, particularly the one prepared by Yoruba people, is known for its rich, spicy flavor and distinctive orange-red color.

            This one-pot dish consists of rice cooked in a flavorful blend of tomatoes, peppers, onions, and various spices. The slow cooking process allows the rice to absorb all the flavors, resulting in a dish that's aromatic, tasty, and visually appealing.

            Jollof Rice is versatile and can be served with a variety of accompaniments, including fried plantains, moin moin, salad, and various proteins like chicken, beef, or fish. It's a staple at parties and celebrations, earning it the nickname "party jollof."
          `,
          image_url: "/placeholder.svg?height=800&width=600",
          video_id: "dQw4w9WgXcQ",
          category_id: categoryMap["rice-dishes"],
          ingredients: [
            "3 cups of long-grain parboiled rice",
            "6 large ripe tomatoes",
            "3 red bell peppers",
            "2 scotch bonnet peppers (adjust to taste)",
            "2 large onions",
            "1/3 cup vegetable oil",
            "2 tablespoons tomato paste",
            "2 cups chicken or vegetable stock",
            "3 bay leaves",
            "1 teaspoon thyme",
            "1 teaspoon curry powder",
            "2 teaspoons salt (adjust to taste)",
            "1 teaspoon white pepper",
            "2 cubes of bouillon",
          ],
          instructions: [
            "Blend the tomatoes, red bell peppers, scotch bonnet peppers, and one onion until smooth.",
            "Dice the remaining onion and set aside.",
            "Wash the rice thoroughly until the water runs clear, then drain.",
            "Heat the vegetable oil in a large pot. Add the diced onions and sauté until translucent.",
            "Add the tomato paste and fry for 2-3 minutes.",
            "Pour in the blended tomato-pepper mixture and cook on medium heat for about 15-20 minutes until the raw smell disappears and the sauce thickens.",
            "Add the thyme, curry powder, bay leaves, bouillon cubes, salt, and white pepper. Stir well.",
            "Add the washed rice to the pot and stir until it's well coated with the sauce.",
            "Pour in the chicken or vegetable stock. The liquid should be about 1 inch above the rice.",
            "Cover the pot with aluminum foil and then the pot lid to trap the steam.",
            "Reduce the heat to low and cook for about 30 minutes, or until the rice is tender and has absorbed the liquid.",
            "Fluff the rice with a fork and serve hot.",
          ],
          nutritional_info: {
            calories: "380 per serving",
            protein: "6g",
            carbs: "70g",
            fat: "8g",
            fiber: "2g",
          },
          cultural_significance:
            "Jollof Rice is more than just food; it's a cultural icon that has sparked friendly rivalries between West African countries, particularly Nigeria and Ghana, over who makes the best version. It's an essential dish at Nigerian parties and celebrations.",
          slug: "jollof-rice",
          featured: true,
        },
      ]

      const { error: foodsError } = await supabase.from("foods").upsert(foods, { onConflict: "slug" }).select()

      if (foodsError) throw foodsError

      toast({
        title: "Database seeded",
        description: "The database has been seeded with initial data.",
      })

      router.push("/admin")
      router.refresh()
    } catch (error) {
      console.error("Error seeding database:", error)
      toast({
        title: "Error",
        description: "Failed to seed database. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Seed Database</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This will populate the database with initial categories and foods. This is useful for testing or setting up
            a new environment.
          </p>
          <p className="mb-4 text-sm text-muted-foreground">Note: Existing data with the same slugs will be updated.</p>
          <Button onClick={seedDatabase} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Seeding Database...
              </>
            ) : (
              "Seed Database"
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
