import CuisineSearch from "@/components/cuisine-search"
import Image from "next/image"

export default function CuisineFinderPage() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Cuisine Finder</h1>
          <p className="text-muted-foreground mt-2">Discover Yoruba foods and learn about their preparation</p>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-6">
          <Image
            src="https://static.thenounproject.com/png/3381255-200.png"
            alt="Cuisine Finder"
            width={600}
            height={300}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <p className="text-sm">Powered by AI</p>
            </div>
          </div>
        </div>

        <CuisineSearch />
      </div>
    </main>
  )
}
