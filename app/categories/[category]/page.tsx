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
        videoId: "lxCY5fObe30",
      },
      {
        id: "egusi",
        name: "Egusi",
        description: "Melon seed soup with vegetables, meat, and fish",
        image: "https://i.ibb.co/20MhNr6M/egusi-soup-1-500x500.webp?height=800&width=600",
        videoId: "jd0N6D2Tstc", // Updated video ID
      },
      {
        id: "ewedu",
        name: "Ewedu",
        description: "Jute leaf soup often served with gbegiri and amala",
        image: "https://allnigerianfoods.com/wp-content/uploads/2015/04/ewedu-soup.jpg",
        videoId: "Xh2FkIYOq8w", // Updated video ID
      },
      {
        id: "gbegiri",
        name: "Gbegiri",
        description: "Bean soup often paired with ewedu and amala",
        image: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/gbegiri-soup.jpg",
        videoId: "FlZaMMtwgKfJ-f4Q",
      },
      {
        id: "ila-asepo",
        name: "Ila Asepo",
        description: "Okra soup with assorted meats and fish",
        image: "https://www.myactivekitchen.com/wp-content/uploads/2017/04/stewed-okra-5.jpg",
        videoId: "57Gi3VctBkk", // Updated video ID
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
        image: "https://yummieliciouz.com/wp-content/uploads/2023/04/how-to-make-amala-768x512.jpg",
        videoId: "u8KUUXKZ6Lo",
      },
      {
        id: "eba",
        name: "Eba",
        description: "Garri (cassava) swallow with a slightly sour taste",
        image: "https://www.seriouseats.com/thmb/U3lZPxO_i0JElO7mKab094-b0VM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220425-Eba-Maureen-Celestine-16-Step3-1-8cbf0f408804485e9a14a158a32b06c3.JPG",
        videoId: "H8cHJ_JK9FA",
      },
      {
        id: "iyan",
        name: "Iyan",
        description: "Pounded yam with a smooth, stretchy texture",
        image: "https://cheflolaskitchen.com/wp-content/uploads/2019/06/DSC0211-pounded-yam.jpg.webp",
        videoId: "l35CqPxr9bA",
      },
      {
        id: "fufu",
        name: "Fufu",
        description: "Cassava flour swallow with a soft, doughy consistency",
        image: "https://www.africanbites.com/wp-content/uploads/2022/04/Fufu-1.bmp",
        videoId: "RSV698GrFHQ",
      },
      {
        id: "semo",
        name: "Semo",
        description: "Semolina swallow with a light color and smooth texture",
        image: "https://shop.axielle.com.ng/wp-content/uploads/2022/11/P1070100.jpg",
        videoId: "uuxGrvfLrzI",
      },
      {
        id: "lafun",
        name: "Lafun",
        description: "Cassava flour swallow with a firm texture",
        image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/cfc6b66a4bd1cef7adfdbca111d2382d/Derivates/f14c449b43b7f58a48f487edb233c60ba0e5c3fa.jpg",
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
        image: "https://i.pinimg.com/736x/a7/d4/92/a7d492607aab27346744244d02da29b6.jpg",
        videoId: "TLjSBq-vt-I",
      },
      {
        id: "fried-rice",
        name: "Fried Rice",
        description: "Vegetable rice dish with a colorful appearance",
        image: "https://i.pinimg.com/1200x/44/67/f4/4467f46691bf41143404de960757ddbd.jpg",
        videoId: "xGLN5zSJyw0",
      },
      {
        id: "ofada-rice",
        name: "Ofada Rice",
        description: "Local rice with spicy sauce and assorted meats",
        image: "https://i.pinimg.com/736x/90/0a/f2/900af2ced732a9492ced80541d94d705.jpg",
        videoId: "yRRxo-z4NWI",
      },
      {
        id: "tuwo-shinkafa",
        name: "Tuwo Shinkafa",
        description: "Rice pudding often served with soups",
        image: "https://i.pinimg.com/1200x/62/59/2c/62592c26a2180c666fe5eaa86f8249aa.jpg",
        videoId: "BKUgOBK_ii8",
      },
      {
        id: "coconut-rice",
        name: "Coconut Rice",
        description: "Rice cooked with coconut milk and spices",
        image: "https://i.pinimg.com/736x/30/07/41/3007413793be74c835ef5ca9a8fa8141c.jpg",
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
        image: "https://i.pinimg.com/1200x/c3/98/b0/c398b02e7b36efd986be50d3822cbbc5.jpg",
        videoId: "TEDlOe8Qob4",
      },
      {
        id: "akara",
        name: "Akara",
        description: "Bean cakes made from peeled beans and spices",
        image: "https://i.pinimg.com/736x/20/38/fa/2038fa4ed5f75711434ec35b5ec517e6.jpg",
        videoId: "A5bu-XE53es",
      },
      {
        id: "moin-moin",
        name: "Moin Moin",
        description: "Steamed bean pudding with peppers and spices",
        image: "https://i.pinimg.com/1200x/10/8b/49/108b49028e9b0dcd75e1fcc00b7064da.jpg",
        videoId: "JMWHSmMPQTI",
      },
      {
        id: "chin-chin",
        name: "Chin Chin",
        description: "Fried pastry snack with a crunchy texture",
        image: "https://i.pinimg.com/1200x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg",
        videoId: "Ru7avaYvdfI",
      },
      {
        id: "dundu",
        name: "Dundu",
        description: "Fried yam cubes often served with pepper sauce",
        image: "https://i.pinimg.com/1200x/a8/cc/73/a8cc7399bf940740556d74b61319ca52.jpg",
        videoId: "5YrkaGJ32H0",
      },
      {
        id: "ojojo",
        name: "Ojojo",
        description: "Water yam fritters with a crispy exterior",
        image: "https://i.pinimg.com/736x/df/b8/3f/dfb83f71284eff9df9c987440fa3d653.jpg",
        videoId: "v27D8TfLkmU",
      },
      {
        id: "kokoro",
        name: "Kokoro",
        description: "Crunchy corn snack with a slightly sweet taste",
        image: "https://i.pinimg.com/736x/5e/75/01/5e7501f5becb77e171be9953c3a9f1f6.jpg",
        videoId: "2EQAraMuRMw",
      },
      {
        id: "aadun",
        name: "Aadun",
        description: "Cornmeal cakes with palm oil and spices",
        image: "https://9jafoodie.com/wp-content/uploads/2013/01/Aadun-600x398.jpg",
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
        image: "https://i.pinimg.com/1200x/bd/04/ba/bd04baaa32249fdd24afc6514fa8b4d7.jpg",
        videoId: "2Ioc_LU2HM0",
      },
      {
        id: "kunu",
        name: "Kunu",
        description: "Millet drink with a smooth, creamy texture",
        image: "https://i.pinimg.com/736x/1d/1e/0d/1d1e0d05a47f2964dcda615fa8a7de80.jpg",
        videoId: "zFjnllqMCbk",
      },
      {
        id: "fura-da-nono",
        name: "Fura da Nono",
        description: "Millet balls with yogurt and spices",
        image: "https://www.nigeriantravelsmagazine.com/wp-content/uploads/2024/10/Picture4.png",
        videoId: "0_kWAVqGkF0",
      },
      {
        id: "palm-wine",
        name: "Palm Wine",
        description: "Traditional fermented palm sap with a sweet taste",
        image: "https://www.emaketa.com/wp-content/uploads/2025/05/palm-wine.jpg",
        videoId: "gFNDtYZnl74",
      },
      {
        id: "agbo",
        name: "Agbo",
        description: "Herbal drink with medicinal properties",
        image: "https://image.api.sportal365.com/process/smp-images-production/pulse.ng/09082024/78ee3e25-23f7-4365-ad54-140ffb2afde2?operations=autocrop(1042:580)",
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
        image: "https://lowcarbafrica.com/wp-content/uploads/2019/09/Asun-recipe-IG-1.jpg",
        videoId: "iM6rU990DFA",
      },
      {
        id: "ipekere",
        name: "Ipekere",
        description: "Plantain chips with a crispy texture",
        image: "https://pan-african.net/wp-content/uploads/2021/04/Plantain-chips-768x512.jpg",
        videoId: "9AxWnAQiK4A",
      },
      {
        id: "adun",
        name: "Adun",
        description: "Coconut candy with a sweet, tropical flavor",
        image: "https://9jafoodie.com/wp-content/uploads/2013/01/Aadun-600x398.jpg",
        videoId: "-Xr_I8-2jyY",
      },
      {
        id: "kilishi",
        name: "Kilishi",
        description: "Spiced dried meat with a chewy texture",
        image: "https://www.allnigerianrecipes.com/wp-content/uploads/2019/04/kilishi.jpg",
        videoId: "_uluACxidDk",
      },
      {
        id: "isu-sisun",
        name: "Isu Sisun",
        description: "Roasted yam often served with pepper sauce",
        image: "https://www.nigeriagalleria.com/Health_Lifestyle/Recipe/Yam/Images/ng-roastedyam.jpg",
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
