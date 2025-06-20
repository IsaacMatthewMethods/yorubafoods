"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import VideoModal from "@/components/video-modal"
import { notFound } from "next/navigation"
import { useEffect } from "react"

// This would typically come from a database
const foodData = {
  "efo-riro": {
    name: "Efo Riro",
    description: "A rich vegetable soup made with spinach, assorted meats, and palm oil",
    longDescription: `
      Efo Riro is a rich and nutritious vegetable soup that originates from the Yoruba people of Western Nigeria. The name "Efo Riro" literally translates to "stirred leafy vegetable" in the Yoruba language.

      This delicious soup is made with a variety of leafy greens, most commonly spinach (efo tete) or kale, which are cooked with palm oil, assorted meats, fish, and a blend of aromatic spices. The combination of these ingredients creates a flavorful and hearty soup that is both nutritious and satisfying.

      Efo Riro is typically served with swallows like amala, eba, or pounded yam, making it a complete and balanced meal. It's a staple in Yoruba households and is enjoyed throughout Nigeria and beyond.
    `,
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
    nutritionalInfo: {
      calories: "320 per serving",
      protein: "18g",
      carbs: "12g",
      fat: "24g",
      fiber: "5g",
    },
    culturalSignificance:
      "Efo Riro is more than just a dish in Yoruba culture; it represents hospitality and community. It's often prepared for family gatherings and celebrations, symbolizing abundance and prosperity.",
    image: "/placeholder.svg?height=800&width=600",
    videoId: "dQw4w9WgXcQ",
  },
  egusi: {
    name: "Egusi Soup",
    description: "A rich vegetable soup made with ground melon seeds, vegetables, and assorted meats",
    longDescription: `
      Egusi Soup is a popular Nigerian soup made with ground melon seeds. It's a staple in Yoruba cuisine and is enjoyed throughout Nigeria and West Africa.

      The soup is made by cooking ground melon seeds with palm oil, vegetables, and various proteins like meat, fish, and seafood. The result is a thick, hearty soup with a unique flavor and texture.

      Egusi Soup is typically served with swallows like amala, eba, or pounded yam. It's a nutritious and satisfying meal that's perfect for family gatherings and special occasions.
    `,
    ingredients: [
      "2 cups ground egusi (melon seeds)",
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
      "2 cups chopped spinach or bitter leaf",
      "2 cubes of bouillon",
      "Salt to taste",
    ],
    instructions: [
      "Season the meat with salt, bouillon, and half of the diced onions. Cook until tender, adding water as needed to create a rich stock.",
      "Heat palm oil in a large pot. Add the remaining onions and sauté until translucent.",
      "Add the blended peppers and cook for about 10-15 minutes until the raw smell disappears and the oil floats to the top.",
      "Mix the ground egusi with a little water to form a paste. Add to the pot and stir well.",
      "Cover and cook for about 10 minutes, stirring occasionally to prevent burning.",
      "Add the cooked meat, tripe, smoked fish, stockfish, locust beans, and ground crayfish. Stir to combine.",
      "Add the meat stock and additional water if needed. The soup should be thick but not too thick.",
      "Simmer for 10 minutes to allow the flavors to meld together.",
      "Add the chopped spinach or bitter leaf and stir gently. Cook for 3-5 minutes until the vegetables are wilted.",
      "Adjust seasoning to taste and serve hot with your choice of swallow.",
    ],
    nutritionalInfo: {
      calories: "350 per serving",
      protein: "20g",
      carbs: "15g",
      fat: "25g",
      fiber: "6g",
    },
    culturalSignificance:
      "Egusi Soup is a symbol of abundance and prosperity in Yoruba culture. It's often served at important celebrations and gatherings, and is considered a dish of honor for special guests.",
    image: "/placeholder.svg?height=800&width=600",
    videoId: "XeZJlxAsP18",
  },
  amala: {
    name: "Amala",
    description: "Yam flour swallow with a smooth texture and dark color",
    longDescription: `
      Amala is a popular Nigerian swallow made from yam flour (elubo). It has a smooth, stretchy texture and a distinctive dark brown to purple-black color. Amala is a staple food among the Yoruba people of Western Nigeria.

      The process of making amala involves drying yam pieces and then grinding them into a fine powder. This powder is then mixed with boiling water and stirred continuously until it forms a smooth, dough-like consistency.

      Amala is traditionally eaten with soups like ewedu, gbegiri, or efo riro. It's known for its ability to be easily molded with fingers and used to scoop up soup, making it a perfect accompaniment to the rich, flavorful Yoruba soups.
    `,
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
    nutritionalInfo: {
      calories: "250 per serving",
      protein: "2g",
      carbs: "55g",
      fat: "0.5g",
      fiber: "3g",
    },
    culturalSignificance:
      "Amala is deeply rooted in Yoruba culture and is often associated with traditional values and heritage. It's a symbol of cultural identity and is frequently served at important ceremonies and gatherings.",
    image: "/placeholder.svg?height=800&width=600",
    videoId: "dQw4w9WgXcQ",
  },
  "jollof-rice": {
    name: "Jollof Rice",
    description: "Spicy tomato rice dish popular throughout West Africa",
    longDescription: `
      Jollof Rice is one of West Africa's most famous dishes, enjoyed across Nigeria, Ghana, Senegal, and other countries in the region. The Nigerian version, particularly the one prepared by Yoruba people, is known for its rich, spicy flavor and distinctive orange-red color.

      This one-pot dish consists of rice cooked in a flavorful blend of tomatoes, peppers, onions, and various spices. The slow cooking process allows the rice to absorb all the flavors, resulting in a dish that's aromatic, tasty, and visually appealing.

      Jollof Rice is versatile and can be served with a variety of accompaniments, including fried plantains, moin moin, salad, and various proteins like chicken, beef, or fish. It's a staple at parties and celebrations, earning it the nickname "party jollof."
    `,
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
    nutritionalInfo: {
      calories: "380 per serving",
      protein: "6g",
      carbs: "70g",
      fat: "8g",
      fiber: "2g",
    },
    culturalSignificance:
      "Jollof Rice is more than just food; it's a cultural icon that has sparked friendly rivalries between West African countries, particularly Nigeria and Ghana, over who makes the best version. It's an essential dish at Nigerian parties and celebrations.",
    image: "/placeholder.svg?height=800&width=600",
    videoId: "dQw4w9WgXcQ",
  },

  // Add more food items as needed
}

export default function FoodDetailPage({ params }: { params: { id: string } }) {
  const [showVideo, setShowVideo] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [food, setFood] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const foodItem = foodData[params.id as keyof typeof foodData]
      if (!foodItem) {
        notFound()
      }
      setFood(foodItem)
    } catch (err) {
      setError("Failed to load food details. Please try again later.")
      console.error("Error loading food details:", err)
    } finally {
      setLoading(false)
    }
  }, [params.id])

  const handleImageError = () => {
    setImageError(true)
  }

  if (loading) {
    return (
      <main className="w-full px-4 py-6 mt-16">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yoruba-500"></div>
        </div>
      </main>
    )
  }

  if (error || !food) {
    return (
      <main className="w-full px-4 py-6 mt-16">
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg">{error || "Food not found"}</div>
      </main>
    )
  }

  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={
              imageError
                ? "/placeholder.svg?height=800&width=400"
                : food.image || "/placeholder.svg?height=800&width=600"
            }
            alt={food.name}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
            onError={handleImageError}
          />
          {food.videoId && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full bg-black/70 hover:bg-black text-white"
              onClick={() => setShowVideo(true)}
            >
              <Play className="h-6 w-6" />
            </Button>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-muted-foreground mt-2">{food.description}</p>
        </div>

        <div className="prose dark:prose-invert">
          {food.longDescription.split("\n").map((paragraph: string, index: number) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="space-y-2">
            {food.ingredients.map((ingredient: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ol className="space-y-3">
            {food.instructions.map((instruction: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yoruba-500 text-white text-sm font-medium mr-3 shrink-0">
                  {index + 1}
                </span>
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Nutritional Information</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Calories</p>
              <p className="font-medium">{food.nutritionalInfo.calories}</p>
            </div>
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Protein</p>
              <p className="font-medium">{food.nutritionalInfo.protein}</p>
            </div>
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Carbs</p>
              <p className="font-medium">{food.nutritionalInfo.carbs}</p>
            </div>
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Fat</p>
              <p className="font-medium">{food.nutritionalInfo.fat}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Cultural Significance</h2>
          <p>{food.culturalSignificance}</p>
        </div>
      </div>

      {showVideo && food.videoId && <VideoModal videoId={food.videoId} onClose={() => setShowVideo(false)} />}
    </main>
  )
}
