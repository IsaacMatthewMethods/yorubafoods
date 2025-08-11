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

      Efo Riro is typically served with swallows like amala, eba, or pounded yam, making it a complete and balanced meal. It's a staple in Yoruba households and is enjoyed throughout Nigeria and beyond. The soup is known for its vibrant green color and rich, complex flavors that come from the combination of fresh vegetables and well-seasoned proteins.
    `,
    ingredients: [
      "2 bunches of spinach (efo tete) or kale, washed and chopped",
      "1/4 cup palm oil",
      "1 large onion, diced",
      "3 red bell peppers (tatashe), blended",
      "3 scotch bonnet peppers (ata rodo), blended (adjust to taste)",
      "2 tablespoons locust beans (iru)",
      "1/2 pound beef, cut into bite-sized pieces",
      "1/2 pound tripe, cleaned and cut into pieces",
      "1/4 pound smoked fish, deboned and flaked",
      "1/4 pound stockfish, soaked and deboned",
      "2 tablespoons ground crayfish",
      "2 cubes of bouillon (Maggi or Knorr)",
      "Salt to taste",
      "1 cup meat stock",
    ],
    instructions: [
      "Season the meat with salt, bouillon, and half of the diced onions. Cook until tender, adding water as needed to create a rich stock. Set aside.",
      "Heat palm oil in a large pot over medium heat. Add the remaining onions and sauté until translucent and fragrant.",
      "Add the blended peppers (tatashe and ata rodo) and cook for about 10-15 minutes, stirring frequently until the raw smell disappears and the oil floats to the top.",
      "Add the locust beans (iru) and ground crayfish. Stir well and cook for 2-3 minutes to release their flavors.",
      "Add the cooked meat, tripe, smoked fish, and stockfish. Stir to combine and let cook for 5 minutes.",
      "Pour in the meat stock and let it simmer for 5 minutes to allow the flavors to meld together.",
      "Add the chopped spinach or kale and stir gently. Cook for 3-5 minutes until the vegetables are wilted but still retain their green color.",
      "Taste and adjust seasoning with salt and bouillon cubes as needed. Serve hot with your choice of swallow.",
    ],
    nutritionalInfo: {
      calories: "320 per serving",
      protein: "18g",
      carbs: "12g",
      fat: "24g",
      fiber: "5g",
    },
    culturalSignificance:
      "Efo Riro is more than just a dish in Yoruba culture; it represents hospitality and community. It's often prepared for family gatherings and celebrations, symbolizing abundance and prosperity. The soup is considered a complete meal and is frequently served to guests as a sign of respect and care. In Yoruba tradition, the ability to prepare a good Efo Riro is seen as a mark of culinary skill.",
    image: "/placeholder.svg?height=800&width=600&text=Efo+Riro+Spinach+Soup",
    videoId: "",
  },
  egusi: {
    name: "Egusi Soup",
    description: "A rich vegetable soup made with ground melon seeds, vegetables, and assorted meats",
    longDescription: `
      Egusi Soup is one of the most popular and widely consumed soups in Nigeria, made primarily from ground melon seeds (egusi). This thick, hearty soup is a staple across various Nigerian ethnic groups, with each region adding its own unique twist to the preparation.

      The soup gets its distinctive flavor and texture from the ground melon seeds, which are rich in protein and healthy fats. When cooked properly, egusi soup has a thick, almost stew-like consistency that pairs perfectly with various Nigerian swallows. The addition of leafy vegetables like spinach, bitter leaf, or ugu (fluted pumpkin leaves) adds nutritional value and color to the dish.

      Egusi soup is versatile and can accommodate various proteins including beef, chicken, fish, and seafood. It's often prepared for special occasions and gatherings, representing abundance and celebration in Nigerian culture.
    `,
    ingredients: [
      "2 cups ground egusi (melon seeds)",
      "1/4 cup palm oil",
      "1 large onion, diced",
      "3 red bell peppers (tatashe), blended",
      "3 scotch bonnet peppers (ata rodo), blended (adjust to taste)",
      "2 tablespoons locust beans (iru)",
      "1/2 pound beef, cut into bite-sized pieces",
      "1/2 pound tripe, cleaned and cut into pieces",
      "1/4 pound smoked fish, deboned and flaked",
      "1/4 pound stockfish, soaked and deboned",
      "2 tablespoons ground crayfish",
      "2 cups chopped spinach, bitter leaf, or ugu leaves",
      "2 cubes of bouillon (Maggi or Knorr)",
      "Salt to taste",
      "2 cups meat stock",
    ],
    instructions: [
      "Season the meat with salt, bouillon, and half of the diced onions. Cook until tender, adding water as needed to create a rich stock. Reserve the stock.",
      "Heat palm oil in a large pot over medium heat. Add the remaining onions and sauté until translucent.",
      "Add the blended peppers and cook for about 10-15 minutes until the raw smell disappears and the oil separates.",
      "Mix the ground egusi with a little warm water to form a smooth paste. Add this paste to the pot and stir well.",
      "Cover and cook for about 10 minutes, stirring occasionally to prevent burning. The egusi should thicken and the oil should rise to the surface.",
      "Add the cooked meat, tripe, smoked fish, stockfish, locust beans, and ground crayfish. Stir to combine.",
      "Gradually add the reserved meat stock until you achieve your desired consistency. The soup should be thick but not too thick.",
      "Simmer for 10-15 minutes to allow all flavors to meld together, stirring occasionally.",
      "Add the chopped vegetables and stir gently. Cook for 3-5 minutes until the vegetables are wilted but still vibrant.",
      "Taste and adjust seasoning with salt and bouillon cubes. Serve hot with your choice of swallow.",
    ],
    nutritionalInfo: {
      calories: "350 per serving",
      protein: "20g",
      carbs: "15g",
      fat: "25g",
      fiber: "6g",
    },
    culturalSignificance:
      "Egusi Soup is a symbol of abundance and prosperity in Nigerian culture. It's often served at important celebrations and gatherings, and is considered a dish of honor for special guests. The soup represents the diversity of Nigerian cuisine, as different regions have their own variations and preparation methods. In many Nigerian households, egusi soup is prepared for Sunday meals and special occasions.",
    image: "/placeholder.svg?height=800&width=600&text=Egusi+Soup+Melon+Seeds",
    videoId: "",
  },
  ewedu: {
    name: "Ewedu Soup",
    description: "A popular and healthy Yoruba soup made from jute leaves",
    longDescription: `
      Ewedu Soup is one of the most iconic soups in Yoruba cuisine, made from jute leaves (Corchorus olitorius). This light, nutritious soup is beloved for its unique texture and health benefits. The name "Ewedu" comes from the Yoruba word for jute leaves, which are the primary ingredient in this traditional soup.

      What makes Ewedu special is its characteristic slimy, "draw" texture that's achieved through careful preparation of the jute leaves. The leaves are either blended or traditionally beaten with a local broom called "ijabe" to achieve the perfect consistency. This soup is not only delicious but also packed with vitamins, minerals, and antioxidants.

      Ewedu is traditionally served as part of the famous "Abula" combination - a trio of Amala (yam flour swallow), Ewedu soup, and Gbegiri (bean soup), often accompanied by a rich stew. This combination is considered the ultimate Yoruba meal and is served at important gatherings and celebrations.
    `,
    ingredients: [
      "2 cups fresh Ewedu leaves (jute leaves)",
      "1 teaspoon ground crayfish (optional)",
      "1 teaspoon Iru (locust beans)",
      "Salt - to taste",
      "Maggi/seasoning cube - to taste",
      "Water - about 1 to 1½ cups",
      "Potash (kaun) - a pinch (optional, helps soften leaves)",
    ],
    instructions: [
      "Wash the Ewedu leaves thoroughly and remove thick stalks.",
      "Boil water (about 1 cup) in a small pot. Add a pinch of potash (if using).",
      "Add the Ewedu leaves to the boiling water and cook for 3–5 minutes until soft.",
      "Blend or mash the leaves: Use a blender to pulse for a few seconds, OR use the traditional broom (ijabe) to beat until smooth and drawy.",
      "Return to low heat, add crayfish, Iru (locust beans), salt and seasoning cube.",
      "Stir well and let it simmer for another 2–3 minutes.",
      "Serve hot with Amala or any swallow, often alongside Gbegiri and stew.",
    ],
    nutritionalInfo: {
      calories: "45 per serving",
      protein: "3g",
      carbs: "8g",
      fat: "0.5g",
      fiber: "4g",
    },
    culturalSignificance:
      "Ewedu soup is deeply embedded in Yoruba culture and is considered a symbol of tradition and heritage. It's an essential component of the Abula meal, which is served at weddings, naming ceremonies, and other important celebrations. The preparation method, especially the traditional beating with ijabe, is passed down through generations and represents the preservation of cultural practices.",
    image: "/placeholder.svg?height=800&width=600&text=Ewedu+Soup+Jute+Leaves",
    videoId: "ogB0JsUyVv8",
  },
  gbegiri: {
    name: "Gbegiri Soup",
    description: "The delicious Yoruba bean soup often paired with Ewedu and stew (abula combo)",
    longDescription: `
      Gbegiri Soup is a traditional Yoruba bean soup that forms an integral part of the famous "Abula" combination. Made from peeled brown beans or black-eyed peas, this smooth, creamy soup is known for its rich flavor and satisfying texture. The name "Gbegiri" comes from the Yoruba language, referring to this specific style of bean preparation.

      What sets Gbegiri apart from other bean dishes is its smooth, almost porridge-like consistency achieved by thoroughly cooking and blending the beans. The soup is typically light in color, ranging from cream to light brown, depending on the type of beans used and the cooking method employed.

      Gbegiri is rarely served alone but is traditionally part of the Abula trio - served alongside Ewedu soup and a rich pepper stew, all eaten with Amala. This combination represents the pinnacle of Yoruba cuisine and is considered a complete, balanced meal that provides protein, vitamins, and minerals essential for good health.
    `,
    ingredients: [
      "1 cup peeled brown beans (or black-eyed peas)",
      "Palm oil - 2 to 3 tablespoons",
      "Iru (locust beans) - 1 teaspoon (optional)",
      "Crayfish - 1 teaspoon (optional)",
      "Ground pepper or chili powder - to taste",
      "Seasoning cube - to taste",
      "Salt - to taste",
      "Meat stock (optional)",
      "Water - as needed",
    ],
    instructions: [
      "Soak and peel the beans if not already peeled.",
      "Boil the beans in enough water until very soft (about 40 mins–1 hour).",
      "Blend or mash the beans: You can blend until smooth (with a little of the boiling water), or use a wooden spoon or sieve to mash.",
      "Pour the blended beans back into the pot. Add palm oil, crayfish, iru, pepper, seasoning and salt, meat stock (if using).",
      "Cook on low heat, stirring regularly, until it thickens and oil rises to the top (10–15 minutes).",
      "Adjust seasoning to taste and serve hot as part of the Abula combination.",
    ],
    nutritionalInfo: {
      calories: "220 per serving",
      protein: "12g",
      carbs: "32g",
      fat: "6g",
      fiber: "8g",
    },
    culturalSignificance:
      "Gbegiri soup is a cornerstone of Yoruba culinary tradition and represents the sophisticated nature of Yoruba cuisine. As part of the Abula combination, it's served at the most important celebrations including weddings, festivals, and religious ceremonies. The soup symbolizes abundance and prosperity, and its preparation is considered an art form that showcases the cook's skill and cultural knowledge.",
    image: "/placeholder.svg?height=800&width=600&text=Gbegiri+Bean+Soup",
    videoId: "4EgTUHViaRU",
  },
  "ila-asepo": {
    name: "Ila Asepo",
    description: "A delicious Yoruba okra soup cooked together with meat, pepper, and seasoning",
    longDescription: `
      Ila Asepo is a traditional Yoruba okra soup that differs from the more commonly known Ewedu soup. Unlike Ewedu, which is typically served separately, Ila Asepo is cooked as a complete one-pot meal with meat, peppers, and seasonings all combined together.

      The name "Ila Asepo" literally translates to "okra cooked together" in Yoruba, which perfectly describes this hearty soup. The okra provides a natural thickening agent and gives the soup its characteristic "draw" or stretchy texture that's beloved in West African cuisine.

      This soup is particularly popular in Yoruba households because of its simplicity and rich flavor. The combination of fresh okra, well-seasoned meat, and aromatic spices creates a satisfying meal that's both nutritious and comforting. It's often served during family gatherings and is considered a staple comfort food.
    `,
    ingredients: [
      "2-3 cups fresh okra (ila) - chopped or grated",
      "3 tablespoons palm oil",
      "Assorted meat or beef - boiled and seasoned",
      "1 tablespoon Iru (locust beans) - optional",
      "1 tablespoon ground crayfish",
      "Ground pepper (ata rodo + tatase) - blended to taste",
      "Seasoning cubes - to taste",
      "Salt - to taste",
      "Onions - optional",
      "1 cup meat stock",
      "Water - as needed",
    ],
    instructions: [
      "Boil the meat with seasoning, onions, and salt until tender. Set aside the stock.",
      "In a pot, heat palm oil, then add blended pepper. Fry for about 5–7 minutes.",
      "Add the meat stock to the fried pepper. Stir and let it simmer.",
      "Add the boiled meat, iru, crayfish, seasoning cube, and salt. Let it cook for 5 minutes.",
      "Add the chopped or grated okra. Stir well and cook for 5–10 minutes. Don't overcook to keep it drawy.",
      "Stir and taste. Adjust salt or seasoning if needed.",
      "Serve hot with your choice of swallow.",
    ],
    nutritionalInfo: {
      calories: "290 per serving",
      protein: "20g",
      carbs: "16g",
      fat: "18g",
      fiber: "6g",
    },
    culturalSignificance:
      "Ila Asepo represents the ingenuity of Yoruba cooking, where simple ingredients are transformed into flavorful, nutritious meals. It's often prepared by mothers as a quick, healthy meal for the family and is associated with home cooking and maternal care. The soup is also significant in traditional medicine, as okra is believed to have various health benefits.",
    image: "/placeholder.svg?height=800&width=600&text=Ila+Asepo+Okra+Soup",
    videoId: "",
  },
  ogbono: {
    name: "Ogbono Soup",
    description: "A popular Nigerian draw soup made from ground African bush mango seeds",
    longDescription: `
      Ogbono Soup is one of Nigeria's most beloved traditional soups, made from ground African bush mango seeds (Irvingia gabonensis). This soup is particularly popular among the Yoruba, Igbo, and other Nigerian ethnic groups for its unique texture and rich flavor.

      The soup gets its characteristic "draw" or stretchy consistency from the ogbono seeds, which act as a natural thickener when cooked. This creates a satisfying, hearty soup that's both nutritious and filling. The seeds are rich in protein, healthy fats, and various vitamins and minerals.

      Ogbono soup is versatile and can be prepared with various proteins including beef, chicken, fish, and seafood. It's often enhanced with vegetables like bitter leaf or ugu (fluted pumpkin leaves) for added nutrition and flavor. The soup is a staple at Nigerian gatherings and is considered comfort food by many.
    `,
    ingredients: [
      "1 cup ogbono powder (ground African bush mango seeds)",
      "3-4 tablespoons palm oil",
      "Assorted meat or beef - pre-boiled",
      "Stock fish or dry fish - soaked and cleaned",
      "1 tablespoon ground crayfish",
      "Blended pepper (scotch bonnet + bell pepper) - to taste",
      "Iru (locust beans) - optional",
      "Seasoning cubes - to taste",
      "Salt - to taste",
      "Water or meat stock - as needed",
      "Ugu or bitterleaf (optional) - washed and chopped",
    ],
    instructions: [
      "Heat palm oil in a pot (do not bleach), then add the ground ogbono. Stir continuously on low heat until it melts and forms a smooth, stretchy mix.",
      "Slowly add warm water or meat stock, stirring to avoid lumps. Cook for 5–7 minutes.",
      "Add the cooked meat, stock fish, pepper, crayfish, iru, seasoning, and salt. Stir and let it simmer for another 10 minutes.",
      "If using vegetables, add them last and cook for 3 more minutes.",
      "Stir well, and adjust seasoning if needed.",
      "Serve hot with your choice of swallow.",
    ],
    nutritionalInfo: {
      calories: "340 per serving",
      protein: "22g",
      carbs: "14g",
      fat: "24g",
      fiber: "8g",
    },
    culturalSignificance:
      "Ogbono soup holds special significance in Nigerian culture as a symbol of unity and sharing. The communal nature of eating from a shared pot of ogbono with swallow represents togetherness and family bonds. It's often prepared for special occasions and is considered a dish that brings people together.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bzbdMZPLc9QP4TvnPz33m2LX7fGluc.png",
    videoId: "PH-G3ukBbAc",
  },
  "obe-ata": {
    name: "Obe Ata",
    description: "Yoruba-style pepper stew, a rich red stew used as a base or served with rice, yam, or swallow",
    longDescription: `
      Obe Ata is a fundamental Yoruba pepper stew that serves as the backbone of many Nigerian dishes. This rich, red stew is made primarily from red bell peppers (tatashe), tomatoes, and scotch bonnet peppers, creating a flavorful base that can be used in various ways.

      The name "Obe Ata" literally means "pepper stew" in Yoruba, and it's one of the most versatile sauces in Nigerian cuisine. It can be served as a standalone stew with rice or yam, or used as a base for other dishes when combined with vegetables like ewedu or okra.

      This stew is characterized by its vibrant red color, rich flavor, and the way the oil rises to the top when properly cooked. It's a staple in Yoruba households and represents the foundation of many traditional Nigerian meals.
    `,
    ingredients: [
      "4 red bell peppers (Tatashe)",
      "2-3 scotch bonnet peppers (Ata rodo) - adjust to taste",
      "3 tomatoes",
      "1 large onion (half for blending, half for frying)",
      "1/2 cup palm oil or vegetable oil",
      "Assorted meat or beef - cooked",
      "Seasoning cubes - to taste",
      "Salt - to taste",
      "1 tablespoon crayfish (optional)",
      "1 tablespoon Iru (locust beans, optional)",
      "Small amount of ginger and garlic (optional)",
    ],
    instructions: [
      "Blend red peppers, tomatoes, scotch bonnet peppers, half onion, and (if using) garlic/ginger into a smooth paste.",
      "Boil the pepper mixture until water reduces and it thickens.",
      "In a pot, heat oil and fry the other half of the sliced onion. Add iru if using.",
      "Add the boiled pepper mix into the oil and stir. Fry on medium heat for about 15–20 minutes until oil begins to rise to the top.",
      "Add crayfish, seasoning cubes, and salt. Stir and let it simmer.",
      "Add boiled meat and allow to cook in the stew for another 10 minutes.",
      "Adjust seasoning to taste and serve hot.",
    ],
    nutritionalInfo: {
      calories: "280 per serving",
      protein: "15g",
      carbs: "18g",
      fat: "18g",
      fiber: "4g",
    },
    culturalSignificance:
      "Obe Ata is the foundation of Yoruba cuisine and represents the mastery of pepper stew preparation. It's often the first stew young Yoruba women learn to make, and its quality is considered a measure of cooking skill. The stew is essential for many traditional ceremonies and family gatherings.",
    image:
      "https://www.seriouseats.com/thmb/XWe7TRn7TajCl8Q3t2ItYqfQPec=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__02__20200224-obe-ata-vicky-wasik-23-48ef3dfb1176452f99d4a0c6fbed3e16.jpg",
    videoId: "z6aIG2NL-9Y",
  },
  amala: {
    name: "Amala",
    description: "Yam flour swallow with a smooth texture and distinctive dark color",
    longDescription: `
      Amala is one of the most popular Nigerian swallows, particularly beloved by the Yoruba people of Western Nigeria. Made from yam flour (elubo), this starchy staple has a smooth, stretchy texture and a distinctive dark brown to purple-black color that sets it apart from other Nigerian swallows.

      The process of making amala involves drying yam pieces and then grinding them into a fine powder called "elubo." This powder is then mixed with boiling water and stirred continuously until it forms a smooth, dough-like consistency. The skill lies in achieving the perfect texture - smooth enough to swallow easily but firm enough to hold its shape.

      Amala is traditionally eaten with soups like ewedu, gbegiri, efo riro, or ogbono. It's known for its ability to be easily molded with fingers and used to scoop up soup, making it a perfect accompaniment to the rich, flavorful Yoruba soups. The combination of amala with soup creates a complete, satisfying meal.
    `,
    ingredients: ["2 cups of yam flour (elubo)", "3-4 cups of water", "Additional hot water as needed for consistency"],
    instructions: [
      "Boil 3-4 cups of water in a medium-sized pot over high heat.",
      "Once the water reaches a rolling boil, reduce the heat to medium-low to prevent splashing.",
      "Gradually add the yam flour to the boiling water, sprinkling it in small amounts while stirring continuously with a wooden spoon to prevent lumps from forming.",
      "Continue stirring vigorously in one direction until the mixture becomes thick and smooth. This process requires constant stirring to achieve the right consistency.",
      "Cover the pot and allow to cook on low heat for about 2-3 minutes. This helps to cook the flour thoroughly.",
      "Remove the lid and stir again to ensure even cooking and a smooth, stretchy consistency.",
      "If the amala is too thick, gradually add small amounts of hot water while stirring until you achieve the desired consistency. It should be smooth and moldable.",
      "The amala is ready when it has a smooth, elastic texture and pulls away from the sides of the pot.",
      "Serve immediately while hot with your choice of soup.",
    ],
    nutritionalInfo: {
      calories: "250 per serving",
      protein: "2g",
      carbs: "55g",
      fat: "0.5g",
      fiber: "3g",
    },
    culturalSignificance:
      "Amala is deeply rooted in Yoruba culture and is often associated with traditional values and heritage. It's a symbol of cultural identity and is frequently served at important ceremonies and gatherings. The preparation of amala is considered an art form, and the ability to make smooth, lump-free amala is highly valued. It's often the centerpiece of the traditional Yoruba meal called 'Abula' - a combination of amala, ewedu, gbegiri, and stew.",
    image: "/placeholder.svg?height=800&width=600&text=Amala+Yam+Flour",
    videoId: "",
  },
  "jollof-rice": {
    name: "Jollof Rice",
    description: "Spicy tomato rice dish popular throughout West Africa",
    longDescription: `
      Jollof Rice is arguably West Africa's most famous dish, enjoyed across Nigeria, Ghana, Senegal, and other countries in the region. The Nigerian version, particularly the one prepared by Yoruba people, is known for its rich, spicy flavor and distinctive orange-red color that comes from tomatoes and peppers.

      This one-pot wonder consists of rice cooked in a flavorful blend of tomatoes, peppers, onions, and various spices. The slow cooking process allows the rice to absorb all the flavors, resulting in a dish that's aromatic, tasty, and visually appealing. The key to perfect jollof rice lies in achieving the right balance of spices and the perfect rice texture - each grain should be separate yet flavorful.

      Jollof Rice is incredibly versatile and can be served with a variety of accompaniments, including fried plantains, moin moin, coleslaw, and various proteins like chicken, beef, or fish. It's a staple at parties and celebrations, earning it the nickname "party jollof," and has sparked friendly rivalries between West African countries over who makes the best version.
    `,
    ingredients: [
      "3 cups of long-grain parboiled rice",
      "6 large ripe tomatoes",
      "3 red bell peppers (tatashe)",
      "2-3 scotch bonnet peppers (ata rodo) - adjust to taste",
      "2 large onions",
      "1/3 cup vegetable oil",
      "2 tablespoons tomato paste",
      "2-3 cups chicken or vegetable stock",
      "3 bay leaves",
      "1 teaspoon dried thyme",
      "1 teaspoon curry powder",
      "2 teaspoons salt (adjust to taste)",
      "1 teaspoon white pepper",
      "2 cubes of bouillon (Maggi or Knorr)",
      "1 teaspoon garlic powder (optional)",
      "1 teaspoon ginger powder (optional)",
    ],
    instructions: [
      "Blend the tomatoes, red bell peppers, scotch bonnet peppers, and one onion until smooth. Set aside.",
      "Dice the remaining onion and set aside separately.",
      "Wash the rice thoroughly in cold water until the water runs clear, then drain and set aside.",
      "Heat the vegetable oil in a large, heavy-bottomed pot over medium heat. Add the diced onions and sauté until translucent and fragrant.",
      "Add the tomato paste and fry for 2-3 minutes, stirring constantly to prevent burning.",
      "Pour in the blended tomato-pepper mixture and cook on medium heat for about 15-20 minutes, stirring occasionally until the mixture reduces, the raw smell disappears, and the sauce thickens.",
      "Add the thyme, curry powder, bay leaves, bouillon cubes, salt, white pepper, and optional garlic and ginger powder. Stir well to combine.",
      "Add the washed rice to the pot and stir until each grain is well coated with the tomato sauce.",
      "Pour in the chicken or vegetable stock gradually. The liquid should be about 1 inch above the rice level.",
      "Bring to a boil, then cover the pot with aluminum foil and then the pot lid to create a tight seal and trap the steam.",
      "Reduce the heat to low and cook for about 25-30 minutes, or until the rice is tender and has absorbed most of the liquid.",
      "Check occasionally and add more stock or water if needed, but avoid stirring too much to prevent the rice from becoming mushy.",
      "Once cooked, remove from heat and let it rest for 5 minutes before removing the lid.",
      "Fluff gently with a fork, remove bay leaves, and serve hot.",
    ],
    nutritionalInfo: {
      calories: "380 per serving",
      protein: "6g",
      carbs: "70g",
      fat: "8g",
      fiber: "2g",
    },
    culturalSignificance:
      "Jollof Rice is more than just food; it's a cultural icon that has sparked friendly rivalries between West African countries, particularly Nigeria and Ghana, over who makes the best version. It's an essential dish at Nigerian parties, weddings, and celebrations. The dish represents unity and celebration, bringing people together around shared meals. In Nigerian culture, the quality of one's jollof rice is often seen as a measure of cooking skill.",
    image: "/placeholder.svg?height=800&width=600&text=Jollof+Rice+Nigerian",
    videoId: "",
  },
  "amala-ewedu": {
    name: "Amala & Ewedu",
    description: "A classic Yoruba combination of yam flour swallow with jute leaf soup",
    longDescription: `
    Amala & Ewedu represents one of the most iconic food combinations in Yoruba cuisine. This pairing brings together the smooth, dark yam flour swallow (Amala) with the light, nutritious jute leaf soup (Ewedu), creating a perfect harmony of textures and flavors.

    This combination is often part of the famous "Abula" - a complete Yoruba meal that includes Amala, Ewedu, Gbegiri (bean soup), and a rich pepper stew. The contrast between the substantial, filling nature of Amala and the light, healthy Ewedu creates a balanced meal that's both satisfying and nutritious.

    The pairing is deeply rooted in Yoruba tradition and represents the sophistication of Yoruba cuisine, where different elements come together to create something greater than the sum of its parts. It's commonly served at celebrations, family gatherings, and traditional ceremonies.
  `,
    ingredients: [
      "For Amala:",
      "2 cups yam flour (elubo)",
      "3-4 cups water",
      "",
      "For Ewedu:",
      "2 cups fresh Ewedu leaves (jute leaves)",
      "1 teaspoon ground crayfish",
      "1 teaspoon Iru (locust beans)",
      "Salt to taste",
      "Seasoning cube to taste",
      "1-1½ cups water",
      "Pinch of potash (kaun) - optional",
    ],
    instructions: [
      "Prepare the Amala: Boil 3-4 cups of water in a pot. Gradually add yam flour while stirring continuously to prevent lumps.",
      "Continue stirring until the mixture becomes thick and smooth. Cover and cook on low heat for 2-3 minutes.",
      "Stir again to ensure smooth consistency. If too thick, add hot water gradually. Set aside and keep warm.",
      "Prepare the Ewedu: Wash Ewedu leaves thoroughly and remove thick stalks.",
      "Boil water in a small pot, add a pinch of potash if using, then add the Ewedu leaves. Cook for 3-5 minutes until soft.",
      "Blend the leaves briefly or use traditional broom (ijabe) to beat until smooth and drawy.",
      "Return to low heat, add crayfish, iru, salt, and seasoning cube. Simmer for 2-3 minutes.",
      "Serve the Amala alongside the Ewedu soup, traditionally with Gbegiri and pepper stew.",
    ],
    nutritionalInfo: {
      calories: "295 per serving",
      protein: "5g",
      carbs: "63g",
      fat: "1g",
      fiber: "7g",
    },
    culturalSignificance:
      "Amala & Ewedu is the cornerstone of Yoruba cuisine and represents cultural identity and tradition. This combination is essential at Yoruba weddings, naming ceremonies, and festivals. It symbolizes unity and completeness, often served to honor guests and celebrate important occasions. The pairing demonstrates the Yoruba philosophy of balance in both nutrition and flavor.",
    image: "/placeholder.svg?height=800&width=600&text=Amala+and+Ewedu+Combination",
    videoId: "",
  },
  "moin-moin": {
    name: "Moin Moin",
    description: "Steamed bean pudding with peppers, onions, and spices",
    longDescription: `
    Moin Moin is a traditional Nigerian steamed bean pudding that's beloved across the country, particularly among the Yoruba people. Made from peeled black-eyed peas (beans), this protein-rich dish is steamed to perfection, creating a smooth, cake-like texture that's both nutritious and delicious.

    The beauty of Moin Moin lies in its versatility - it can be prepared as a simple, everyday meal or dressed up with various proteins like fish, eggs, or meat for special occasions. The dish is naturally gluten-free and packed with plant-based protein, making it a healthy choice for people of all ages.

    Traditionally, Moin Moin was steamed in banana leaves or uma leaves, which imparted a subtle, earthy flavor to the dish. Today, it's commonly prepared in aluminum foil, plastic containers, or special Moin Moin cups, but the traditional leaf-wrapping method is still preferred for its authentic taste and cultural significance.
  `,
    ingredients: [
      "2 cups black-eyed peas (beans), soaked and peeled",
      "1 large onion",
      "3-4 red bell peppers (tatashe)",
      "2-3 scotch bonnet peppers (ata rodo) - adjust to taste",
      "1/4 cup palm oil or vegetable oil",
      "2 tablespoons ground crayfish",
      "2 seasoning cubes",
      "Salt to taste",
      "1 cup warm water or stock",
      "Hard-boiled eggs (optional)",
      "Smoked fish or meat (optional)",
      "Banana leaves or aluminum foil for wrapping",
    ],
    instructions: [
      "Soak the black-eyed peas in water for 30 minutes, then rub to remove the skins. Rinse until clean.",
      "Blend the peeled beans with onions, peppers, and a little water until smooth. The consistency should be like thick pancake batter.",
      "Pour the blended mixture into a bowl. Add palm oil, ground crayfish, seasoning cubes, and salt. Mix well.",
      "Gradually add warm water or stock to achieve a pourable consistency. The mixture should not be too thick or too thin.",
      "Taste and adjust seasoning as needed.",
      "If using banana leaves, blanch them in hot water to soften. Cut into squares for wrapping.",
      "Pour the mixture into prepared containers, banana leaf parcels, or aluminum foil. Add boiled eggs or fish if desired.",
      "Steam for 45 minutes to 1 hour until firm and cooked through. Test with a toothpick - it should come out clean.",
      "Allow to cool slightly before unwrapping. Serve warm as a main dish or side.",
    ],
    nutritionalInfo: {
      calories: "180 per serving",
      protein: "12g",
      carbs: "20g",
      fat: "6g",
      fiber: "5g",
    },
    culturalSignificance:
      "Moin Moin holds special significance in Nigerian culture as a symbol of celebration and hospitality. It's a staple at parties, weddings, and religious gatherings. The dish represents resourcefulness and creativity in Nigerian cooking, transforming simple beans into an elegant, flavorful meal. In Yoruba culture, the ability to make smooth, well-seasoned Moin Moin is considered a mark of culinary skill.",
    image: "/placeholder.svg?height=800&width=600&text=Moin+Moin+Bean+Pudding",
    videoId: "",
  },
  eba: {
    name: "Eba",
    description: "Garri (cassava) swallow with a slightly sour taste",
    longDescription: `
    Eba is one of Nigeria's most popular swallows, made from garri (processed cassava flakes). This staple food is beloved for its simplicity, affordability, and versatility. Eba has a distinctive slightly sour taste that comes from the fermentation process used in making garri, and it pairs wonderfully with a variety of Nigerian soups.

    The preparation of Eba is straightforward but requires skill to achieve the perfect consistency - it should be smooth, stretchy, and free of lumps. The texture should be firm enough to hold its shape when molded but soft enough to swallow easily. Different regions in Nigeria have their preferred consistency, with some preferring it firmer and others softer.

    Eba is particularly popular because garri has a long shelf life and is readily available throughout Nigeria. It's a filling, energy-rich food that provides sustenance for millions of Nigerians daily. The dish is naturally gluten-free and can be prepared quickly, making it a convenient choice for busy households.
  `,
    ingredients: ["1½ cups garri (cassava flakes)", "2-3 cups hot water", "Additional hot water as needed"],
    instructions: [
      "Boil water in a pot. You'll need enough hot water to achieve the right consistency.",
      "Pour the garri into a bowl and check for any impurities or stones. Remove if found.",
      "Gradually add hot water to the garri, starting with about 1 cup. The water should be very hot but not necessarily boiling.",
      "Using a wooden spoon or turning stick, mix the garri and water quickly and vigorously to prevent lumps from forming.",
      "Continue adding hot water gradually while mixing until you achieve a smooth, stretchy consistency.",
      "The Eba should be firm enough to mold with your hands but soft enough to swallow easily.",
      "Knead the mixture with the wooden spoon until it becomes smooth and elastic.",
      "If it's too thick, add more hot water gradually. If too soft, add a little more garri.",
      "Once the desired consistency is achieved, cover and let it rest for 2-3 minutes.",
      "Serve immediately while warm with your choice of soup.",
    ],
    nutritionalInfo: {
      calories: "360 per serving",
      protein: "1g",
      carbs: "88g",
      fat: "0.5g",
      fiber: "2g",
    },
    culturalSignificance:
      "Eba represents resilience and adaptability in Nigerian culture. As an affordable, filling meal, it has sustained generations of Nigerians and is often called 'the food of the masses.' Despite its humble origins, Eba is enjoyed across all social classes and is a unifying food that brings people together. It's commonly served at both everyday meals and special gatherings, demonstrating its integral role in Nigerian food culture.",
    image: "/placeholder.svg?height=800&width=600&text=Eba+Garri+Swallow",
    videoId: "",
  },
  iyan: {
    name: "Iyan (Pounded Yam)",
    description: "Pounded yam with a smooth, stretchy texture",
    longDescription: `
    Iyan, commonly known as Pounded Yam, is considered the king of Nigerian swallows. This prestigious dish is made from boiled yam that's pounded until it achieves a smooth, stretchy, and elastic consistency. Pounded yam is highly regarded in Nigerian cuisine and is often reserved for special occasions and honored guests.

    The traditional preparation of Iyan involves using a large wooden mortar (odo) and pestle (omo odo) to pound boiled yam. This process requires skill, strength, and rhythm, often involving two people - one to pound and another to turn the yam. The rhythmic pounding creates a unique texture that cannot be replicated by modern machines.

    Iyan is prized for its superior texture and taste compared to other swallows. It has a neutral flavor that perfectly complements rich, flavorful soups. The smooth, stretchy consistency makes it easy to mold and swallow, while its substantial nature makes it very filling and satisfying.
  `,
    ingredients: ["2-3 medium-sized yams, peeled and cut into chunks", "Water for boiling", "Salt (optional)"],
    instructions: [
      "Peel the yams and cut into medium-sized chunks. Remove any bad spots or eyes.",
      "Rinse the yam pieces in clean water to remove any dirt or starch.",
      "Place the yam pieces in a pot and add enough water to cover them. Add a pinch of salt if desired.",
      "Bring to a boil and cook for 15-20 minutes until the yam is very soft and easily pierced with a fork.",
      "Drain the water completely and let the yam cool slightly to handle safely.",
      "Transfer the cooked yam to a large mortar (odo). If you don't have a mortar, you can use a large bowl and potato masher.",
      "Begin pounding the yam with the pestle, starting gently and increasing intensity as the yam breaks down.",
      "Continue pounding while occasionally turning the yam to ensure even consistency.",
      "Pound until the yam becomes completely smooth, stretchy, and elastic. This usually takes 10-15 minutes of continuous pounding.",
      "The finished Iyan should be smooth, stretchy, and free of lumps.",
      "Serve immediately while warm with your favorite soup.",
    ],
    nutritionalInfo: {
      calories: "280 per serving",
      protein: "3g",
      carbs: "68g",
      fat: "0.3g",
      fiber: "4g",
    },
    culturalSignificance:
      "Pounded Yam holds the highest status among Nigerian swallows and is often called the 'king of swallows.' It's traditionally served to honor important guests and at significant celebrations like weddings, festivals, and religious ceremonies. The communal aspect of pounding yam - often requiring multiple people - represents unity and cooperation in Nigerian culture. The skill required to make perfect pounded yam is highly respected, and it's considered a mark of culinary excellence.",
    image: "/placeholder.svg?height=800&width=600&text=Iyan+Pounded+Yam",
    videoId: "",
  },
  fufu: {
    name: "Fufu",
    description: "Cassava flour swallow with a soft, doughy consistency",
    longDescription: `
    Fufu is a popular West African swallow made from cassava flour, known for its soft, doughy consistency and neutral taste. This versatile staple food is enjoyed across many West African countries, with each region having its own variation and preparation method.

    Nigerian Fufu is typically made from processed cassava flour that's mixed with hot water to create a smooth, moldable consistency. Unlike some other swallows, Fufu has a softer texture that's easy to swallow and digest, making it popular among people of all ages, including children and elderly individuals.

    The neutral flavor of Fufu makes it an excellent companion to richly flavored Nigerian soups. It absorbs the flavors of the soup it's eaten with, creating a harmonious blend of tastes and textures. Fufu is also naturally gluten-free and provides a good source of carbohydrates for energy.
  `,
    ingredients: ["2 cups cassava flour (fufu flour)", "3-4 cups hot water", "Additional hot water as needed"],
    instructions: [
      "Boil water in a pot. You'll need enough hot water to achieve the right consistency.",
      "Pour the cassava flour into a large bowl and check for any lumps or impurities.",
      "Gradually add hot water to the flour, starting with about 1½ cups.",
      "Using a wooden spoon, mix the flour and water quickly to prevent lumps from forming.",
      "Continue adding hot water gradually while mixing until you achieve a soft, doughy consistency.",
      "The Fufu should be softer than other swallows but still moldable with your hands.",
      "Knead the mixture thoroughly until it becomes smooth and uniform in texture.",
      "If the mixture is too thick, add more hot water gradually. If too soft, add a little more flour.",
      "Continue mixing until the Fufu is smooth, soft, and free of lumps.",
      "Cover and let it rest for 2-3 minutes to allow the flour to fully hydrate.",
      "Serve immediately while warm with your choice of soup.",
    ],
    nutritionalInfo: {
      calories: "340 per serving",
      protein: "1g",
      carbs: "84g",
      fat: "0.2g",
      fiber: "2g",
    },
    culturalSignificance:
      "Fufu represents the shared culinary heritage of West Africa and demonstrates the cultural connections between different African nations. In Nigerian culture, it's appreciated for its accessibility and ease of preparation, making it a common choice for everyday meals. The soft texture of Fufu makes it particularly suitable for children and elderly family members, representing the inclusive nature of Nigerian hospitality.",
    image: "/placeholder.svg?height=800&width=600&text=Fufu+Cassava+Flour",
    videoId: "",
  },
  semo: {
    name: "Semo (Semolina)",
    description: "Semolina swallow with a light color and smooth texture",
    longDescription: `
    Semo, short for Semolina, is a popular Nigerian swallow made from semolina flour (processed wheat). Known for its light cream color and smooth texture, Semo has become increasingly popular in Nigerian households due to its ease of preparation and pleasant taste.

    Unlike traditional swallows made from tubers, Semo is made from wheat, giving it a slightly different nutritional profile and texture. It's smoother and often easier to prepare than some other swallows, making it a favorite among busy households and those new to preparing Nigerian swallows.

    Semo has a mild, slightly sweet taste that pairs well with a variety of Nigerian soups. Its smooth texture and neutral flavor make it an excellent choice for those who prefer a less dense swallow. The light color of Semo also makes it visually appealing when served alongside colorful Nigerian soups.
  `,
    ingredients: ["1½ cups semolina flour", "2-3 cups hot water", "Additional hot water as needed"],
    instructions: [
      "Boil water in a pot. Ensure you have enough hot water for the right consistency.",
      "Pour the semolina flour into a bowl and check for any lumps.",
      "Gradually add hot water to the semolina, starting with about 1 cup.",
      "Using a wooden spoon, mix quickly and vigorously to prevent lumps from forming.",
      "Continue adding hot water gradually while stirring until you achieve a smooth consistency.",
      "The Semo should be smooth and moldable but not too soft or too firm.",
      "Stir continuously until the mixture becomes uniform and stretchy.",
      "If too thick, add more hot water gradually. If too thin, add a little more semolina flour.",
      "Continue mixing until the Semo is completely smooth and free of lumps.",
      "The finished product should have a light cream color and smooth texture.",
      "Serve immediately while warm with your preferred soup.",
    ],
    nutritionalInfo: {
      calories: "320 per serving",
      protein: "4g",
      carbs: "70g",
      fat: "1g",
      fiber: "2g",
    },
    culturalSignificance:
      "Semo represents the evolution and modernization of Nigerian cuisine, showing how traditional food culture adapts to include new ingredients and methods. While not as traditional as yam or cassava-based swallows, Semo has earned its place in Nigerian households and is particularly popular in urban areas. It demonstrates the flexibility of Nigerian food culture in embracing new foods while maintaining traditional eating practices.",
    image: "/placeholder.svg?height=800&width=600&text=Semo+Semolina+Swallow",
    videoId: "",
  },
  lafun: {
    name: "Lafun",
    description: "Cassava flour swallow with a firm texture",
    longDescription: `
    Lafun is a traditional Yoruba swallow made from fermented cassava flour. This indigenous food has been a staple in Yoruba cuisine for generations and is particularly popular in southwestern Nigeria. Lafun is known for its distinctive firm texture and slightly tangy flavor that comes from the fermentation process.

    The preparation of Lafun involves fermenting cassava tubers, drying them, and then grinding them into flour. This traditional process gives Lafun its characteristic taste and nutritional benefits. The fermentation process also makes it easier to digest and adds beneficial probiotics to the food.

    Lafun has a firmer texture compared to other cassava-based swallows like Fufu, making it particularly satisfying and filling. It's often preferred by those who like their swallows with more substance and bite. The slightly sour taste of Lafun complements rich, spicy soups particularly well.
  `,
    ingredients: [
      "2 cups Lafun flour (fermented cassava flour)",
      "3-4 cups hot water",
      "Additional hot water as needed",
    ],
    instructions: [
      "Boil water in a pot, ensuring you have enough for the desired consistency.",
      "Pour the Lafun flour into a bowl and check for any stones or impurities.",
      "Gradually add hot water to the flour, starting with about 1½ cups.",
      "Using a wooden spoon, mix quickly and thoroughly to prevent lumps.",
      "Continue adding hot water while stirring until you achieve a firm, moldable consistency.",
      "Lafun should be firmer than regular Fufu but still smooth and workable.",
      "Stir vigorously until the mixture becomes uniform and slightly elastic.",
      "If too thick, add more hot water gradually. If too soft, add more Lafun flour.",
      "Continue mixing until completely smooth and free of lumps.",
      "The finished Lafun should have a firm texture and slightly off-white color.",
      "Let it rest for 2-3 minutes, then serve warm with soup.",
    ],
    nutritionalInfo: {
      calories: "330 per serving",
      protein: "2g",
      carbs: "80g",
      fat: "0.5g",
      fiber: "3g",
    },
    culturalSignificance:
      "Lafun is deeply rooted in Yoruba tradition and represents the ingenuity of traditional food processing methods. The fermentation process used to make Lafun demonstrates the sophisticated understanding of food science that existed in traditional Yoruba culture. It's often associated with rural communities and traditional values, and is considered a connection to ancestral food ways. Lafun is particularly valued for its keeping qualities and nutritional benefits.",
    image: "/placeholder.svg?height=800&width=600&text=Lafun+Fermented+Cassava",
    videoId: "",
  },
  "fried-rice": {
    name: "Nigerian Fried Rice",
    description: "Colorful vegetable rice dish with a festive appearance",
    longDescription: `
    Nigerian Fried Rice is a vibrant, colorful rice dish that's become a staple at Nigerian celebrations and special occasions. Unlike Asian fried rice, Nigerian fried rice is characterized by its generous use of vegetables, creating a colorful and nutritious meal that's as pleasing to the eye as it is to the palate.

    This festive dish typically includes a variety of vegetables such as carrots, green beans, sweet corn, green peas, and bell peppers, all stir-fried with seasoned rice. The combination of colors - orange carrots, green vegetables, yellow corn, and red peppers - creates a beautiful rainbow effect that makes it perfect for parties and celebrations.

    Nigerian Fried Rice is often prepared for Christmas, New Year, weddings, and other special occasions. It's usually served alongside other party foods like jollof rice, grilled chicken, and moin moin, creating a feast that represents abundance and celebration in Nigerian culture.
  `,
    ingredients: [
      "3 cups long-grain parboiled rice",
      "2 large carrots, diced",
      "1 cup green beans, chopped",
      "1 cup sweet corn kernels",
      "1 cup green peas",
      "1 red bell pepper, diced",
      "1 green bell pepper, diced",
      "1 large onion, diced",
      "3 cloves garlic, minced",
      "1/4 cup vegetable oil",
      "2 cups chicken or vegetable stock",
      "2 seasoning cubes",
      "1 teaspoon curry powder",
      "1 teaspoon thyme",
      "Salt to taste",
      "2 bay leaves",
      "Cooked shrimp or chicken (optional)",
    ],
    instructions: [
      "Wash and parboil the rice until it's about 70% cooked. Drain and set aside.",
      "Heat oil in a large pan or wok over medium-high heat.",
      "Add diced onions and minced garlic. Sauté until fragrant and translucent.",
      "Add the harder vegetables first (carrots and green beans). Stir-fry for 3-4 minutes.",
      "Add bell peppers and continue stir-frying for another 2-3 minutes.",
      "Add sweet corn and green peas. Stir-fry for 2 minutes.",
      "Add the parboiled rice to the vegetables and mix gently but thoroughly.",
      "Add curry powder, thyme, seasoning cubes, salt, and bay leaves.",
      "Gradually add the stock, stirring gently to combine all ingredients.",
      "Cover and simmer on low heat for 10-15 minutes until rice is fully cooked and has absorbed the liquid.",
      "Add cooked shrimp or chicken if using, and stir gently.",
      "Remove bay leaves, adjust seasoning, and serve hot.",
    ],
    nutritionalInfo: {
      calories: "420 per serving",
      protein: "8g",
      carbs: "75g",
      fat: "10g",
      fiber: "4g",
    },
    culturalSignificance:
      "Nigerian Fried Rice represents celebration and abundance in Nigerian culture. Its colorful appearance symbolizes joy and festivity, making it an essential dish at parties, weddings, and holiday celebrations. The dish demonstrates the Nigerian approach to food presentation - that meals should be visually appealing as well as delicious. It's often prepared in large quantities for sharing, reflecting the communal nature of Nigerian celebrations.",
    image: "/placeholder.svg?height=800&width=600&text=Nigerian+Fried+Rice",
    videoId: "",
  },
  "ofada-rice": {
    name: "Ofada Rice",
    description: "Local Nigerian rice served with spicy sauce and assorted meats",
    longDescription: `
    Ofada Rice is a special variety of locally grown Nigerian rice, named after the town of Ofada in Ogun State where it was first cultivated. This indigenous rice variety is known for its unique aroma, slightly brown color, and distinctive taste that sets it apart from imported rice varieties.

    What makes Ofada Rice special is not just the rice itself, but the traditional way it's prepared and served. It's typically accompanied by a spicy, flavorful sauce made with palm oil, peppers, and assorted meats. The rice is often wrapped in banana leaves, which imparts a subtle, earthy flavor and keeps it warm.

    Ofada Rice represents a movement towards supporting local agriculture and preserving Nigerian food heritage. It's become increasingly popular as Nigerians embrace indigenous foods and support local farmers. The dish is often served at cultural events and upscale restaurants that specialize in traditional Nigerian cuisine.
  `,
    ingredients: [
      "3 cups Ofada rice (or brown local rice)",
      "Water for cooking",
      "Salt to taste",
      "Banana leaves for wrapping (optional)",
      "",
      "For the sauce:",
      "1/2 cup palm oil",
      "4 red bell peppers, blended",
      "3 scotch bonnet peppers, blended",
      "1 large onion, sliced",
      "Assorted meat (beef, tripe, kidney)",
      "Smoked fish",
      "2 tablespoons locust beans (iru)",
      "Seasoning cubes",
      "Salt to taste",
    ],
    instructions: [
      "Wash the Ofada rice thoroughly, removing any stones or chaff. The rice may have more debris than regular rice.",
      "Boil water in a pot with a little salt. Add the washed rice and cook until tender but not mushy.",
      "Drain the rice and set aside. If using banana leaves, blanch them and use to wrap portions of rice.",
      "For the sauce: Heat palm oil in a pot. Add sliced onions and fry until golden.",
      "Add the blended peppers and cook for 15-20 minutes until the raw smell disappears.",
      "Add the assorted meat, smoked fish, locust beans, seasoning cubes, and salt.",
      "Simmer for 10-15 minutes until the meat is well incorporated into the sauce.",
      "Adjust seasoning to taste.",
      "Serve the rice with the spicy sauce on the side or poured over the rice.",
    ],
    nutritionalInfo: {
      calories: "450 per serving",
      protein: "15g",
      carbs: "70g",
      fat: "12g",
      fiber: "3g",
    },
    culturalSignificance:
      "Ofada Rice represents Nigerian agricultural heritage and the movement to support local food production. It's a symbol of cultural pride and economic independence, encouraging Nigerians to embrace indigenous foods over imported alternatives. The dish is often served at cultural festivals and events that celebrate Nigerian heritage, representing a connection to the land and traditional farming practices.",
    image: "/placeholder.svg?height=800&width=600&text=Ofada+Rice+Local+Nigerian",
    videoId: "",
  },
  "tuwo-shinkafa": {
    name: "Tuwo Shinkafa",
    description: "Rice pudding often served with soups",
    longDescription: `
      Tuwo Shinkafa is a traditional Northern Nigerian dish made from rice flour. The name literally translates to "rice swallow" in Hausa language. This smooth, stretchy dish is similar to other Nigerian swallows but is made specifically from rice, making it a great alternative for those who prefer rice-based foods.

      The preparation involves cooking rice flour with water until it forms a smooth, moldable consistency. Tuwo Shinkafa has a neutral taste and smooth texture that pairs excellently with various Nigerian soups, particularly Northern Nigerian soups like miyan kuka, miyan taushe, or any spicy soup.

      This dish is particularly popular in Northern Nigeria but has gained acceptance across the country as people explore different regional cuisines. It's naturally gluten-free and provides a good source of carbohydrates.
    `,
    ingredients: ["2 cups rice flour", "3-4 cups water", "Salt to taste (optional)", "Additional hot water as needed"],
    instructions: [
      "Boil water in a pot with a pinch of salt if desired.",
      "Gradually add rice flour to the boiling water while stirring continuously to prevent lumps.",
      "Continue stirring vigorously until the mixture becomes thick and smooth.",
      "Reduce heat to low and continue cooking while stirring for about 5-10 minutes.",
      "The mixture should be smooth, stretchy, and moldable when ready.",
      "If too thick, add hot water gradually. If too thin, cook longer to evaporate excess water.",
      "Serve immediately while warm with your choice of soup.",
    ],
    nutritionalInfo: {
      calories: "280 per serving",
      protein: "3g",
      carbs: "65g",
      fat: "0.5g",
      fiber: "1g",
    },
    culturalSignificance:
      "Tuwo Shinkafa represents the diversity of Nigerian cuisine and the regional variations in swallow preparation. It's particularly significant in Northern Nigerian culture and demonstrates how different regions adapt basic cooking techniques to local ingredients and preferences.",
    image: "/placeholder.svg?height=800&width=600&text=Tuwo+Shinkafa+Rice+Pudding",
    videoId: "",
  },
  "coconut-rice": {
    name: "Coconut Rice",
    description: "Rice cooked with coconut milk and spices",
    longDescription: `
      Coconut Rice is a fragrant and flavorful Nigerian rice dish cooked with coconut milk, giving it a rich, creamy texture and a subtle coconut flavor. This dish is popular across West Africa and is often served at special occasions and celebrations.

      The coconut milk not only adds flavor but also gives the rice a beautiful creamy white color and rich texture. The dish is often enhanced with spices like curry, thyme, and bay leaves, creating a aromatic and satisfying meal.

      Coconut Rice can be served as a main dish or as a side dish alongside grilled meats, fish, or vegetables. It's particularly popular at parties and special events due to its elegant appearance and delicious taste.
    `,
    ingredients: [
      "3 cups long-grain rice",
      "1 can (400ml) coconut milk",
      "2 cups water or chicken stock",
      "1 large onion, diced",
      "2 cloves garlic, minced",
      "1 teaspoon curry powder",
      "1 teaspoon thyme",
      "2 bay leaves",
      "2 seasoning cubes",
      "Salt to taste",
      "2 tablespoons vegetable oil",
      "1 cup mixed vegetables (optional)",
    ],
    instructions: [
      "Wash rice thoroughly and set aside.",
      "Heat oil in a large pot and sauté onions and garlic until fragrant.",
      "Add curry powder and thyme, stir for 1 minute.",
      "Add the washed rice and stir to coat with the spices.",
      "Pour in coconut milk, water/stock, add bay leaves, seasoning cubes, and salt.",
      "Bring to a boil, then reduce heat to low and cover.",
      "Cook for 20-25 minutes until rice is tender and liquid is absorbed.",
      "Add mixed vegetables in the last 5 minutes if using.",
      "Let rest for 5 minutes before serving.",
    ],
    nutritionalInfo: {
      calories: "420 per serving",
      protein: "6g",
      carbs: "68g",
      fat: "14g",
      fiber: "2g",
    },
    culturalSignificance:
      "Coconut Rice represents the influence of coastal ingredients in Nigerian cuisine. It's often served at celebrations and demonstrates the creativity in Nigerian cooking, where local ingredients are combined with international influences to create unique dishes.",
    image: "/placeholder.svg?height=800&width=600&text=Coconut+Rice",
    videoId: "",
  },
  "puff-puff": {
    name: "Puff Puff",
    description: "Deep-fried dough balls with a sweet taste",
    longDescription: `
    Puff Puff is one of Nigeria's most beloved snacks, enjoyed across all regions and age groups. These golden, spherical deep-fried dough balls are crispy on the outside and soft, fluffy on the inside. The name "Puff Puff" comes from the light, airy texture that results from the fermentation process and proper frying technique.

    This popular street food and party snack is made from a simple batter of flour, sugar, yeast, and water, which is allowed to rise before being deep-fried in hot oil. The fermentation process gives Puff Puff its characteristic slightly tangy flavor and light texture. The key to perfect Puff Puff lies in achieving the right consistency of batter and maintaining the correct oil temperature during frying.

    Puff Puff is incredibly versatile and can be enjoyed at any time of day - as a breakfast item, afternoon snack, or party treat. It's commonly sold by street vendors and is a staple at Nigerian celebrations, from children's birthday parties to wedding receptions. The snack represents the joy and communal spirit of Nigerian food culture.
  `,
    ingredients: [
      "3 cups all-purpose flour",
      "1/2 cup granulated sugar",
      "1 teaspoon active dry yeast",
      "1/2 teaspoon salt",
      "1 teaspoon ground nutmeg",
      "1 1/4 cups warm water",
      "1 teaspoon vanilla extract (optional)",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "In a large bowl, mix flour, sugar, yeast, salt, and nutmeg together.",
      "Gradually add warm water while mixing to form a smooth batter. The consistency should be thick but pourable.",
      "Add vanilla extract if using and mix well.",
      "Cover the bowl with a clean cloth and let the batter rise in a warm place for 1-2 hours until it doubles in size and becomes bubbly.",
      "Heat vegetable oil in a deep pot to 350°F (175°C). The oil should be deep enough for the puff puff to float.",
      "Using your hands or a spoon, scoop small portions of batter and carefully drop them into the hot oil.",
      "Fry in batches, turning occasionally, until golden brown all over (about 3-5 minutes).",
      "Remove with a slotted spoon and drain on paper towels.",
      "Serve warm or at room temperature. Can be dusted with powdered sugar if desired.",
    ],
    nutritionalInfo: {
      calories: "180 per serving (4 pieces)",
      protein: "4g",
      carbs: "28g",
      fat: "6g",
      fiber: "1g",
    },
    culturalSignificance:
      "Puff Puff is deeply embedded in Nigerian culture as a symbol of celebration and joy. It's one of the first snacks children learn to make and is associated with happy memories and gatherings. The snack transcends ethnic and religious boundaries, being enjoyed by all Nigerians regardless of background. It's often prepared in large quantities for sharing, reflecting the communal nature of Nigerian hospitality.",
    image: "/placeholder.svg?height=800&width=600&text=Puff+Puff+Nigerian+Snack",
    videoId: "",
  },

  akara: {
    name: "Akara",
    description: "Bean cakes made from peeled beans and spices",
    longDescription: `
    Akara, also known as bean cakes or bean fritters, is a popular Nigerian breakfast and snack made from peeled black-eyed peas. This protein-rich delicacy is beloved for its crispy exterior and soft, flavorful interior. The name "Akara" comes from the Yoruba language, though the dish is enjoyed throughout Nigeria and West Africa.

    The preparation of Akara involves soaking and peeling black-eyed peas, then blending them with peppers, onions, and spices to create a smooth batter. The batter is then deep-fried in small portions until golden brown and crispy. The key to perfect Akara lies in achieving the right consistency of batter and maintaining proper oil temperature during frying.

    Akara is traditionally served as a breakfast item alongside bread, pap (ogi), or custard. It's also popular as a snack throughout the day and is commonly sold by street vendors. The dish is naturally gluten-free and provides an excellent source of plant-based protein, making it a nutritious choice for people of all ages.
  `,
    ingredients: [
      "2 cups black-eyed peas, soaked overnight",
      "1 medium onion, roughly chopped",
      "2-3 scotch bonnet peppers (adjust to taste)",
      "1 red bell pepper",
      "1 teaspoon salt",
      "1 seasoning cube, crushed",
      "1/4 cup water (as needed)",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "Drain the soaked beans and rub them between your palms to remove the skins. Rinse until all skins are removed.",
      "In a blender or food processor, blend the peeled beans with onions, peppers, and a little water until smooth but not too watery.",
      "Transfer the mixture to a bowl and add salt and crushed seasoning cube. Mix well.",
      "Using a wooden spoon, beat the mixture vigorously for 2-3 minutes to incorporate air and make it fluffy.",
      "Heat oil in a deep pot to 350°F (175°C).",
      "Using a spoon, scoop portions of the batter and carefully drop them into the hot oil.",
      "Fry in batches until golden brown and crispy on all sides (about 4-6 minutes).",
      "Remove with a slotted spoon and drain on paper towels.",
      "Serve hot with bread, pap, or your preferred accompaniment.",
    ],
    nutritionalInfo: {
      calories: "150 per serving (3 pieces)",
      protein: "8g",
      carbs: "18g",
      fat: "5g",
      fiber: "6g",
    },
    culturalSignificance:
      "Akara holds special significance in Nigerian culture as a traditional breakfast food that brings families together. It's often prepared by mothers and grandmothers as a way of showing care and love. The dish is also significant in Yoruba traditional religion and is sometimes used in ceremonial offerings. Akara represents the ingenuity of Nigerian cuisine in transforming simple ingredients into delicious, nutritious meals.",
    image: "/placeholder.svg?height=800&width=600&text=Akara+Bean+Cakes",
    videoId: "",
  },

  "chin-chin": {
    name: "Chin Chin",
    description: "Fried pastry snack with a crunchy texture",
    longDescription: `
    Chin Chin is a popular Nigerian fried pastry snack known for its sweet, crunchy texture and addictive taste. This beloved treat is made from a simple dough of flour, sugar, butter, and spices, which is rolled out, cut into small cubes, and deep-fried until golden brown and crispy.

    The beauty of Chin Chin lies in its simplicity and versatility. The basic recipe can be enhanced with various flavors such as nutmeg, vanilla, or even coconut flakes. The dough is typically enriched with butter or margarine, which gives the finished product its characteristic rich flavor and crispy texture.

    Chin Chin is a staple at Nigerian celebrations, parties, and festive occasions. It's often prepared in large batches and stored in airtight containers, making it a convenient snack that can last for weeks. The snack is particularly popular during Christmas and New Year celebrations, where it's often packaged as gifts for friends and family.
  `,
    ingredients: [
      "4 cups all-purpose flour",
      "1/2 cup granulated sugar",
      "1/2 cup butter or margarine, softened",
      "2 large eggs",
      "1 teaspoon baking powder",
      "1/2 teaspoon salt",
      "1 teaspoon ground nutmeg",
      "1/4 cup milk",
      "1 teaspoon vanilla extract",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "In a large bowl, cream together butter and sugar until light and fluffy.",
      "Add eggs one at a time, beating well after each addition. Add vanilla extract.",
      "In a separate bowl, whisk together flour, baking powder, salt, and nutmeg.",
      "Gradually add the dry ingredients to the butter mixture, alternating with milk, until a soft dough forms.",
      "Turn the dough onto a floured surface and knead briefly until smooth.",
      "Roll the dough to about 1/4 inch thickness and cut into small cubes (about 1/2 inch).",
      "Heat oil in a deep pot to 350°F (175°C).",
      "Fry the chin chin cubes in batches until golden brown and crispy (about 3-4 minutes).",
      "Remove with a slotted spoon and drain on paper towels.",
      "Allow to cool completely before storing in airtight containers.",
    ],
    nutritionalInfo: {
      calories: "120 per serving (1/4 cup)",
      protein: "3g",
      carbs: "18g",
      fat: "4g",
      fiber: "1g",
    },
    culturalSignificance:
      "Chin Chin is synonymous with Nigerian celebrations and hospitality. It's often the first snack offered to guests and is a symbol of abundance and prosperity. The preparation of Chin Chin is often a communal activity, with family members gathering to help cut and fry the pastry. It's particularly associated with Christmas celebrations and is considered an essential part of the festive season.",
    image: "/placeholder.svg?height=800&width=600&text=Chin+Chin+Fried+Pastry",
    videoId: "",
  },

  dundu: {
    name: "Dundu",
    description: "Fried yam cubes often served with pepper sauce",
    longDescription: `
    Dundu is a popular Nigerian snack made from fried yam cubes, beloved for its crispy exterior and soft, fluffy interior. The name "Dundu" comes from the Yoruba language, and this simple yet satisfying snack is enjoyed across Nigeria as both a street food and homemade treat.

    The preparation of Dundu involves cutting yam into uniform cubes, seasoning them lightly with salt, and deep-frying until golden brown and crispy. The key to perfect Dundu lies in selecting the right type of yam - it should be firm and not too watery - and maintaining the correct oil temperature to achieve the desired crispy texture without burning.

    Dundu is typically served with spicy pepper sauce (ata dindin) or tomato-based stew, making it a complete and satisfying snack. It's commonly sold by street vendors and is a popular after-school snack for children. The dish represents the Nigerian ability to transform simple, local ingredients into delicious and satisfying meals.
  `,
    ingredients: [
      "2 large yams, peeled and cut into cubes",
      "1 teaspoon salt",
      "Vegetable oil for deep frying",
      "",
      "For pepper sauce (optional):",
      "4 scotch bonnet peppers",
      "1 large onion",
      "2 tomatoes",
      "Salt to taste",
      "1 seasoning cube",
    ],
    instructions: [
      "Cut the peeled yam into uniform cubes (about 1-2 inches).",
      "Rinse the yam cubes in cold water and pat dry with paper towels.",
      "Season lightly with salt and let sit for 10 minutes.",
      "Heat oil in a deep pot to 350°F (175°C).",
      "Carefully add yam cubes to the hot oil in batches, avoiding overcrowding.",
      "Fry until golden brown and crispy on all sides (about 5-7 minutes).",
      "Remove with a slotted spoon and drain on paper towels.",
      "For pepper sauce: Blend peppers, onion, and tomatoes. Cook in a little oil with salt and seasoning cube until thick.",
      "Serve Dundu hot with pepper sauce on the side.",
    ],
    nutritionalInfo: {
      calories: "220 per serving",
      protein: "3g",
      carbs: "45g",
      fat: "6g",
      fiber: "4g",
    },
    culturalSignificance:
      "Dundu represents the simplicity and resourcefulness of Nigerian cuisine. It's often associated with childhood memories and is a comfort food for many Nigerians. The snack is particularly popular among students and workers as an affordable, filling meal. Dundu also demonstrates the Nigerian tradition of making the most of local ingredients, transforming simple yam into a delicious treat.",
    image: "/placeholder.svg?height=800&width=600&text=Dundu+Fried+Yam",
    videoId: "",
  },

  ojojo: {
    name: "Ojojo",
    description: "Water yam fritters with a crispy exterior",
    longDescription: `
    Ojojo is a traditional Yoruba snack made from grated water yam (isu ewura), known for its unique texture and delicious taste. This crispy fritter is a popular street food and homemade snack that showcases the versatility of Nigerian tubers. The name "Ojojo" comes from the Yoruba language and refers specifically to this method of preparing water yam.

    The preparation of Ojojo involves grating fresh water yam and mixing it with peppers, onions, and seasonings to create a batter-like consistency. The mixture is then formed into small patties and deep-fried until golden brown and crispy. The water yam gives Ojojo its characteristic slightly sticky texture and earthy flavor.

    Ojojo is particularly popular in southwestern Nigeria and is often sold by street vendors, especially during the rainy season when water yam is abundant. It's commonly served with spicy pepper sauce and is enjoyed as a snack or light meal. The dish represents the ingenuity of Yoruba cuisine in utilizing indigenous ingredients to create unique and flavorful foods.
  `,
    ingredients: [
      "2 cups grated water yam (isu ewura)",
      "1 medium onion, finely chopped",
      "2-3 scotch bonnet peppers, finely chopped",
      "1 red bell pepper, finely chopped",
      "1 teaspoon salt",
      "1 seasoning cube, crushed",
      "2 tablespoons ground crayfish (optional)",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "Peel and grate the water yam using a coarse grater. Be careful as water yam can be slippery.",
      "In a large bowl, combine grated yam with chopped onions, peppers, salt, seasoning cube, and crayfish if using.",
      "Mix well until all ingredients are evenly distributed. The mixture should hold together when pressed.",
      "Heat oil in a deep pot to 350°F (175°C).",
      "Using your hands or a spoon, form small portions of the mixture into patties.",
      "Carefully drop the patties into the hot oil and fry in batches.",
      "Fry until golden brown and crispy on both sides (about 4-6 minutes per side).",
      "Remove with a slotted spoon and drain on paper towels.",
      "Serve hot with pepper sauce or enjoy on its own.",
    ],
    nutritionalInfo: {
      calories: "160 per serving (2 pieces)",
      protein: "3g",
      carbs: "28g",
      fat: "5g",
      fiber: "3g",
    },
    culturalSignificance:
      "Ojojo is deeply rooted in Yoruba culture and represents the traditional knowledge of utilizing indigenous tubers. It's often associated with rural communities and traditional farming practices. The snack is particularly significant during the yam harvest season and is sometimes prepared for traditional festivals. Ojojo also represents the communal aspect of Nigerian food culture, as it's often prepared and shared among neighbors and friends.",
    image: "/placeholder.svg?height=800&width=600&text=Ojojo+Water+Yam+Fritters",
    videoId: "",
  },

  kokoro: {
    name: "Kokoro",
    description: "Crunchy corn snack with a slightly sweet taste",
    longDescription: `
    Kokoro is a traditional Nigerian snack made from corn flour, known for its distinctive crunchy texture and mildly sweet flavor. This popular street food is shaped into long, twisted sticks and deep-fried until golden brown and crispy. The name "Kokoro" comes from the Yoruba language and refers to this specific method of preparing corn-based snacks.

    The preparation of Kokoro involves mixing corn flour with spices, sugar, and water to form a dough, which is then shaped using a special tool or by hand into long, twisted shapes. The shaped dough is then deep-fried until it becomes crispy and golden. The key to perfect Kokoro lies in achieving the right consistency of dough and proper shaping technique.

    Kokoro is a beloved childhood snack for many Nigerians and is commonly sold by street vendors, especially around schools and markets. It's often enjoyed as an after-school treat or as a light snack throughout the day. The snack represents the creativity of Nigerian cuisine in transforming simple corn into a delicious and satisfying treat.
  `,
    ingredients: [
      "2 cups corn flour (fine cornmeal)",
      "1/4 cup granulated sugar",
      "1 teaspoon salt",
      "1/2 teaspoon ground ginger",
      "1/4 teaspoon ground cloves",
      "1/4 teaspoon ground nutmeg",
      "3/4 cup warm water (approximately)",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "In a large bowl, mix corn flour, sugar, salt, ginger, cloves, and nutmeg.",
      "Gradually add warm water while mixing to form a smooth, pliable dough. The dough should not be too wet or too dry.",
      "Knead the dough briefly until smooth and elastic.",
      "Take small portions of dough and roll them into long, thin ropes (about pencil thickness).",
      "Twist the ropes into spiral shapes or leave them straight, depending on preference.",
      "Heat oil in a deep pot to 350°F (175°C).",
      "Carefully add the shaped kokoro to the hot oil in batches.",
      "Fry until golden brown and crispy (about 3-5 minutes).",
      "Remove with a slotted spoon and drain on paper towels.",
      "Allow to cool completely before storing in airtight containers.",
    ],
    nutritionalInfo: {
      calories: "140 per serving (1/4 cup)",
      protein: "3g",
      carbs: "26g",
      fat: "4g",
      fiber: "2g",
    },
    culturalSignificance:
      "Kokoro is an integral part of Nigerian street food culture and childhood memories. It's often associated with school days and is a popular snack among children and adults alike. The preparation of Kokoro is sometimes a small-scale business for many Nigerian women, providing income and supporting families. The snack represents the entrepreneurial spirit and resourcefulness of Nigerian food culture.",
    image: "/placeholder.svg?height=800&width=600&text=Kokoro+Corn+Snack",
    videoId: "",
  },

  aadun: {
    name: "Aadun",
    description: "Cornmeal cakes with palm oil and spices",
    longDescription: `
    Aadun is a traditional Yoruba snack made from cornmeal, palm oil, and aromatic spices. This unique delicacy is known for its rich flavor, distinctive orange color from palm oil, and slightly dense texture. The name "Aadun" comes from the Yoruba language, meaning "sweet" or "delicious," which perfectly describes this flavorful treat.

    The preparation of Aadun involves mixing cornmeal with palm oil, sugar, spices, and sometimes coconut flakes to create a rich, flavorful mixture. The mixture is then formed into small cakes or balls and can be steamed, baked, or fried depending on the preferred method. The palm oil not only provides flavor but also gives Aadun its characteristic orange color.

    Aadun is particularly popular in southwestern Nigeria and is often prepared for special occasions and festivals. It's considered a delicacy and is sometimes given as gifts during celebrations. The snack represents the sophisticated use of indigenous ingredients in Yoruba cuisine and showcases the cultural significance of palm oil in West African cooking.
  `,
    ingredients: [
      "2 cups fine cornmeal",
      "1/4 cup palm oil",
      "1/3 cup granulated sugar",
      "1 teaspoon salt",
      "1 teaspoon ground ginger",
      "1/2 teaspoon ground nutmeg",
      "1/4 cup grated coconut (optional)",
      "1/2 cup warm water (approximately)",
      "Banana leaves for wrapping (optional)",
    ],
    instructions: [
      "In a large bowl, mix cornmeal, sugar, salt, ginger, and nutmeg.",
      "Add palm oil and mix well until the oil is evenly distributed throughout the cornmeal.",
      "Add grated coconut if using and mix to combine.",
      "Gradually add warm water while mixing to form a moldable consistency. The mixture should hold together when pressed.",
      "Form the mixture into small balls or oval shapes using your hands.",
      "If using banana leaves, blanch them in hot water to soften, then wrap each portion.",
      "Steam the wrapped Aadun for 20-25 minutes, or bake unwrapped portions at 350°F for 15-20 minutes.",
      "Alternatively, you can shallow fry them until golden brown on all sides.",
      "Allow to cool slightly before serving.",
    ],
    nutritionalInfo: {
      calories: "180 per serving (2 pieces)",
      protein: "3g",
      carbs: "28g",
      fat: "7g",
      fiber: "2g",
    },
    culturalSignificance:
      "Aadun holds special significance in Yoruba culture as a traditional delicacy often prepared for festivals and special occasions. It represents the sophisticated use of indigenous ingredients and traditional cooking methods. The snack is sometimes associated with traditional ceremonies and is considered a symbol of cultural heritage. Aadun also demonstrates the importance of palm oil in Yoruba cuisine and its role in creating distinctive flavors and colors.",
    image: "/placeholder.svg?height=800&width=600&text=Aadun+Cornmeal+Cakes",
    videoId: "",
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
      <main className="w-full px-4 py-6 mt-16 pb-20">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yoruba-500"></div>
        </div>
      </main>
    )
  }

  if (error || !food) {
    return (
      <main className="w-full px-4 py-6 mt-16 pb-20">
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg">{error || "Food not found"}</div>
      </main>
    )
  }

  return (
    <main className="w-full px-4 py-6 mt-16 pb-20">
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

        {(food.name === "Obe Ata" ||
          food.name === "Ogbono Soup" ||
          food.name === "Ila Asepo" ||
          food.name === "Ewedu Soup" ||
          food.name === "Gbegiri Soup" ||
          food.name === "Jollof Rice" ||
          food.name === "Efo Riro" ||
          food.name === "Egusi Soup" ||
          food.name === "Amala") && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Serve With</h2>
            <ul className="space-y-2">
              {food.name === "Obe Ata" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Rice
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Yam
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Beans
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Amala, Eba, or any swallow (when paired with Ewedu or Okra)
                  </li>
                </>
              )}
              {food.name === "Ogbono Soup" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Pounded yam
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Eba
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Amala
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Fufu
                  </li>
                </>
              )}
              {food.name === "Ila Asepo" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Amala
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Eba
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Fufu
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Semo
                  </li>
                </>
              )}
              {food.name === "Ewedu Soup" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Amala (traditional)
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Eba
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Fufu
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Semo
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Often served alongside Gbegiri and stew
                  </li>
                </>
              )}
              {food.name === "Gbegiri Soup" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Amala
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Ewedu
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Stew or assorted meat
                  </li>
                </>
              )}
              {food.name === "Jollof Rice" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Fried plantains
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Moin moin
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Coleslaw
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Grilled chicken or beef
                  </li>
                </>
              )}
              {food.name === "Efo Riro" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Amala
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Eba
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Pounded yam
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Rice
                  </li>
                </>
              )}
              {food.name === "Egusi Soup" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Amala
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Eba
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Pounded yam
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Fufu
                  </li>
                </>
              )}
              {food.name === "Amala" && (
                <>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Ewedu soup
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Gbegiri soup
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Efo Riro
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                    Ogbono soup
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>

      {showVideo && food.videoId && <VideoModal videoId={food.videoId} onClose={() => setShowVideo(false)} />}
    </main>
  )
}
