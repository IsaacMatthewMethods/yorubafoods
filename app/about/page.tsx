import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <h1 className="text-2xl font-bold mb-6">About Yoruba Cuisine</h1>

      <div className="space-y-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Yoruba Cuisine"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="prose dark:prose-invert">
          <p>
            Yoruba cuisine is the cooking tradition of the Yoruba people of West Africa, particularly from Nigeria,
            Benin, and Togo. It features a rich variety of dishes characterized by the use of local ingredients, spices,
            and cooking techniques.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Rich in vegetables, meats, and starches</li>
            <li>Extensive use of palm oil, locust beans, and peppers</li>
            <li>Combination of soups with swallows (starchy accompaniments)</li>
            <li>Diverse cooking methods including boiling, frying, and steaming</li>
          </ul>

          <h2>Cultural Significance</h2>
          <p>
            Food plays a central role in Yoruba culture, from everyday meals to celebrations and religious ceremonies.
            Many dishes have symbolic meanings and are prepared for specific occasions.
          </p>

          <h2>Health Benefits</h2>
          <p>
            Traditional Yoruba cuisine often incorporates a balance of nutrients, with many dishes featuring vegetables,
            lean proteins, and complex carbohydrates. Many traditional ingredients also have medicinal properties
            recognized in Yoruba traditional medicine.
          </p>

          <h2>Regional Variations</h2>
          <p>
            While there are common elements across Yoruba cuisine, regional variations exist based on local ingredients,
            preferences, and influences from neighboring cultures. These variations add to the rich tapestry of Yoruba
            food culture.
          </p>
        </div>
      </div>
    </main>
  )
}
