"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import VideoModal from "@/components/video-modal"
import { notFound } from "next/navigation"
import { useEffect } from "react"

// This would typically come from a database
const foodData: FoodData = {
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
    image: "https://allnigerianfoods.com/wp-content/uploads/making-efo-riro.jpg",
    videoId: "lxCY5fObe30", // Updated to match your last provided list
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
    image: "https://allnigerianfoods.com/wp-content/uploads/egusi_soup_pot-768x512.jpg", // Updated with provided link
    videoId: "YQq4ido7lQs",
  },
  ewedu: {
    name: "Ewedu",
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
    image: "https://allnigerianfoods.com/wp-content/uploads/2015/04/ewedu-soup.jpg",
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
    image: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/gbegiri-soup.jpg",
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
    image: "https://www.myactivekitchen.com/wp-content/uploads/2017/04/stewed-okra-5.jpg",
    videoId: "ZHBaPcJ_C44", // Updated to match your last provided list
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
    image: "https://allnigerianfoods.com/wp-content/uploads/pot-of-ogbono-soup.jpg", // Updated to match your categoryData
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
    image: "https://yummieliciouz.com/wp-content/uploads/2023/04/how-to-make-amala-768x512.jpg",
    videoId: "u8KUUXKZ6Lo",
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
    image: "https://i.pinimg.com/736x/a7/d4/92/a7d492607aab27346744244d02da29b6.jpg",
    videoId: "TLjSBq-vt-I",
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
    videoId: "ogB0JsUyVv8", // Using Ewedu video for the combination
  },
  "moin-moin": {
    name: "Moin Moin",
    description: "Steamed bean pudding with peppers, onions, and various additions",
    longDescription: `
      Moin Moin is a savory steamed bean pudding made from a mixture of peeled beans, bell peppers, onions, and often includes fish, eggs, or corned beef. It's a popular staple in Nigerian cuisine, known for its smooth texture and rich, spicy flavor.

      The preparation involves soaking and peeling beans, then blending them with fresh peppers, onions, and other desired ingredients to form a smooth batter. This batter is then poured into leaves (like uma leaves), ramekins, or foil containers and steamed until firm.

      Moin Moin is incredibly versatile and can be eaten alone, as a side dish, or paired with other Nigerian staples like Jollof Rice, garri, or bread. It's a common feature at Nigerian parties and gatherings, valued for its nutritious content and satisfying taste.
    `,
    ingredients: [
      "2 cups peeled beans (black-eyed peas or honey beans)",
      "1 large onion, roughly chopped",
      "2-3 red bell peppers (tatashe), roughly chopped",
      "1-2 scotch bonnet peppers (ata rodo) - adjust to taste",
      "1/4 cup vegetable oil or palm oil (optional, for richer flavor)",
      "1/2 cup fish stock or water",
      "1-2 hard-boiled eggs, sliced (optional)",
      "Cooked fish (mackerel, salmon) or corned beef, flaked (optional)",
      "2 seasoning cubes (Maggi or Knorr)",
      "Salt to taste",
      "Aluminum foil or leaves (uma leaves) for steaming",
    ],
    instructions: [
      "Soak and peel the beans. This is crucial for a smooth texture.",
      "Combine the peeled beans, roughly chopped onion, and scotch bonnet peppers in a blender. Add a few tablespoons of water if necessary to help blend, but keep the mixture as thick as possible.",
      "Blend until very smooth and creamy. The smoother the batter, the lighter the Akara.",
      "Pour the batter into a large bowl. Using a stand mixer, hand mixer, or by hand with a whisk, beat the batter vigorously for 10-15 minutes until it is light, fluffy, and has significantly increased in volume. This step is essential for airy Akara.",
      "Stir in salt to taste. Do not overmix after adding salt.",
      "Prepare your steaming containers (foil cups, ramekins, or wrapped leaves). Lightly grease them if not using leaves.",
      "Pour the moin moin batter into the prepared containers, filling them about two-thirds full.",
      "Arrange the containers in a steamer basket or a pot with a little water at the bottom (ensure water doesn't touch the containers).",
      "Steam on medium-high heat for 45-60 minutes, or until firm to touch and a toothpick inserted comes out clean.",
      "Serve hot.",
    ],
    nutritionalInfo: {
      calories: "280 per serving",
      protein: "15g",
      carbs: "30g",
      fat: "10g",
      fiber: "7g",
    },
    culturalSignificance:
      "Moin Moin is a cherished dish in Nigerian culture, symbolizing care and culinary artistry. It's a staple at all types of gatherings, from family breakfasts to elaborate parties, often prepared with pride and served with various accompaniments. The intricate process of peeling and blending the beans highlights the dedication to traditional cooking methods and the importance of food in communal celebrations.",
    image: "https://i.pinimg.com/1200x/10/8b/49/108b49028e9b0dcd75e1fcc00b7064da.jpg",
    videoId: "JMWHSmMPQTI",
  },
  // --- Missing Swallows ---
  iyan: {
    name: "Iyan",
    description: "Pounded yam with a smooth, stretchy texture, a staple swallow",
    longDescription: `
      Iyan, or pounded yam, is a classic and highly esteemed swallow dish in Nigerian cuisine, particularly among the Yoruba people. It's made by boiling yam tubers until soft, then pounding them with a mortar and pestle until a smooth, dough-like, and stretchy consistency is achieved. The laborious process of pounding is often seen as a labor of love, yielding a staple that is deeply satisfying.

      The perfect Iyan is lump-free, soft, and elastic, making it easy to scoop up with fingers to accompany rich Nigerian soups like Egusi, Efo Riro, or Ogbono. Its neutral taste allows it to absorb the flavors of the accompanying soup, making each bite a delightful experience.

      While modern methods sometimes involve blenders or yam flour to achieve a similar consistency, traditionally pounded yam is considered superior in texture and taste, a testament to the authentic culinary heritage it represents.
    `,
    ingredients: [
      "1 large yam tuber (white yam preferred)",
      "Water for boiling and pounding",
    ],
    instructions: [
      "Peel the yam tuber and cut it into medium-sized chunks. Wash thoroughly.",
      "Place the yam chunks in a pot and add enough water to cover them. Bring to a boil.",
      "Cook until the yam is very soft and can be easily pierced with a fork (about 20-30 minutes, depending on yam thickness).",
      "Drain the hot water, reserving a small amount of the cooking water.",
      "Transfer the soft yam into a clean mortar (or a sturdy food processor/blender with a dough blade).",
      "Begin pounding the yam vigorously with a pestle (or blend) until it forms a smooth, lump-free dough. Add a tablespoon or two of the reserved hot water if needed to achieve a smoother consistency and prevent it from sticking.",
      "Continue pounding/blending until the Iyan is smooth, elastic, and has a consistent texture.",
      "Serve immediately while hot with your favorite Nigerian soup.",
    ],
    nutritionalInfo: {
      calories: "280 per serving",
      protein: "3g",
      carbs: "65g",
      fat: "0.5g",
      fiber: "4g",
    },
    culturalSignificance:
      "Iyan (pounded yam) is a cornerstone of Nigerian culinary tradition, symbolizing hospitality, effort, and authentic home cooking. It's often prepared for special guests, family gatherings, and celebrations, as the traditional pounding process signifies dedication. It holds a place of honor among swallows and is deeply intertwined with cultural identity, especially within Yoruba communities, representing comfort and a well-provided meal.",
    image: "https://cheflolaskitchen.com/wp-content/uploads/2019/06/DSC0211-pounded-yam.jpg.webp",
    videoId: "l35CqPxr9bA",
  },
  fufu: {
    name: "Fufu",
    description: "Cassava flour swallow with a soft, doughy consistency, popular across West Africa",
    longDescription: `
      Fufu is a staple food across West and Central Africa, known for its soft, doughy, and sometimes slightly sticky texture. While various ingredients can be used, the most common Fufu in Nigeria is made from fermented cassava. The fermentation process gives it a distinct, slightly tangy flavor.

      To make Fufu, cassava tubers are peeled, soaked, fermented, and then pounded or ground into a smooth paste. This paste is cooked and stirred over heat until it forms a firm yet pliable dough. It's then typically served in balls or lumps alongside a variety of rich soups and stews.

      Fufu is traditionally eaten with the hands, with a small portion broken off, rolled into a ball, indented, and then used to scoop up soup. Its mild flavor makes it an ideal accompaniment for spicy and flavorful Nigerian soups like Egusi, Okra, or Light Soup.
    `,
    ingredients: [
      "2 cups fufu flour (cassava flour)",
      "4-5 cups hot water",
      "Additional hot water as needed",
    ],
    instructions: [
      "Bring 4-5 cups of water to a rolling boil in a pot. Reduce heat to low.",
      "Gradually add fufu flour to the hot water, stirring continuously with a wooden spoon to prevent lumps.",
      "Continue stirring vigorously until a smooth, thick, and consistent dough forms. This requires strong, consistent stirring.",
      "If the fufu is too stiff, add a small amount of hot water and continue to stir/pound until the desired soft and smooth consistency is achieved.",
      "Cover the pot and let it steam on very low heat for 2-3 minutes to cook through.",
      "Stir again briefly to ensure uniformity.",
      "Serve hot in desired portions with any Nigerian soup of choice.",
    ],
    nutritionalInfo: {
      calories: "270 per serving",
      protein: "1g",
      carbs: "65g",
      fat: "0.5g",
      fiber: "2g",
    },
    culturalSignificance:
      "Fufu is a cornerstone of West African cuisine, embodying communal dining and cultural heritage. Its preparation and consumption are deeply ingrained in daily life and celebratory events across various ethnic groups. Eating fufu with soup is a communal experience that fosters connections, and the dish represents sustenance, tradition, and the rich culinary diversity of the region.",
    image: "https://www.africanbites.com/wp-content/uploads/2022/04/Fufu-1.bmp",
    videoId: "RSV698GrFHQ",
  },
  semo: {
    name: "Semo",
    description: "Semolina swallow, a light-colored and smooth accompaniment to Nigerian soups",
    longDescription: `
      Semo, short for Semovita, is a popular Nigerian swallow made from semolina flour. It's a modern alternative to traditional swallows like pounded yam or fufu, appreciated for its ease of preparation and relatively light texture. Semolina is a coarse, purified wheat middlings of durum wheat.

      The process of making Semo involves mixing semolina flour with hot water and stirring continuously until a smooth, firm, and stretchy dough is formed. Unlike traditional swallows that require pounding, Semo can be prepared quickly on the stovetop, making it a convenient choice for busy households.

      Semo has a neutral flavor and a light, often pale yellow or off-white color, which makes it a versatile accompaniment to almost any Nigerian soup, including Egusi, Efo Riro, Ogbono, or Okra soup. It's easily digestible and a favorite for those seeking a less dense swallow option.
    `,
    ingredients: [
      "2 cups semolina flour (Semovita)",
      "3-4 cups hot water",
      "Additional hot water as needed",
    ],
    instructions: [
      "Bring 3-4 cups of water to a boil in a pot. Reduce heat to low.",
      "Gradually add semolina flour to the hot water, stirring continuously with a wooden spoon or strong whisk to prevent lumps.",
      "Continue stirring vigorously and consistently until the mixture forms a smooth, thick dough. Ensure all lumps are broken down.",
      "If the mixture is too stiff, add small amounts of hot water gradually, continuing to stir until the desired soft, pliable, and stretchy consistency is achieved.",
      "Cover the pot and let the Semo cook on very low heat for about 2-3 minutes. This steaming helps to cook it thoroughly.",
      "Give it a final stir to ensure uniform texture.",
      "Serve hot with any Nigerian soup or stew.",
    ],
    nutritionalInfo: {
      calories: "260 per serving",
      protein: "7g",
      carbs: "55g",
      fat: "1g",
      fiber: "2g",
    },
    culturalSignificance:
      "Semo represents the evolving landscape of Nigerian cuisine, offering convenience without sacrificing the essence of swallow dishes. While newer, it has quickly integrated into Nigerian culinary practices due to its ease of preparation, making it a common sight in modern households and a popular choice for everyday meals. It reflects adaptability while maintaining the tradition of pairing starchy staples with flavorful soups.",
    image: "https://shop.axielle.com.ng/wp-content/uploads/2022/11/P1070100.jpg",
    videoId: "uuxGrvfLrzI",
  },
  lafun: {
    name: "Lafun",
    description: "Cassava flour swallow with a firm texture, often made from dried cassava",
    longDescription: `
      Lafun is a traditional Nigerian swallow made from dried, fermented cassava flour. It is particularly popular in the Southwestern part of Nigeria, among the Yoruba people, and is known for its firm texture and light, almost white color.

      The preparation of Lafun involves processing cassava tubers into a dry, fine powder. This powder is then mixed with boiling water and continuously stirred until it forms a smooth, firm dough. Unlike fufu, which often has a slightly softer consistency, Lafun is characteristically denser and less elastic.

      Lafun is often served with a variety of Nigerian soups, especially those with a rich and hearty base, as its firm texture provides a good contrast to the soup. It's a staple in many Yoruba homes and is valued for its satisfying and filling qualities.
    `,
    ingredients: [
      "2 cups Lafun flour (dried cassava flour)",
      "4-5 cups hot water",
      "Additional hot water as needed",
    ],
    instructions: [
      "Bring 4-5 cups of water to a boil in a pot. Reduce heat to low.",
      "Gradually add Lafun flour to the hot water, stirring continuously with a wooden spoon or strong whisk to prevent lumps.",
      "Continue stirring vigorously and consistently until the mixture forms a thick, firm dough. Ensure all lumps are broken down.",
      "If the mixture is too stiff, add small amounts of hot water gradually, continuing to stir until the desired firm yet smooth consistency is achieved. It should be pliable but hold its shape well.",
      "Cover the pot and let the Lafun cook on very low heat for about 2-3 minutes for thorough cooking.",
      "Give it a final stir to ensure uniform texture.",
      "Serve hot with any Nigerian soup or stew.",
    ],
    nutritionalInfo: {
      calories: "280 per serving",
      protein: "1g",
      carbs: "68g",
      fat: "0.5g",
      fiber: "3g",
    },
    culturalSignificance:
      "Lafun is a deeply traditional swallow, representing an age-old method of preserving and preparing cassava within Yoruba culture. Its presence at the dining table speaks to the historical dietary practices and agricultural resourcefulness of the people. It's a testament to the enduring culinary techniques passed down through generations, offering a robust and fulfilling meal that connects diners to their heritage.",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/cfc6b66a4bd1cef7adfdbca111d2382d/Derivates/f14c449b43b7f58a48f487edb233c60ba0e5c3fa.jpg",
    videoId: "0xgFYHAfl74",
  },
  eba: {
    name: "Eba",
    description: "Garri (cassava) swallow with a slightly sour taste, quick to prepare",
    longDescription: `
      Eba is one of Nigeria's most widely consumed swallows, made from garri, a granular flour derived from processed cassava. Its popularity stems from its ease of preparation and versatility, making it a daily staple in many Nigerian homes. Eba is known for its slightly sour taste, which comes from the fermentation of cassava during garri production.

      To prepare Eba, garri is simply mixed with hot water and stirred vigorously until it forms a smooth, firm dough. The texture can range from soft to firm, depending on personal preference and the amount of water used. It comes in various colors, from white to yellow (if palm oil is added during garri processing).

      Eba is an excellent accompaniment to a vast array of Nigerian soups and stews, including Egusi, Okra, Efo Riro, and Gbegiri. It's consumed by hand, rolled into a ball, and used to scoop up the flavorful soup.
    `,
    ingredients: [
      "2 cups garri (cassava flakes)",
      "2-3 cups hot water",
      "Additional hot water as needed",
    ],
    instructions: [
      "Boil 2-3 cups of water in a kettle or pot until it's very hot but not necessarily boiling vigorously.",
      "Pour the hot water into a heatproof bowl or plate. Immediately sprinkle the garri over the hot water, ensuring it's evenly distributed.",
      "Let the garri soak in the hot water for about 30 seconds to 1 minute, allowing it to absorb the water and soften. Do not stir yet.",
      "Begin to stir the mixture vigorously with a wooden spoon, mashing and turning until all the garri has absorbed the water and a smooth, lump-free dough forms.",
      "If the Eba is too stiff, add a very small amount of hot water and continue stirring until the desired soft, pliable consistency is achieved. If it's too soft, you can add a little more dry garri and stir.",
      "Continue stirring for another 1-2 minutes to ensure it's well combined and thoroughly cooked by the heat.",
      "Form into desired portions or serve directly from the bowl.",
      "Serve hot with any Nigerian soup of choice.",
    ],
    nutritionalInfo: {
      calories: "240 per serving",
      protein: "1g",
      carbs: "58g",
      fat: "0.5g",
      fiber: "2g",
    },
    culturalSignificance:
      "Eba is perhaps the most democratic and ubiquitous swallow in Nigeria, representing affordability, accessibility, and daily sustenance for millions. Its simple preparation makes it a go-to meal, embodying practicality in Nigerian households. It's a staple that transcends social strata and is a familiar comfort food, deeply woven into the fabric of everyday Nigerian life.",
    image: "https://www.seriouseats.com/thmb/U3lZPxO_i0JElO7mKab094-b0VM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220425-Eba-Maureen-Celestine-16-Step3-1-8cbf0f408804485e9a14a158a32b06c3.JPG",
    videoId: "H8cHJ_JK9FA",
  },
  // --- Missing Rice Dishes ---
  "fried-rice": {
    name: "Fried Rice",
    description: "A colorful and flavorful rice dish cooked with mixed vegetables and proteins",
    longDescription: `
      Nigerian Fried Rice is a vibrant and aromatic dish that has become a staple at celebrations and everyday meals alike. Unlike some Asian versions, Nigerian Fried Rice is typically cooked with parboiled rice, mixed vegetables like carrots, green beans, sweet corn, and green peas, along with liver, shrimp, or chicken.

      The dish gets its distinctive flavor from curry powder, thyme, and sometimes a hint of ginger and garlic, giving it a rich and savory profile. The vegetables add not only color but also texture and nutritional value, making it a wholesome and appealing meal.

      Often served alongside Jollof Rice, fried plantains, and various forms of protein, Nigerian Fried Rice is a testament to the country's diverse culinary influences and its ability to adapt and perfect dishes. It's a crowd-pleaser that is always a hit at parties and family gatherings.
    `,
    ingredients: [
      "3 cups long-grain parboiled rice",
      "1/2 cup vegetable oil",
      "1 large onion, chopped",
      "1 cup diced carrots",
      "1 cup green beans, cut into small pieces",
      "1/2 cup sweet corn",
      "1/2 cup green peas",
      "1/2 pound beef liver or chicken, diced (optional)",
      "1/4 cup chopped green bell pepper",
      "2 tablespoons soy sauce",
      "1 tablespoon curry powder",
      "1 teaspoon dried thyme",
      "1 seasoning cube",
      "Salt to taste",
      "Black pepper to taste",
      "Water or chicken stock",
    ],
    instructions: [
      "Boil the parboiled rice in lightly salted water for about 10-15 minutes until it's par-boiled (al dente). Drain and rinse with cold water to prevent sticking. Set aside.",
      "If using liver/chicken, boil and chop into small pieces. Set aside.",
      "Heat vegetable oil in a large wok or frying pan over medium-high heat. Add chopped onions and sauté until fragrant (1-2 minutes).",
      "Add diced carrots and green beans. Stir-fry for 3-5 minutes until slightly tender but still crunchy.",
      "Add sweet corn, green peas, green bell pepper, and the diced liver/chicken (if using). Stir-fry for another 2-3 minutes.",
      "Push the vegetables to one side of the pan. Add the par-boiled rice to the empty side. Sprinkle curry powder, thyme, seasoning cube, salt, black pepper, and soy sauce over the rice.",
      "Begin to mix the rice and vegetables together, ensuring all ingredients are well combined and the rice is coated with the spices. Stir-fry for about 5-7 minutes.",
      "If the rice seems dry, add a splash of water or chicken stock, stirring until absorbed.",
      "Taste and adjust seasoning if necessary. Serve hot.",
    ],
    nutritionalInfo: {
      calories: "420 per serving",
      protein: "10g",
      carbs: "75g",
      fat: "10g",
      fiber: "5g",
    },
    culturalSignificance:
      "Nigerian Fried Rice is a symbol of celebration and generosity, a staple at festive gatherings and special occasions. It showcases the vibrant and diverse culinary traditions of Nigeria, blending local ingredients with international influences. Its presence often signifies a well-catered event, embodying abundance and the joy of shared meals within Nigerian communities.",
    image: "https://i.pinimg.com/1200x/44/67/f4/4467f46691bf41143404de960757ddbd.jpg",
    videoId: "xGLN5zSJyw0",
  },
  "ofada-rice": {
    name: "Ofada Rice",
    description: "Local Nigerian rice served with a special spicy stew (Ayamase)",
    longDescription: `
      Ofada Rice is a unique local Nigerian rice variety, characterized by its short, plump grains and distinctive aroma (which some describe as slightly earthy or fermented). It is traditionally served with a rich, spicy, and green-colored stew called "Ayamase" or "Ofada Stew."

      The rice itself is often processed and sold unpolished, retaining more of its natural nutrients and a rustic flavor. The Ayamase stew, a perfect complement, is made from unripe scotch bonnet peppers, green bell peppers, onions, palm oil, and various assorted meats like offal (shaki, bokoto, fuku), and sometimes boiled eggs. The palm oil is typically 'bleached' (heated until it changes color and loses its raw taste), which gives the stew its characteristic dark red-orange hue and smoky flavor.

      Ofada Rice with Ayamase is a beloved combination, especially popular in Southwestern Nigeria. It's often wrapped and served in moin-moin leaves (ewé eran) or banana leaves, which further enhance its unique aroma and traditional appeal. It's a true culinary experience, bursting with authentic Nigerian flavors.
    `,
    ingredients: [
      "2 cups Ofada rice",
      "For Ayamase (Ofada Stew):",
      "1 cup unripe scotch bonnet peppers (ata rodo), blended roughly",
      "1/2 cup green bell peppers, blended roughly",
      "1 large onion, blended roughly",
      "1 cup bleached palm oil",
      "Assorted meats (shaki, bokoto, fuku), pre-boiled",
      "Smoked fish or smoked turkey (optional)",
      "Locust beans (iru) - 2 tablespoons",
      "Seasoning cubes - to taste",
      "Salt to taste",
      "Optional: Crayfish",
    ],
    instructions: [
      "Prepare Ofada Rice: Pick and rinse the Ofada rice thoroughly to remove stones and impurities. Boil in enough water until tender (it might need more water than regular rice due to its texture). Drain and set aside.",
      "Prepare Ayamase: Heat palm oil in a pot over medium-high heat until it is 'bleached' (it will change to a lighter color and start smoking lightly - ensure good ventilation). Turn off heat and let it cool slightly to prevent burning.",
      "Carefully add the roughly blended pepper and onion mixture to the cooled bleached palm oil. Return to medium heat and fry, stirring occasionally, until the water has evaporated and the oil separates from the stew (about 15-20 minutes).",
      "Add locust beans (iru), seasoning cubes, salt, and crayfish (if using). Stir well.",
      "Add the pre-boiled assorted meats and smoked fish/turkey (if using) to the stew. Stir to coat thoroughly.",
      "Let the stew simmer for another 10-15 minutes, allowing the flavors to meld and the meats to absorb the stew's richness.",
      "Serve the Ofada rice hot, with a generous portion of Ayamase stew, traditionally wrapped in leaves.",
    ],
    nutritionalInfo: {
      calories: "500 per serving",
      protein: "25g",
      carbs: "60g",
      fat: "20g",
      fiber: "7g",
    },
    culturalSignificance:
      "Ofada Rice and Ayamase stew represent a deep connection to Nigerian culinary heritage, particularly within the Yoruba culture. It's a dish often associated with traditional gatherings, markets, and local eateries, celebrated for its bold flavors and unique preparation. The use of specific local ingredients and traditional serving methods underscores its cultural authenticity, making it a beloved symbol of Nigerian indigenous cuisine.",
    image: "https://i.pinimg.com/736x/90/0a/f2/900af2ced732a9492ced80541d94d705.jpg",
    videoId: "yRRxo-z4NWI",
  },
  "tuwo-shinkafa": {
    name: "Tuwo Shinkafa",
    description: "A soft, doughy swallow made from non-glutinous rice, popular in Northern Nigeria",
    longDescription: `
      Tuwo Shinkafa is a traditional swallow dish originating from Northern Nigeria, particularly popular among the Hausa and Fulani ethnic groups. It is made from soft, non-glutinous rice, cooked and pounded or mashed into a smooth, thick, and very soft dough. The name "Tuwo Shinkafa" literally means "rice swallow" in Hausa.

      Unlike other swallows that can be quite firm, Tuwo Shinkafa is known for its exceptionally soft and almost melt-in-your-mouth texture, making it very easy to swallow. Its mild flavor makes it an excellent accompaniment to a variety of rich and savory soups from Northern Nigeria, such as Miyar Kuka (Baobab leaf soup) or Miyar Taushe (Groundnut soup with pumpkin).

      It's a staple in many Northern Nigerian homes and is often served as a comforting and fulfilling meal, embodying the simple yet hearty nature of the region's cuisine.
    `,
    ingredients: [
      "2 cups long-grain rice (non-glutinous)",
      "4-5 cups water",
      "Additional water as needed",
    ],
    instructions: [
      "Wash the rice thoroughly. Place in a pot and add 4-5 cups of water.",
      "Bring to a boil, then reduce heat to medium-low. Cook until the rice is very soft and mushy, stirring occasionally.",
      "Once the rice is very soft and almost porridge-like, begin to mash it vigorously with a wooden spoon against the sides of the pot. Continue mashing until it forms a smooth, lump-free, doughy consistency.",
      "If the mixture is too thick or difficult to mash, add a little hot water gradually and continue mashing until the desired soft and smooth consistency is achieved.",
      "Gather the Tuwo into a ball in the pot, cover, and let it steam on low heat for 2-3 minutes to firm up slightly.",
      "Scoop into desired portions, shaping into smooth balls.",
      "Serve hot with any traditional Northern Nigerian soup.",
    ],
    nutritionalInfo: {
      calories: "270 per serving",
      protein: "5g",
      carbs: "60g",
      fat: "0.5g",
      fiber: "2g",
    },
    culturalSignificance:
      "Tuwo Shinkafa is a central culinary emblem of Northern Nigeria, representing the region's staple diet and communal eating practices. It's a common sight at everyday meals and particularly at festive occasions, symbolizing hospitality and the rich cultural identity of the Hausa and Fulani people. Its soft texture is associated with comfort and easy sustenance, deeply ingrained in the local culinary heritage.",
    image: "https://i.pinimg.com/1200x/62/59/2c/62592c26a2180c666fe5eaa86f8249aa.jpg",
    videoId: "BKUgOBK_ii8",
  },
  "coconut-rice": {
    name: "Coconut Rice",
    description: "Fragrant rice cooked with coconut milk, offering a rich and subtly sweet flavor",
    longDescription: `
      Nigerian Coconut Rice is a deliciously fragrant and flavorful rice dish cooked with coconut milk. It offers a rich, creamy, and subtly sweet taste that distinguishes it from other rice preparations. It's a beloved dish that finds its way onto family tables and special event menus.

      The dish typically combines parboiled rice with freshly grated coconut milk (or canned coconut milk), onions, bell peppers, sometimes prawns or chicken, and a blend of mild spices like curry powder and thyme. The coconut milk infuses the rice with its unique aroma and creates a wonderfully tender texture.

      Coconut Rice can be served as a main dish or as a side, often accompanied by fried chicken, fish, or a simple vegetable salad. It's a comforting meal that showcases the versatility of rice in Nigerian cuisine and is a favorite for those who enjoy a hint of sweetness and tropical flavor in their savory dishes.
    `,
    ingredients: [
      "3 cups parboiled rice",
      "2 cups coconut milk (from fresh coconut or canned)",
      "1 large onion, sliced",
      "1-2 red bell peppers, diced (optional)",
      "1-2 scotch bonnet peppers, minced (optional, for heat)",
      "1/4 cup vegetable oil",
      "1/2 cup pre-cooked prawns or shredded chicken (optional)",
      "1 tablespoon curry powder",
      "1 teaspoon dried thyme",
      "1 seasoning cube",
      "Salt to taste",
      "Water or chicken stock (if needed)",
    ],
    instructions: [
      "Wash the parboiled rice thoroughly until the water runs clear. Set aside.",
      "Heat vegetable oil in a large pot over medium heat. Add sliced onions and sauté until translucent.",
      "Add diced bell peppers and minced scotch bonnet peppers (if using). Sauté for 2-3 minutes.",
      "Add curry powder, thyme, seasoning cube, and salt. Stir well.",
      "Pour in the coconut milk. Add a bit of water or stock if the liquid doesn't seem enough to cook the rice. Bring to a boil.",
      "Add the washed rice to the boiling coconut milk mixture. Stir once, then cover the pot tightly.",
      "Reduce heat to low and cook for about 20-25 minutes, or until the rice is tender and has absorbed all the liquid.",
      "If using prawns or chicken, stir them in during the last 5-10 minutes of cooking.",
      "Once cooked, fluff the rice with a fork.",
      "Serve hot as a main dish or a side.",
    ],
    nutritionalInfo: {
      calories: "450 per serving",
      protein: "8g",
      carbs: "65g",
      fat: "18g",
      fiber: "3g",
    },
    culturalSignificance:
      "Coconut Rice in Nigeria represents a delightful fusion of flavors and is a testament to the country's diverse culinary landscape. It's often prepared for special family occasions, signifying a step beyond everyday meals. The tropical notes from the coconut highlight Nigeria's rich agricultural bounty and its culinary creativity in transforming simple ingredients into a festive and comforting dish.",
    image: "https://i.pinimg.com/736x/30/07/41/3007413793be74c835ef5ca9a8fa814c.jpg",
    videoId: "CHYTUzyhgbE",
  },
  // --- Missing Snacks ---
  "puff-puff": {
    name: "Puff Puff",
    description: "Deep-fried dough balls, a popular street food snack",
    longDescription: `
      Puff Puff is a beloved deep-fried dough snack, popular across West Africa, particularly in Nigeria. These delightful golden-brown balls are light, airy, and slightly sweet, making them an irresistible street food and party snack.

      Made from a simple batter of flour, sugar, yeast, and water, the mixture is left to rise before being deep-fried until puffed and golden. The outside is slightly crispy, while the inside remains soft and chewy. They are often served plain, but can also be dusted with powdered sugar, cinnamon, or dipped in a light syrup for extra sweetness.

      Puff Puff is a versatile snack, enjoyed at any time of day – for breakfast, as a quick bite, or as part of a spread at gatherings and celebrations. Its simplicity and widespread appeal make it a quintessential Nigerian treat.
    `,
    ingredients: [
      "2 cups all-purpose flour",
      "1/2 cup granulated sugar (adjust to taste)",
      "2 teaspoons active dry yeast",
      "1/2 teaspoon ground nutmeg (optional)",
      "1/4 teaspoon salt",
      "1 1/2 cups warm water",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "In a large bowl, combine the flour, sugar, yeast, nutmeg (if using), and salt. Mix well.",
      "Gradually add the warm water to the dry ingredients, mixing with a wooden spoon or your hand until a smooth, slightly sticky batter forms. Ensure there are no lumps.",
      "Cover the bowl with a clean kitchen towel or plastic wrap and let it rise in a warm place for 45 minutes to 1 hour, or until doubled in size. The batter should be light and bubbly.",
      "Heat vegetable oil in a deep pot or fryer over medium heat. The oil should be hot enough (around 350-375°F / 175-190°C) to fry the puff puff without soaking too much oil.",
      "Once the oil is hot and the batter has risen, gently stir the batter down slightly. Using your hand (squeezing a small amount through your thumb and index finger) or two spoons, drop small balls of batter into the hot oil.",
      "Fry a few pieces at a time to avoid overcrowding the pot. The puff puff will puff up and turn golden brown.",
      "Fry, turning occasionally, until all sides are evenly golden brown and cooked through (about 3-5 minutes per batch).",
      "Remove with a slotted spoon and place on a wire rack lined with paper towels to drain excess oil.",
      "Serve warm, plain, or dusted with powdered sugar.",
    ],
    nutritionalInfo: {
      calories: "180 per serving (3-4 pieces)",
      protein: "3g",
      carbs: "30g",
      fat: "6g",
      fiber: "1g",
    },
    culturalSignificance:
      "Puff Puff is an iconic Nigerian street food, symbolizing casual enjoyment and communal sharing. It's a ubiquitous snack found at markets, ceremonies, and school gates, representing the everyday joy of Nigerian life. Its simplicity and widespread appeal make it a universally loved treat, bridging generational and social divides, and often evoking nostalgic memories.",
    image: "https://i.pinimg.com/1200x/c3/98/b0/c398b02e7b36efd986be50d3822cbbc5.jpg",
    videoId: "TEDlOe8Qob4",
  },
  akara: {
    name: "Akara",
    description: "Deep-fried bean cakes made from peeled beans and spices, a popular breakfast item",
    longDescription: `
      Akara, also known as Acarajé in Brazil, is a popular West African dish consisting of deep-fried bean cakes. Made from a batter of peeled beans, blended with onions and peppers, Akara is a crunchy yet soft snack often enjoyed for breakfast or as a light meal.

      The process involves soaking and peeling black-eyed peas (or brown beans), then blending them with onions, scotch bonnet peppers, and sometimes bell peppers, into a light, airy batter. This batter is then deep-fried in hot oil until golden brown and crispy on the outside, and fluffy on the inside.

      Akara is commonly served hot, often with bread (creating a popular combo called 'Akara and Bread'), pap (akamu/ogi), or simply as a standalone snack. Its savory, slightly spicy flavor makes it a comforting and satisfying treat enjoyed across Nigeria.
    `,
    ingredients: [
      "2 cups black-eyed peas (or brown beans), peeled",
      "1 large onion, roughly chopped",
      "2-3 scotch bonnet peppers (ata rodo) - adjust to taste",
      "Salt to taste",
      "Vegetable oil for deep frying",
      "Water (a few tablespoons, if needed for blending)",
    ],
    instructions: [
      "Soak the beans for at least 30 minutes, then peel them thoroughly (rubbing them together to loosen the skin and rinsing repeatedly). This is crucial for smooth Akara.",
      "Combine the peeled beans, roughly chopped onion, and scotch bonnet peppers in a blender. Add a few tablespoons of water if necessary to help blend, but keep the mixture as thick as possible.",
      "Blend until very smooth and creamy. The smoother the batter, the lighter the Akara.",
      "Pour the batter into a large bowl. Using a stand mixer, hand mixer, or by hand with a whisk, beat the batter vigorously for 10-15 minutes until it is light, fluffy, and has significantly increased in volume. This step is essential for airy Akara.",
      "Stir in salt to taste. Do not overmix after adding salt.",
      "Heat vegetable oil in a deep pot over medium-high heat. The oil should be hot enough (around 350-375°F / 175-190°C) for deep frying.",
      "Using a spoon or scoop, carefully drop spoonfuls of the Akara batter into the hot oil.",
      "Fry a few pieces at a time, turning occasionally, until golden brown and crispy on all sides (3-5 minutes per batch).",
      "Remove the Akara with a slotted spoon and place on a wire rack lined with paper towels to drain excess oil.",
      "Serve hot with bread, pap, or as a standalone snack.",
    ],
    nutritionalInfo: {
      calories: "200 per serving (2-3 cakes)",
      protein: "8g",
      carbs: "20g",
      fat: "10g",
      fiber: "5g",
    },
    culturalSignificance:
      "Akara is a staple of Nigerian breakfast and street food culture, embodying the comfort and simplicity of traditional cooking. Its presence at breakfast tables, often paired with pap (fermented corn pudding) or bread, signifies a communal start to the day. It also represents resourcefulness, transforming humble beans into a beloved and nutritious snack that is widely accessible and enjoyed by all.",
    image: "https://i.pinimg.com/736x/20/38/fa/2038fa4ed5f75711434ec35b5ec517e6.jpg",
    videoId: "A5bu-XE53es",
  },
  "chin-chin": {
    name: "Chin Chin",
    description: "Crunchy fried pastry snack, sweet and often flavored with nutmeg",
    longDescription: `
      Chin Chin is a popular crunchy fried snack across West Africa, particularly Nigeria. It's a sweet, biscuit-like pastry made from a dough containing flour, sugar, eggs, butter (or margarine), and often flavored with nutmeg. The dough is rolled out and cut into various shapes (squares, strips, or abstract forms) before being deep-fried until golden brown and crispy.

      The appeal of Chin Chin lies in its satisfying crunch and balanced sweetness. It's a versatile snack that can be made softer and chewier or harder and crunchier, depending on the dough's consistency and frying time.

      Chin Chin is a ubiquitous treat during festive periods like Christmas, Eid, and New Year, and is a common sight at parties, weddings, and family gatherings. It's often prepared in large batches and stored in airtight containers, making it a convenient snack to offer guests or enjoy over time.
    `,
    ingredients: [
      "4 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter or margarine, softened",
      "2 large eggs",
      "1/2 cup milk (or evaporated milk)",
      "1 teaspoon baking powder",
      "1/2 teaspoon ground nutmeg",
      "Pinch of salt",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "In a large bowl, whisk together the flour, baking powder, ground nutmeg, and salt. Set aside.",
      "In a separate bowl, cream together the softened butter and sugar until light and fluffy.",
      "Beat in the eggs one at a time, ensuring each is fully incorporated before adding the next.",
      "Gradually add the dry ingredients to the wet ingredients, alternating with the milk. Mix until a firm, non-sticky dough forms. You might not need all the milk.",
      "Transfer the dough to a lightly floured surface and knead gently for a few minutes until smooth.",
      "Divide the dough into manageable portions. Roll out each portion using a rolling pin until it's about 1/4 inch thick.",
      "Using a sharp knife or a pastry cutter, cut the dough into desired shapes (small squares, strips, or diamond shapes).",
      "Heat vegetable oil in a deep pot or fryer over medium heat (around 325-350°F / 160-175°C).",
      "Carefully drop the Chin Chin pieces into the hot oil, frying in batches to avoid overcrowding. Stir gently to ensure even browning.",
      "Fry until golden brown and crispy (about 5-7 minutes per batch). The color should be uniform.",
      "Remove with a slotted spoon and transfer to a wire rack lined with paper towels to drain excess oil.",
      "Allow to cool completely before storing in an airtight container.",
    ],
    nutritionalInfo: {
      calories: "150 per serving (approx. 1/4 cup)",
      protein: "2g",
      carbs: "25g",
      fat: "5g",
      fiber: "0.5g",
    },
    culturalSignificance:
      "Chin Chin is synonymous with Nigerian festivities and hospitality. It's a celebratory snack, symbolizing joy and sharing, especially during holidays, weddings, and other social gatherings. The act of preparing Chin Chin in large quantities reflects community spirit and generosity, making it a beloved symbol of Nigerian family traditions and good times.",
    image: "https://i.pinimg.com/1200x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg",
    videoId: "Ru7avaYvdfI",
  },
  dundu: {
    name: "Dundu",
    description: "Fried yam cubes, a popular street food often served with pepper sauce (ata dindin)",
    longDescription: `
      Dundu, simply put, is fried yam. It is a very popular street food and snack in Nigeria, particularly among the Yoruba people. Made from white yam tubers, which are peeled, cut into cubes or slices, and then deep-fried until golden brown and slightly crispy on the outside, while remaining soft and fluffy on the inside.

      The beauty of Dundu lies in its simplicity and versatility. It has a mild, earthy taste that perfectly complements spicy sauces. It is most commonly served with 'Ata Dindin', a fiery fried pepper sauce, or sometimes with a simple stew.

      Dundu is a satisfying and filling snack or light meal, often enjoyed on the go. Its popularity reflects the significant role of yam as a staple crop and a culinary delight in West Africa.
    `,
    ingredients: [
      "1 medium-sized white yam tuber",
      "Salt to taste",
      "Vegetable oil for deep frying",
      "Water for rinsing",
    ],
    instructions: [
      "Peel the yam tuber and cut it into desired shapes – typically cubes, sticks, or round slices about 1/2 inch thick.",
      "Wash the yam pieces thoroughly in cold water to remove excess starch. Drain well.",
      "Lightly sprinkle the yam pieces with salt and toss to coat evenly.",
      "Heat vegetable oil in a deep pot or frying pan over medium-high heat. The oil should be hot enough (around 350-375°F / 175-190°C) to deep-fry the yam (around 350-375°F / 175-190°C).",
      "Carefully add the yam pieces to the hot oil in batches, ensuring not to overcrowd the pot. Overcrowding will reduce the oil temperature and make the yam soggy.",
      "Fry, turning occasionally, until the yam pieces are golden brown and crispy on the outside, and cooked through and tender on the inside (about 5-8 minutes per batch, depending on size).",
      "Remove the fried yam with a slotted spoon and place on a wire rack lined with paper towels to drain excess oil.",
      "Serve hot, typically with a spicy pepper sauce (Ata Dindin), stew, or fried eggs.",
    ],
    nutritionalInfo: {
      calories: "250 per serving",
      protein: "2g",
      carbs: "40g",
      fat: "10g",
      fiber: "3g",
    },
    culturalSignificance:
      "Dundu is a ubiquitous street food in Nigeria, embodying convenience and comfort. It's a common sight at roadside stalls, symbolizing accessible and delicious fast food. Its simplicity and hearty nature make it a beloved snack for people from all walks of life, often enjoyed with friends or as a quick, satisfying meal.",
    image: "https://i.pinimg.com/1200x/a8/cc/73/a8cc7399bf940740556d74b61319ca52.jpg",
    videoId: "5YrkaGJ32H0",
  },
  ojojo: {
    name: "Ojojo",
    description: "Water yam fritters with a crispy exterior and soft interior",
    longDescription: `
      Ojojo is a delightful Nigerian snack or side dish, particularly popular among the Yoruba people, made from water yam. It consists of grated water yam mixed with a spicy blend of peppers, onions, and sometimes smoked fish or prawns, which is then deep-fried into crispy fritters.

      Water yam (Dioscorea alata) has a distinct slimy texture when grated raw, but this transforms into a wonderfully light and fluffy texture when cooked, with a crispy golden-brown exterior. The addition of scotch bonnet peppers gives Ojojo a characteristic spicy kick.

      Ojojo can be enjoyed on its own as a snack, or served as a side dish to rice, beans, or pap. It's a unique yam-based delicacy that showcases the versatility of yam in Nigerian cuisine, offering a different textural experience from pounded yam or fried yam.
    `,
    ingredients: [
      "1 medium-sized water yam (about 1 kg)",
      "1 small onion, roughly chopped",
      "1-2 scotch bonnet peppers (ata rodo) - adjust to taste",
      "1/2 teaspoon salt (or to taste)",
      "1 seasoning cube (optional)",
      "1 tablespoon ground crayfish (optional)",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "Carefully peel the water yam. Use gloves if your skin is sensitive, as water yam can cause itching.",
      "Grate the peeled water yam using the smallest part of a grater or blend it with a minimal amount of water until smooth. The batter will be very slimy.",
      "Combine the grated water yam with roughly chopped onion and scotch bonnet peppers in a blender. Blend until the onions and peppers are finely minced within the yam batter.",
      "Pour the mixture into a bowl. Add salt, seasoning cube (if using), and ground crayfish (if using). Mix thoroughly.",
      "Using a whisk or hand mixer, beat the batter vigorously for 5-10 minutes. This is crucial for incorporating air and reducing the sliminess, making the Ojojo light and fluffy.",
      "Heat vegetable oil in a deep pot or frying pan over medium-high heat (around 350-375°F / 175-190°C).",
      "Carefully drop spoonfuls of the Ojojo batter into the hot oil. Fry in batches, being careful not to overcrowd the pot.",
      "Fry, turning occasionally, until golden brown and crispy on the outside, and cooked through (about 4-6 minutes per batch).",
      "Remove with a slotted spoon and place on a wire rack lined with paper towels to drain excess oil.",
      "Serve hot as a snack or side dish.",
    ],
    nutritionalInfo: {
      calories: "220 per serving",
      protein: "3g",
      carbs: "35g",
      fat: "8g",
      fiber: "4g",
    },
    culturalSignificance:
      "Ojojo is a cherished traditional snack, particularly significant in Yoruba culture, often representing the culinary creativity in utilizing diverse indigenous crops like water yam. Its presence at gatherings showcases a unique aspect of local cuisine, embodying the resourceful spirit and the delightful flavors derived from humble ingredients. It's a comfort food that connects people to their roots and culinary heritage.",
    image: "https://i.pinimg.com/736x/df/b8/3f/dfb83f71284eff9df9c987440fa3d653.jpg",
    videoId: "v27D8TfLkmU",
  },
  kokoro: {
    name: "Kokoro",
    description: "Crunchy corn snack, often sweet and spiral-shaped",
    longDescription: `
      Kokoro is a popular crunchy snack in Nigeria, particularly prevalent in the Southwest. It's made from cornmeal, flour, sugar, and sometimes a hint of ginger, shaped into small, often spiral or cylindrical forms, and then deep-fried until golden brown and very crispy.

      The preparation involves mixing corn flour and all-purpose flour with sugar and other ingredients to form a stiff dough. This dough is then rolled out into thin strands and twisted into their characteristic shapes before frying. The result is a delightful, hard-crunchy snack with a subtly sweet and earthy corn flavor.

      Kokoro is typically enjoyed as a standalone snack, often purchased from street vendors or made at home for family consumption. Its long shelf life makes it a convenient item to stock up on, and it's a common offering to guests in many Nigerian homes.
    `,
    ingredients: [
      "2 cups cornmeal (fine grind)",
      "1 cup all-purpose flour",
      "1/2 cup granulated sugar",
      "1 teaspoon baking powder",
      "1/4 teaspoon salt",
      "1/2 teaspoon ground ginger (optional)",
      "1/2 cup warm water (or as needed)",
      "Vegetable oil for deep frying",
    ],
    instructions: [
      "In a large bowl, combine the cornmeal, all-purpose flour, sugar, baking powder, salt, and ground ginger (if using). Mix well.",
      "Gradually add the warm water to the dry ingredients, mixing with your hand or a sturdy spoon until a stiff, firm dough forms. The dough should be smooth and cohesive.",
      "Knead the dough gently for 5 minutes on a lightly floured surface until it's pliable and no longer sticky.",
      "Take small portions of the dough and roll them into thin ropes or cylinders (about 1/4 inch thick and 3-4 inches long). You can also twist them into spiral shapes if desired.",
      "Heat vegetable oil in a deep pot or fryer over medium heat (around 325-350°F / 160-175°C).",
      "Carefully drop the shaped Kokoro pieces into the hot oil, frying in batches to avoid overcrowding. Incidentally, overcrowding will reduce the oil temperature and make the yam soggy.",
      "Fry, turning occasionally, until golden brown and very crispy. This will take longer than other fried snacks, around 7-10 minutes per batch, to ensure they are hard and crunchy.",
      "Remove with a slotted spoon and place on a wire rack lined with paper towels to drain excess oil.",
      "Allow to cool completely before storing in an airtight container to maintain crispness.",
    ],
    nutritionalInfo: {
      calories: "120 per serving (approx. 1/4 cup)",
      protein: "2g",
      carbs: "20g",
      fat: "4g",
      fiber: "1g",
    },
    culturalSignificance:
      "Kokoro is a traditional snack that speaks to the agricultural heritage of Nigeria, particularly the prominence of corn as a staple crop. It symbolizes a simple, enduring treat often enjoyed during leisurely moments or as a quick energy boost. Its distinctive crunch and sweet-savory profile make it a nostalgic item for many, evoking memories of childhood and local markets.",
    image: "https://i.pinimg.com/736x/5e/75/01/5e7501f5becb77e171be9953c3a9f1f6.jpg",
    videoId: "2EQAraMuRMw",
  },
  aadun: {
    name: "Aadun",
    description: "Traditional roasted cornmeal cakes with palm oil and spices",
    longDescription: `
      Aadun is a traditional Yoruba snack, particularly popular in Southwestern Nigeria. It's a unique delicacy made from roasted cornmeal (or dried corn kernels), mixed with palm oil, a touch of salt, and sometimes sugar or chili pepper for a sweet and spicy kick.

      The process involves dry-roasting corn kernels until golden, then grinding them into a coarse flour. This flour is then mixed with palm oil and other ingredients, and pressed into small cakes or balls. Aadun is characterized by its rustic texture and a delightful blend of earthy corn flavor with the richness of palm oil.

      It's often prepared as a simple, nutritious snack, especially in rural areas or during harvest seasons. Aadun is a testament to the ingenuity of traditional Nigerian cuisine, creating flavorful treats from readily available agricultural produce. It's often enjoyed with a refreshing drink like palm wine or water.
    `,
    ingredients: [
      "2 cups roasted cornmeal (or dry roasted corn kernels, ground)",
      "1/2 cup palm oil (or more, to bind)",
      "1/4 cup sugar (optional, adjust to taste)",
      "1/2 teaspoon salt (or to taste)",
      "1/4 teaspoon chili powder (optional, for spicy version)",
    ],
    instructions: [
      "If starting with dry corn kernels: Dry-roast the corn kernels in a pan over medium heat, stirring constantly, until golden brown and fragrant (be careful not to burn). Let them cool, then grind into a coarse flour/meal.",
      "In a large bowl, combine the roasted cornmeal, sugar (if using), salt, and chili powder (if using). Mix well.",
      "Gradually add the palm oil to the cornmeal mixture, kneading with your hands until the mixture comes together and can be molded. The amount of palm oil might vary depending on the dryness of the cornmeal. It should be just enough to bind the mixture.",
      "Take small portions of the mixture and press them firmly into compact balls, cakes, or any desired shape. You can use your hands or a mold.",
      "Aadun is typically eaten without further cooking once shaped. The roasting of the corn provides the cooked texture.",
      "Serve as a snack.",
    ],
    nutritionalInfo: {
      calories: "180 per serving",
      protein: "3g",
      carbs: "25g",
      fat: "8g",
      fiber: "2g",
    },
    culturalSignificance:
      "Aadun is a rustic and authentic Yoruba snack that embodies the simplicity and resourcefulness of traditional Nigerian farming communities. It is often linked to harvest times and local celebrations, signifying the abundance of agricultural produce. Its preparation methods passed down through generations reflect indigenous culinary practices and a deep connection to the land and its sustenance.",
    image: "https://9jafoodie.com/wp-content/uploads/2013/01/Aadun-600x398.jpg",
    videoId: "C1e4RdA0iHw",
  },
  // --- Missing Drinks ---
  zobo: {
    name: "Zobo",
    description: "A refreshing and healthy drink made from dried hibiscus flowers",
    longDescription: `
      Zobo, also known as Hibiscus Tea or Sorrel, is a popular, refreshing, and healthy drink consumed across Nigeria. It's made from dried roselle leaves or hibiscus flowers, giving it a vibrant deep red color and a tart, cranberry-like flavor.

      The preparation involves boiling the dried hibiscus leaves with water, then steeping them to extract the color and flavor. Various natural sweeteners and flavorings are often added, such as pineapple peel, ginger, cloves, and sugar, to balance the tartness and enhance its aromatic profile.

      Zobo is loved not only for its taste but also for its perceived health benefits, including its rich antioxidant content. It's a ubiquitous beverage found in homes, at parties, and sold by street vendors, serving as a cool and invigorating thirst-quencher.
    `,
    ingredients: [
      "2 cups dried Zobo leaves (hibiscus sabdariffa)",
      "1 medium-sized pineapple, peeled (peels can be used for extra flavor)",
      "1-2 knobs of ginger, peeled and sliced",
      "1/4 cup cloves (konafuru)",
      "Sugar or other sweetener to taste",
      "8-10 cups water",
    ],
    instructions: [
      "Rinse the dried Zobo leaves thoroughly under cold water to remove dust and impurities. Place them in a large pot.",
      "Add the pineapple peels (if using), sliced ginger, and cloves to the pot with the Zobo leaves.",
      "Pour in 8-10 cups of water, ensuring the leaves are fully submerged. Bring to a boil.",
      "Once boiling, reduce the heat and let it simmer for 30-45 minutes, allowing the flavors to infuse and the liquid to turn a deep red.",
      "Remove the pot from heat and let it cool completely. Once cool, strain the mixture through a fine-mesh sieve or cheesecloth to remove all solids. Squeeze out as much liquid as possible from the solids.",
      "Stir in sugar or your preferred sweetener until dissolved. Taste and adjust sweetness.",
      "Pour into bottles or a pitcher and refrigerate for at least 2 hours before serving. Serve chilled with ice.",
    ],
    nutritionalInfo: {
      calories: "80 per serving (approx. 1 cup, unsweetened)",
      protein: "0.5g",
      carbs: "20g",
      fat: "0g",
      fiber: "0.5g",
    },
    culturalSignificance:
      "Zobo is a widely recognized indigenous beverage in Nigeria, representing natural refreshment and traditional herbal remedies. It's a common offering for guests, symbolizing hospitality and well-being. Its vibrant color and refreshing taste make it a staple at celebrations and everyday consumption, reflecting the country's rich biodiversity and the art of transforming simple ingredients into a beloved drink.",
    image: "https://i.pinimg.com/1200x/bd/04/ba/bd04baaa32249fdd24afc6514fa8b4d7.jpg",
    videoId: "2Ioc_LU2HM0",
  },
  kunu: {
    name: "Kunu",
    description: "A traditional non-alcoholic beverage made from millet or sorghum, creamy and refreshing",
    longDescription: `
      Kunu is a popular non-alcoholic beverage originating from Northern Nigeria, but widely consumed across the country. It's a refreshing and nourishing drink, typically made from grains like millet (kunu zaki), sorghum, or sometimes rice.

      The preparation involves soaking the grains, then grinding them with spices like ginger, cloves, and black peppercorns. A portion of the ground mixture is cooked with hot water to form a thick paste, which is then mixed with the uncooked portion and left to ferment slightly before being sieved and sweetened. This process gives Kunu its characteristic creamy texture and slightly tangy, spicy flavor.

      Kunu is valued for its nutritional content and its ability to quench thirst. It's a staple in Northern Nigerian households and is gaining popularity nationwide as a healthy, natural alternative to carbonated drinks.
    `,
    ingredients: [
      "2 cups millet (or sorghum)",
      "1-2 knobs of ginger, peeled",
      "1 tablespoon cloves (konafuru)",
      "A few grains of black peppercorns (optional)",
      "Sugar or honey to taste",
      "6-8 cups water",
    ],
    instructions: [
      "Wash the millet thoroughly and soak it in water for 8-12 hours or overnight. Drain and rinse.",
      "Combine the soaked millet, peeled ginger, cloves, and black peppercorns (if using) in a blender. Add 1-2 cups of water and blend until very smooth.",
      "Divide the blended mixture into two parts. In a pot, boil about 3-4 cups of water.",
      "Pour one part of the blended mixture into the boiling water, stirring continuously to prevent lumps. Cook until it thickens into a paste (like pap or custard). Remove from heat.",
      "Immediately add the remaining uncooked part of the blended mixture to the cooked paste, stirring vigorously until thoroughly combined and smooth. This helps to cool the mixture and start the fermentation process.",
      "Cover the pot and let the mixture sit at room temperature for 6-8 hours (or overnight) to ferment slightly. This gives Kunu its characteristic taste.",
      "After fermentation, dilute the mixture with more cold water (start with 2-3 cups and add more to achieve desired consistency). Stir well.",
      "Strain the Kunu through a fine-mesh sieve or cheesecloth to remove any residue. Discard the chaff.",
      "Sweeten the strained Kunu with sugar or honey to taste. Stir until dissolved.",
      "Refrigerate for at least 2 hours before serving. Serve chilled.",
    ],
    nutritionalInfo: {
      calories: "150 per serving (approx. 1 cup, unsweetened)",
      protein: "4g",
      carbs: "30g",
      fat: "1g",
      fiber: "2g",
    },
    culturalSignificance:
      "Kunu is a vital traditional beverage in Northern Nigeria, embodying indigenous health practices and local agricultural wealth. It is offered as a sign of hospitality and consumed daily for its nourishing properties, reflecting the cultural value placed on natural, wholesome sustenance. Its preparation is a generational art, symbolizing continuity and the deep connection to the land and traditional ways of life.",
    image: "https://i.pinimg.com/736x/1d/1e/0d/1d1e0d05a47f2964dcda615fa8a7de80.jpg",
    videoId: "zFjnllqMCbk",
  },
  "fura-da-nono": {
    name: "Fura da Nono",
    description: "A traditional Northern Nigerian meal/drink of millet balls served with fermented cow's milk (yogurt)",
    longDescription: `
      Fura da Nono is a beloved traditional meal/drink combination particularly popular among the Fulani people of Northern Nigeria. "Fura" refers to a millet-based dough ball, and "Nono" is fermented cow's milk, akin to yogurt or a thick buttermilk.

      The Fura balls are made by cooking millet flour into a firm dough, which is then shaped into balls and often flavored with ginger, cloves, and other spices. These balls are then broken into the Nono (fermented milk) and traditionally mashed together to create a smooth, creamy, and refreshing porridge-like drink.

      It's a highly nutritious and energy-giving combination, often consumed as a breakfast or light meal, especially by nomads and herders. Fura da Nono is celebrated for its natural goodness, cool temperature, and unique tangy-sweet flavor, providing both hydration and sustenance.
    `,
    ingredients: [
      "For Fura:",
      "2 cups millet flour",
      "1/2 teaspoon ground ginger",
      "1/4 teaspoon ground cloves (optional)",
      "Pinch of salt",
      "1 cup hot water (or as needed)",
      "For Nono:",
      "4 cups fresh cow's milk (or natural unsweetened yogurt)",
      "Sugar or honey to taste",
      "Optional: Ice cubes, a pinch of chili powder for garnish",
    ],
    instructions: [
      "Prepare Fura: In a bowl, combine millet flour, ground ginger, cloves (if using), and salt. Gradually add hot water, mixing with a wooden spoon until a firm, cohesive dough forms. It should be kneadable.",
      "Knead the dough gently until smooth. Form into small balls, about the size of golf balls.",
      "You can steam the Fura balls for about 10-15 minutes to cook them further, or simply let them cool if already well cooked by hot water.",
      "Prepare Nono: If using fresh milk, ferment it naturally by leaving it in a clean, covered container at room temperature for 12-24 hours until it thickens and sours like yogurt. (Alternatively, use good quality unsweetened natural yogurt).",
      "To serve: Place a few Fura balls in a bowl. Pour the Nono over the Fura. Use a spoon or your clean hands to mash and mix the Fura into the Nono until it forms a thick, creamy drink/porridge.",
      "Sweeten with sugar or honey to taste. Add ice cubes for extra refreshment. Some people add a tiny pinch of chili powder for a unique kick.",
      "Serve immediately, chilled.",
    ],
    nutritionalInfo: {
      calories: "250 per serving",
      protein: "10g",
      carbs: "30g",
      fat: "10g",
      fiber: "2g",
    },
    culturalSignificance:
      "Fura da Nono is a cornerstone of Fulani culture in Northern Nigeria, symbolizing their pastoral traditions and the harmonious relationship between their cattle and their sustenance. It's more than just food; it's a cultural staple reflecting a way of life, shared among family and friends, and embodying traditional nourishment and community bonds.",
    image: "https://www.nigeriantravelsmagazine.com/wp-content/uploads/2024/10/Picture4.png",
    videoId: "0_kWAVqGkF0",
  },
  "palm-wine": {
    name: "Palm Wine",
    description: "Traditional fermented sap from palm trees, sweet and slightly alcoholic",
    longDescription: `
      Palm wine is a traditional alcoholic beverage common across West, Central, and South Africa, as well as parts of Asia. In Nigeria, it's known by various names such as 'Emu' (Yoruba), 'Ugwu-Ufa' (Igbo), or 'Gya' (Hausa). It is naturally fermented sap tapped from various species of palm trees, most commonly the oil palm (Elaeis guineensis) or the raffia palm.

      When freshly tapped, palm wine is a sweet, opaque, whitish liquid that is non-alcoholic. However, due to natural fermentation by ambient yeasts, it quickly ferments within hours of tapping, becoming effervescent, slightly alcoholic, and increasingly sour over time. Its alcohol content can range from 2% to 4% or higher, depending on the fermentation period.

      Palm wine is highly valued for its refreshing taste and cultural significance. It's often consumed communally from calabashes or cups, and plays a central role in traditional ceremonies, social gatherings, festivals, and rites of passage. It embodies community, tradition, and the bounty of nature.
    `,
    ingredients: [
      "Freshly tapped palm sap",
    ],
    instructions: [
      "Palm wine is typically obtained directly from palm tree tappers who collect the sap. It is not generally 'made' at home from raw ingredients in the same way food is cooked.",
      "To obtain: Locate a local palm wine tapper. The sap is collected by making an incision in the palm tree and attaching a container to collect the flowing sap.",
      "To consume: Freshly tapped palm wine can be consumed immediately. It will be sweet and milky. If left at room temperature, it will naturally ferment.",
      "For stronger fermentation: Allow the palm wine to sit for a few hours (or up to a day) at room temperature. The longer it sits, the more alcoholic and sour it becomes.",
      "Serve chilled for best taste, especially when relatively fresh and slightly sweet.",
    ],
    nutritionalInfo: {
      calories: "100-150 per serving (approx. 1 cup, fermented)",
      protein: "0.5g",
      carbs: "10-20g",
      fat: "0g",
      fiber: "0g",
    },
    culturalSignificance:
      "Palm wine holds immense cultural significance across West Africa, especially in Nigeria, where it is more than just a drink; it's a symbol of tradition, community, and celebration. It plays a central role in traditional ceremonies, festivals, marriages, and community gatherings, embodying communal bonding and cultural identity. The act of sharing palm wine often signifies peace, reconciliation, and hospitality, deeply embedding it into the social fabric.",
    image: "https://www.emaketa.com/wp-content/uploads/2025/05/palm-wine.jpg",
    videoId: "gFNDtYZnl74",
  },
  agbo: {
    name: "Agbo",
    description: "Traditional Yoruba herbal concoction, often used for medicinal purposes",
    longDescription: `
      Agbo is a general term in Yoruba culture for traditional herbal concoctions, typically consumed for medicinal purposes. It is a vital part of traditional African medicine and is prepared by boiling various roots, leaves, barks, and other plant parts in water to extract their medicinal properties.

      The specific ingredients in Agbo vary widely depending on the ailment it is intended to treat. Common uses include managing fever, stomach upsets, malaria, infections, and even for general well-being or cleansing. While some Agbo preparations can be quite bitter or pungent, they are highly regarded for their natural healing abilities within traditional beliefs.

      Agbo is a testament to the extensive knowledge of local flora and its medicinal applications that has been passed down through generations. It represents a holistic approach to health and wellness deeply rooted in Yoruba cultural practices.
    `,
    ingredients: [
      "Assorted medicinal roots, barks, and leaves (e.g., neem leaves, dongoyaro bark, lemon grass, ginger, garlic, various tree barks specific to ailment)",
      "Water",
    ],
    instructions: [
      "Gather the desired assortment of medicinal roots, barks, and leaves. Ensure they are properly identified and cleaned.",
      "Wash the plant materials thoroughly to remove dirt.",
      "Place the clean ingredients in a large, clean pot.",
      "Add enough water to generously cover all the plant materials.",
      "Bring the water to a boil, then reduce heat to a simmer.",
      "Allow the mixture to simmer for 30-60 minutes, or until the liquid has changed color and the essence of the herbs is fully extracted. The longer it simmers, the stronger the concoction.",
      "Remove from heat and allow to cool completely.",
      "Strain the Agbo through a fine sieve or cheesecloth to separate the liquid from the plant materials. Discard the solids.",
      "Store the Agbo liquid in a clean, airtight container in a cool place or refrigerator. It is usually consumed in small doses as prescribed by traditional healers.",
      "Consult a qualified traditional practitioner for specific uses and dosages.",
    ],
    nutritionalInfo: {
      calories: "Varies (negligible if water-based)",
      protein: "0g",
      carbs: "0g",
      fat: "0g",
      fiber: "0g",
    },
    culturalSignificance:
      "Agbo is a cornerstone of traditional Yoruba healing practices, symbolizing indigenous knowledge, ancestral wisdom, and a holistic approach to health. Its widespread use reflects a strong cultural belief in the efficacy of natural remedies. The preparation and administration of Agbo are often shrouded in traditional rituals and knowledge passed down through generations, making it a powerful symbol of cultural resilience and identity.",
    image: "https://image.api.sportal365.com/process/smp-images-production/pulse.ng/09082024/78ee3e25-23f7-4365-ad54-140ffb2afde2?operations=autocrop(1042:580)",
    videoId: "YCeU6zPgTuo",
  },
  // --- Missing Festival Foods ---
  asun: {
    name: "Asun",
    description: "Spicy grilled goat meat, a popular party and street food",
    longDescription: `
      Asun is a highly sought-after Nigerian delicacy, particularly popular among the Yoruba people. It consists of grilled or roasted goat meat, cut into bite-sized pieces, generously spiced with scotch bonnet peppers, onions, and various aromatic spices. The key to authentic Asun is its smoky flavor, often achieved by grilling or roasting the meat over an open flame or in an oven.

      The preparation involves boiling the goat meat until tender, then grilling or roasting it until slightly charred and crispy. After grilling, the meat is tossed in a fiery, vibrant sauce made from blended peppers, onions, and a medley of seasonings.

      Asun is a staple at Nigerian parties, gatherings, and ceremonies, often served as an appetizer or a finger food. Its irresistible combination of tender meat, smoky flavor, and intense spice makes it a crowd-pleaser and a true representation of Nigerian celebratory cuisine.
    `,
    ingredients: [
      "2 pounds goat meat, cut into bite-sized pieces",
      "2-3 large scotch bonnet peppers (ata rodo), minced or blended",
      "1 large onion, chopped or sliced thinly",
      "1/4 cup vegetable oil (optional, for tossing after grilling)",
      "1 seasoning cube",
      "Salt to taste",
      "Dried thyme (optional)",
      "Curry powder (optional)",
      "Water for boiling",
    ],
    instructions: [
      "Wash the goat meat thoroughly. Season with salt, seasoning cube, and a pinch of thyme/curry powder if desired. Add a small amount of water (just enough to cook the meat) and boil until tender.",
      "Once tender, drain the meat and arrange on a baking tray or grilling rack.",
      "Grill or roast the goat meat in a preheated oven (around 200°C/400°F) or on a grill until it's slightly charred and crispy on the edges, and has a smoky flavor. Turn occasionally for even browning. This can take 20-30 minutes.",
      "While the meat is grilling, prepare the sauce: In a pan, heat a small amount of vegetable oil (if using). Add the minced/blended scotch bonnet peppers and chopped onions. Sauté for 3-5 minutes until fragrant.",
      "Season the pepper mixture with a little salt and seasoning cube. If you didn't use oil, simply mix the peppers and onions in a bowl.",
      "Once the grilled goat meat is ready, add it to the pan with the pepper mixture (or transfer to the bowl with the raw pepper mix). Toss vigorously to ensure the meat is well coated with the spicy sauce.",
      "Serve hot as an appetizer or side dish.",
    ],
    nutritionalInfo: {
      calories: "350 per serving",
      protein: "30g",
      carbs: "5g",
      fat: "20g",
      fiber: "1g",
    },
    culturalSignificance:
      "Asun is a quintessential Nigerian party food, symbolizing celebration, indulgence, and communal enjoyment. It's often the star appetizer at social gatherings, weddings, and special events, representing the vibrant and spicy flavors that define Nigerian cuisine. The sharing of Asun signifies merriment and hospitality, deeply embedded in the social fabric of celebrations.",
    image: "https://lowcarbafrica.com/wp-content/uploads/2019/09/Asun-recipe-IG-1.jpg",
    videoId: "iM6rU990DFA",
  },
  ipekere: {
    name: "Ipekere",
    description: "Nigerian plantain chips, crispy and often spiced",
    longDescription: `
      Ipekere, commonly known as Nigerian Plantain Chips, are a popular crunchy snack made from thinly sliced unripe or ripe plantains, deep-fried until golden and crispy. They are a staple street food and a favorite homemade snack across Nigeria.

      Depending on the ripeness of the plantain, Ipekere can be savory (from unripe plantains, often lightly salted) or subtly sweet (from ripe plantains). Some variations also include a touch of spice, like chili powder, for an added kick. The key to their appeal is the satisfying crunch and the distinct flavor of plantain.

      Ipekere is a versatile snack, perfect for munching on its own, accompanying a meal, or as a quick bite on the go. They are often sold in small transparent bags by street vendors and at local markets, making them easily accessible and a beloved everyday treat.
    `,
    ingredients: [
      "3-4 unripe or semi-ripe plantains",
      "Vegetable oil for deep frying",
      "Salt to taste (for savory version)",
      "Optional: pinch of chili powder, sugar for sweet version",
    ],
    instructions: [
      "Peel the plantains. For unripe plantains, make a shallow slit along the skin and peel carefully. For ripe plantains, it's easier to peel.",
      "Slice the plantains very thinly. You can use a mandoline slicer for uniform, thin slices, or a sharp knife. The thinner the slices, the crispier the chips.",
      "If making savory chips, sprinkle the sliced plantains lightly with salt and toss to coat.",
      "Heat vegetable oil in a deep pot or frying pan over medium-high heat (around 325-350°F / 160-175°C). Ensure enough oil for deep frying.",
      "Carefully add the plantain slices to the hot oil in batches, being careful not to overcrowd the pot. Overcrowding will make them soggy.",
      "Fry, stirring occasionally to prevent sticking and ensure even browning. Fry until golden brown and very crispy. This usually takes 5-8 minutes per batch.",
      "Remove the Ipekere with a slotted spoon and place on a wire rack lined with paper towels to drain excess oil.",
      "If making sweet version, you can lightly dust with sugar immediately after frying while still hot. If making spicy, sprinkle with chili powder.",
      "Allow to cool completely before storing in an airtight container to maintain crispness.",
    ],
    nutritionalInfo: {
      calories: "200 per serving (approx. 1 cup)",
      protein: "1g",
      carbs: "30g",
      fat: "10g",
      fiber: "2g",
    },
    culturalSignificance:
      "Ipekere (plantain chips) is a quintessential Nigerian snack, symbolizing the widespread use and versatility of plantain in local cuisine. It's a popular street food and a common sight at social gatherings, embodying casual enjoyment and accessible comfort. Its presence reflects the ingenuity of transforming simple agricultural produce into a universally loved and crunchy treat.",
    image: "https://pan-african.net/wp-content/uploads/2021/04/Plantain-chips-768x512.jpg",
    videoId: "9AxWnAQiK4A",
  },
  adun: {
    name: "Adun",
    description: "Traditional coconut candy, sweet and chewy",
    longDescription: `
      Adun, or Coconut Candy, is a classic Nigerian sweet treat popular in various parts of the country. It's a simple yet delicious confection made primarily from freshly grated coconut and sugar, cooked down until thickened and then allowed to set into chewy or crunchy pieces.

      The preparation involves cooking grated coconut with sugar (and sometimes a touch of vanilla or other flavorings) over heat until the mixture caramelizes and thickens. It's then spread out and cut into desired shapes before cooling. The texture can vary from chewy to brittle, depending on how long it's cooked.

      Adun is a beloved homemade snack and a common offering at celebrations and as a simple dessert. It showcases the abundance of coconuts in coastal regions and the creative ways they are incorporated into local treats, providing a sweet burst of tropical flavor.
    `,
    ingredients: [
      "2 cups freshly grated coconut",
      "1 cup granulated sugar (or more, to taste)",
      "1/2 cup water",
      "1/2 teaspoon vanilla extract (optional)",
      "Pinch of salt",
    ],
    instructions: [
      "In a clean, heavy-bottomed pot or saucepan, combine the sugar and water. Place over medium heat and stir until the sugar dissolves completely.",
      "Bring the sugar syrup to a boil, then add the freshly grated coconut. Reduce the heat to medium-low.",
      "Stir continuously to prevent the coconut from burning and to ensure it absorbs the syrup evenly. Continue cooking and stirring.",
      "As the mixture cooks, it will start to thicken and become sticky. The coconut will turn slightly translucent. Continue stirring until the mixture is very thick and almost dry, and the sugar starts to crystallize around the coconut. This can take 15-25 minutes.",
      "If using, stir in the vanilla extract and salt during the last few minutes of cooking.",
      "Once the mixture is thick and sticky and pulls away from the sides of the pot, remove from heat.",
      "Quickly spoon the hot mixture onto a parchment-lined baking sheet or a greased flat surface. Spread it evenly to your desired thickness.",
      "While still warm, use a greased knife or pastry cutter to cut the mixture into squares, rectangles, or diamond shapes.",
      "Allow the Adun to cool completely and harden before breaking apart and storing in an airtight container.",
    ],
    nutritionalInfo: {
      calories: "120 per serving (2 pieces)",
      protein: "1g",
      carbs: "20g",
      fat: "5g",
      fiber: "1g",
    },
    culturalSignificance:
      "Adun (Coconut Candy) is a nostalgic and cherished sweet treat in Nigeria, symbolizing simplicity and the joy of homemade confections. It's a common offering to guests, particularly during festive seasons, embodying hospitality and the sweetness of shared moments. The use of coconut highlights the country's tropical abundance and its traditional methods of transforming natural ingredients into delightful snacks.",
    image: "https://9jafoodie.com/wp-content/uploads/2013/01/Aadun-600x398.jpg",
    videoId: "-Xr_I8-2jyY",
  },
  kilishi: {
    name: "Kilishi",
    description: "Spiced dried meat, a popular Nigerian jerky",
    longDescription: `
      Kilishi is a popular spicy dried meat snack originating from Northern Nigeria, particularly among the Hausa people. It's essentially a form of jerky, but distinctively prepared by thinly slicing beef, lamb, or goat meat, coating it generously with a paste made from peanuts (groundnuts), spices (like ginger, garlic, cayenne pepper), and then sun-drying or oven-drying it until very dry and crispy.

      The preparation involves a careful process of deboning and slicing the meat thinly, marinating it in the spiced groundnut paste, and then allowing it to dry slowly. The result is a flavorful, chewy, and highly addictive snack with a strong spicy kick and nutty undertones.

      Kilishi is widely consumed as a snack across Nigeria and is a popular item to buy from street vendors, especially in the North. Its long shelf life makes it an ideal travel snack and a common gift. It's a testament to the ingenuity of traditional meat preservation techniques.
    `,
    ingredients: [
      "1 pound lean beef (top round or sirloin), thinly sliced",
      "For the paste:",
      "1/2 cup roasted groundnuts (peanuts), blended into a smooth paste (without oil)",
      "1-2 tablespoons cayenne pepper (ata gun-gun) - adjust to taste",
      "1 tablespoon ground ginger",
      "1 tablespoon garlic powder",
      "1 teaspoon onion powder",
      "1/2 teaspoon salt",
      "1/4 cup water (or meat stock) to form a paste",
    ],
    instructions: [
      "Ensure the beef is sliced very thinly, preferably against the grain. You can slightly freeze the meat to make slicing easier.",
      "Prepare the spice paste: In a bowl, mix the groundnut paste, cayenne pepper, ground ginger, garlic powder, onion powder, and salt. Gradually add water (or meat stock) to form a thick, spreadable paste. It should be thick enough to coat the meat.",
      "Dip each thin slice of beef into the spice paste, ensuring both sides are thoroughly coated. Alternatively, you can lay the slices on a tray and spread the paste over them.",
      "Arrange the coated meat slices on a drying rack or baking sheets lined with parchment paper. Ensure there's space between each slice for air circulation.",
      "Sun-drying method (traditional): Place the racks in a sunny, well-ventilated area, away from dust and insects. Turn the meat every few hours. This can take 2-4 days depending on sun intensity.",
      "Oven-drying method (alternative): Preheat your oven to its lowest setting (around 60-70°C / 140-160°F). Place the racks in the oven and prop the oven door open slightly with a wooden spoon to allow moisture to escape.",
      "Dry in the oven for 4-8 hours, or until the Kilishi is very dry, crisp, and pliable, but not brittle. Flip occasionally.",
      "Once dried, remove from the oven/sun and let cool completely. Store in an airtight container.",
    ],
    nutritionalInfo: {
      calories: "180 per serving (approx. 1 oz)",
      protein: "15g",
      carbs: "5g",
      fat: "10g",
      fiber: "1g",
    },
    culturalSignificance:
      "Kilishi is an iconic snack from Northern Nigeria, symbolizing ingenuity in food preservation and the rich cultural heritage of the Hausa people. It's a testament to traditional culinary methods and the bold flavors characteristic of the region. Kilishi is not just a snack; it's a social item, often shared among friends and family, representing hospitality and the savory delights of Nigerian cuisine.",
    image: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/04/kilishi.jpg",
    videoId: "_uluACxidDk",
  },
  "isu-sisun": {
    name: "Isu Sisun",
    description: "Roasted yam, a traditional Nigerian street food and snack",
    longDescription: `
      Isu Sisun, or Roasted Yam, is a simple yet deeply satisfying traditional snack and street food in Nigeria, particularly popular among the Yoruba people. It involves roasting white yam tubers over an open flame, charcoal grill, or in an oven until the exterior is slightly charred and the interior is soft, tender, and slightly sweet.

      The beauty of Isu Sisun lies in its rustic preparation and wholesome appeal. The direct heat brings out the natural sweetness of the yam and creates a unique smoky flavor. It's often peeled after roasting and served hot.

      Isu Sisun is commonly paired with 'Ata Dindin' (fried pepper sauce), stew, or palm oil with a sprinkle of salt. It's a popular choice for a quick, filling meal or snack, especially when purchased from roadside vendors, embodying the authentic taste of Nigerian street food.
    `,
    ingredients: [
      "1 medium-sized white yam tuber",
      "Salt (optional)",
      "Optional: Palm oil, pepper sauce (Ata Dindin) for serving",
    ],
    instructions: [
      "Peel the yam tuber and cut it into thick, manageable chunks (about 2-3 inches thick). You can also leave it whole if it fits your roasting method.",
      "Wash the yam pieces thoroughly to remove excess starch. Pat dry.",
      "Optional: Lightly rub the yam pieces with a little salt.",
      "Roasting methods:",
      "   Charcoal grill (traditional): Arrange the yam pieces directly on a hot charcoal grill. Turn frequently to ensure even cooking and prevent burning. Roast until the outside is charred in spots and the inside is very tender when pierced with a fork (approx. 20-40 minutes, depending on yam size and heat).",
      "   Oven roasting: Preheat oven to 200°C (400°F). Lightly grease a baking tray. Arrange yam pieces on the tray. Roast for 30-50 minutes, flipping halfway, until golden-brown and tender.",
      "Once roasted, remove from heat. The yam should be soft and slightly caramelized.",
      "Serve hot. Peel the charred skin before eating. Enjoy with palm oil, a sprinkle of salt, or a spicy pepper sauce like Ata Dindin.",
    ],
    nutritionalInfo: {
      calories: "220 per serving",
      protein: "2g",
      carbs: "50g",
      fat: "0.5g",
      fiber: "4g",
    },
    culturalSignificance:
      "Isu Sisun (Roasted Yam) is a cherished traditional snack and street food in Nigeria, symbolizing simplicity, sustenance, and direct connection to agricultural heritage. It's a common sight at local markets and roadside stalls, embodying the authentic flavors of grassroots Nigerian cuisine. Its presence reflects traditional cooking methods and offers a comforting taste of home, making it a beloved, accessible treat for many.",
    image: "https://www.nigeriagalleria.com/Health_Lifestyle/Recipe/Yam/Images/ng-roastedyam.jpg", // Updated with provided link
    videoId: "MvyyqiRQrjg",
  },
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
