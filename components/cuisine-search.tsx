"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { searchCuisine } from "@/app/actions/search-actions"
import { Loader2, Search, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

// Food image mapping with reliable placeholder images
const foodImages: Record<string, string> = {
  amala: "/placeholder.svg?height=800&width=600",
  "efo riro": "/placeholder.svg?height=800&width=600",
  "jollof rice": "/placeholder.svg?height=800&width=600",
  egusi: "/placeholder.svg?height=800&width=600",
  "pounded yam": "/placeholder.svg?height=800&width=600",
  "moin moin": "/placeholder.svg?height=800&width=600",
  eba: "/placeholder.svg?height=800&width=600",
  akara: "/placeholder.svg?height=800&width=600",
  ewedu: "/placeholder.svg?height=800&width=600",
  gbegiri: "/placeholder.svg?height=800&width=600",
  default: "/placeholder.svg?height=800&width=600",
}

// Helper function to find the best matching image
const findFoodImage = (foodName: string): string => {
  const lowerName = foodName.toLowerCase()

  // Check for exact matches first
  if (foodImages[lowerName]) {
    return foodImages[lowerName]
  }

  // Check for partial matches
  for (const [key, url] of Object.entries(foodImages)) {
    if (lowerName.includes(key) || key.includes(lowerName)) {
      return url
    }
  }

  // Return default image if no match found
  return foodImages.default
}

export default function CuisineSearch() {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await searchCuisine(query)
      setResult(response)
      // Automatically expand the ingredients section
      setExpandedSection("ingredients")
    } catch (error) {
      console.error("Search failed:", error)
      setError("Sorry, there was an error processing your request. Please try again.")
      setResult("")
    } finally {
      setIsLoading(false)
    }
  }

  // Parse the result into sections
  const parseResult = () => {
    if (!result) return null

    try {
      // Extract the food name (first line)
      const lines = result.split("\n")
      const name = lines[0].trim()

      // Find the image for this food
      const imageUrl = findFoodImage(name)

      // Extract sections
      const sections: Record<string, string[]> = {}
      let currentSection = ""
      let sectionContent: string[] = []

      lines.slice(1).forEach((line) => {
        const trimmedLine = line.trim()
        if (!trimmedLine) return

        // Check if this line is a section header
        const sectionMatch = trimmedLine.match(
          /^(Description|Ingredients|Preparation|Cultural Significance|Nutritional Information):/i,
        )

        if (sectionMatch) {
          // Save previous section
          if (currentSection && sectionContent.length) {
            sections[currentSection.toLowerCase()] = sectionContent
          }

          // Start new section
          currentSection = sectionMatch[1]
          sectionContent = []
        } else if (currentSection) {
          // Add content to current section
          sectionContent.push(trimmedLine)
        }
      })

      // Save the last section
      if (currentSection && sectionContent.length) {
        sections[currentSection.toLowerCase()] = sectionContent
      }

      return { name, imageUrl, sections }
    } catch (parseError) {
      console.error("Error parsing result:", parseError)
      setError("Error parsing the search result. Please try again.")
      return null
    }
  }

  const parsedResult = parseResult()

  return (
    <div className="space-y-6 pb-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for a Yoruba food..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-full pl-10 pr-4 h-12"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Button type="submit" className="w-full rounded-full h-12" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
      </form>

      {error && <div className="p-4 bg-destructive/10 text-destructive rounded-lg">{error}</div>}

      {parsedResult && (
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={parsedResult.imageUrl || "/placeholder.svg?height=800&width=600"}
              alt={parsedResult.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h2 className="text-xl font-bold">{parsedResult.name}</h2>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="space-y-4">
              {/* Description Section */}
              {parsedResult.sections.description && (
                <div>
                  <p>{parsedResult.sections.description.join(" ")}</p>
                </div>
              )}

              {/* Ingredients Section */}
              {parsedResult.sections.ingredients && (
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection("ingredients")}
                    className="flex w-full justify-between items-center px-0 font-semibold text-lg"
                  >
                    <span>Ingredients</span>
                    {expandedSection === "ingredients" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>

                  {expandedSection === "ingredients" && (
                    <div className="mt-2 pl-4 border-l-2 border-yoruba-200 dark:border-yoruba-800">
                      <ul className="space-y-1">
                        {parsedResult.sections.ingredients.map((ingredient, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-yoruba-500 mt-2 mr-2"></span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Preparation Section */}
              {parsedResult.sections.preparation && (
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection("preparation")}
                    className="flex w-full justify-between items-center px-0 font-semibold text-lg"
                  >
                    <span>Preparation</span>
                    {expandedSection === "preparation" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>

                  {expandedSection === "preparation" && (
                    <div className="mt-2 pl-4 border-l-2 border-yoruba-200 dark:border-yoruba-800">
                      <ol className="space-y-2">
                        {parsedResult.sections.preparation.map((step, idx) => {
                          // Try to extract step number if present
                          const stepMatch = step.match(/^(\d+)\.\s*(.*)/)
                          const stepContent = stepMatch ? stepMatch[2] : step
                          const stepNumber = stepMatch ? stepMatch[1] : (idx + 1).toString()

                          return (
                            <li key={idx} className="flex items-start">
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yoruba-500 text-white text-sm font-medium mr-3 shrink-0">
                                {stepNumber}
                              </span>
                              <span>{stepContent}</span>
                            </li>
                          )
                        })}
                      </ol>
                    </div>
                  )}
                </div>
              )}

              {/* Cultural Significance Section */}
              {parsedResult.sections["cultural significance"] && (
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection("cultural")}
                    className="flex w-full justify-between items-center px-0 font-semibold text-lg"
                  >
                    <span>Cultural Significance</span>
                    {expandedSection === "cultural" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>

                  {expandedSection === "cultural" && (
                    <div className="mt-2">
                      <p>{parsedResult.sections["cultural significance"].join(" ")}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Nutritional Information Section */}
              {parsedResult.sections["nutritional information"] && (
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection("nutritional")}
                    className="flex w-full justify-between items-center px-0 font-semibold text-lg"
                  >
                    <span>Nutritional Information</span>
                    {expandedSection === "nutritional" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>

                  {expandedSection === "nutritional" && (
                    <div className="mt-2">
                      <p>{parsedResult.sections["nutritional information"].join(" ")}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
