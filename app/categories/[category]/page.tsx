import FoodCard from "@/components/food-card"
import { notFound } from "next/navigation"

// This would typically come from a database
const categoryData = {
  soups: {
    name: "Soups",
    description: "Traditional Yoruba soups with rich flavors and nutritional benefits",
    items: [
      {
        id: "efo-riro",
        name: "Efo Riro",
        description: "A rich vegetable soup made with spinach, assorted meats, and palm oil",
        image: "https://allnigerianfoods.com/wp-content/uploads/making-efo-riro.jpg",
        videoId: "8yQz6ZqVKpE",
      },
      {
        id: "egusi",
        name: "Egusi",
        description: "Melon seed soup with vegetables, meat, and fish",
        image: "https://i.ibb.co/20MhNr6M/egusi-soup-1-500x500.webp?height=800&width=600",
        videoId: "YQq4ido7lQs",
      },
      {
        id: "ewedu",
        name: "Ewedu",
        description: "Jute leaf soup often served with gbegiri and amala",
        image: "https://allnigerianfoods.com/wp-content/uploads/2015/04/ewedu-soup.jpg",
        videoId: "ogB0JsUyVv8",
      },
      {
        id: "gbegiri",
        name: "Gbegiri",
        description: "Bean soup often paired with ewedu and amala",
        image: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/gbegiri-soup.jpg",
        videoId: "4EgTUHViaRU",
      },
      {
        id: "ila-asepo",
        name: "Ila Asepo",
        description: "Okra soup with assorted meats and fish",
        image: "https://www.myactivekitchen.com/wp-content/uploads/2017/04/stewed-okra-5.jpg",
        videoId: "ZHBaPcJ_C44",
      },
      {
        id: "ogbono",
        name: "Ogbono",
        description: "Draw soup made from ogbono seeds with meat and vegetables",
        image: "https://allnigerianfoods.com/wp-content/uploads/pot-of-ogbono-soup.jpg",
        videoId: "PH-G3ukBbAc",
      },
      {
        id: "obe-ata",
        name: "Obe Ata",
        description: "Pepper soup with palm oil and assorted proteins",
        image:
          "https://www.seriouseats.com/thmb/XWe7TRn7TajCl8Q3t2ItYqfQPec=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__02__20200224-obe-ata-vicky-wasik-23-48ef3dfb1176452f99d4a0c6fbed3e16.jpg",
        videoId: "z6aIG2NL-9Y",
      },
    ],
  },
  swallows: {
    name: "Swallows",
    description: "Starchy accompaniments perfect for enjoying with Yoruba soups",
    items: [
      {
        id: "amala",
        name: "Amala",
        description: "Yam flour swallow with a smooth texture and dark color",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "u8KUUXKZ6Lo",
      },
      {
        id: "eba",
        name: "Eba",
        description: "Garri (cassava) swallow with a slightly sour taste",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "H8cHJ_JK9FA",
      },
      {
        id: "iyan",
        name: "Iyan",
        description: "Pounded yam with a smooth, stretchy texture",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "l35CqPxr9bA",
      },
      {
        id: "fufu",
        name: "Fufu",
        description: "Cassava flour swallow with a soft, doughy consistency",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "RSV698GrFHQ",
      },
      {
        id: "semo",
        name: "Semo",
        description: "Semolina swallow with a light color and smooth texture",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "uuxGrvfLrzI",
      },
      {
        id: "lafun",
        name: "Lafun",
        description: "Cassava flour swallow with a firm texture",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "0xgFYHAfl74",
      },
    ],
  },
  "rice-dishes": {
    name: "Rice Dishes",
    description: "Flavorful rice preparations that showcase Yoruba culinary expertise",
    items: [
      {
        id: "jollof-rice",
        name: "Jollof Rice",
        description: "Spicy tomato rice dish popular throughout West Africa",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "TLjSBq-vt-I",
      },
      {
        id: "fried-rice",
        name: "Fried Rice",
        description: "Vegetable rice dish with a colorful appearance",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "xGLN5zSJyw0",
      },
      {
        id: "ofada-rice",
        name: "Ofada Rice",
        description: "Local rice with spicy sauce and assorted meats",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "yRRxo-z4NWI",
      },
      {
        id: "tuwo-shinkafa",
        name: "Tuwo Shinkafa",
        description: "Rice pudding often served with soups",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "BKUgOBK_ii8",
      },
      {
        id: "coconut-rice",
        name: "Coconut Rice",
        description: "Rice cooked with coconut milk and spices",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "CHYTUzyhgbE",
      },
    ],
  },
  snacks: {
    name: "Snacks",
    description: "Delicious small bites and pastries for any time of day",
    items: [
      {
        id: "puff-puff",
        name: "Puff Puff",
        description: "Deep-fried dough balls with a sweet taste",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "TEDlOe8Qob4",
      },
      {
        id: "akara",
        name: "Akara",
        description: "Bean cakes made from peeled beans and spices",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "A5bu-XE53es",
      },
      {
        id: "moin-moin",
        name: "Moin Moin",
        description: "Steamed bean pudding with peppers and spices",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "JMWHSmMPQTI",
      },
      {
        id: "chin-chin",
        name: "Chin Chin",
        description: "Fried pastry snack with a crunchy texture",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "Ru7avaYvdfI",
      },
      {
        id: "dundu",
        name: "Dundu",
        description: "Fried yam cubes often served with pepper sauce",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "5YrkaGJ32H0",
      },
      {
        id: "ojojo",
        name: "Ojojo",
        description: "Water yam fritters with a crispy exterior",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "v27D8TfLkmU",
      },
      {
        id: "kokoro",
        name: "Kokoro",
        description: "Crunchy corn snack with a slightly sweet taste",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "2EQAraMuRMw",
      },
      {
        id: "aadun",
        name: "Aadun",
        description: "Cornmeal cakes with palm oil and spices",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "C1e4RdA0iHw",
      },
    ],
  },
  drinks: {
    name: "Drinks",
    description: "Traditional beverages that complement Yoruba meals perfectly",
    items: [
      {
        id: "zobo",
        name: "Zobo",
        description: "Hibiscus drink with a tart, refreshing flavor",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "2Ioc_LU2HM0",
      },
      {
        id: "kunu",
        name: "Kunu",
        description: "Millet drink with a smooth, creamy texture",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "zFjnllqMCbk",
      },
      {
        id: "fura-da-nono",
        name: "Fura da Nono",
        description: "Millet balls with yogurt and spices",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "0_kWAVqGkF0",
      },
      {
        id: "palm-wine",
        name: "Palm Wine",
        description: "Traditional fermented palm sap with a sweet taste",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "gFNDtYZnl74",
      },
      {
        id: "agbo",
        name: "Agbo",
        description: "Herbal drink with medicinal properties",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "YCeU6zPgTuo",
      },
    ],
  },
  "festival-foods": {
    name: "Festival Foods",
    description: "Special dishes prepared for celebrations and cultural events",
    items: [
      {
        id: "asun",
        name: "Asun",
        description: "Spicy grilled goat meat with peppers and onions",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "iM6rU990DFA",
      },
      {
        id: "ipekere",
        name: "Ipekere",
        description: "Plantain chips with a crispy texture",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "9AxWnAQiK4A",
      },
      {
        id: "adun",
        name: "Adun",
        description: "Coconut candy with a sweet, tropical flavor",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "-Xr_I8-2jyY",
      },
      {
        id: "kilishi",
        name: "Kilishi",
        description: "Spiced dried meat with a chewy texture",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "_uluACxidDk",
      },
      {
        id: "isu-sisun",
        name: "Isu Sisun",
        description: "Roasted yam often served with pepper sauce",
        image: "/placeholder.svg?height=800&width=600",
        videoId: "MvyyqiRQrjg",
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    notFound()
  }

  return (
    <main className="w-full px-4 py-6 mt-16">
      <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
      <p className="text-muted-foreground mb-6">{category.description}</p>

      <div className="grid gap-4">
        {category.items.map((item) => (
          <FoodCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            videoId={item.videoId}
          />
        ))}
      </div>
    </main>
  )
}
