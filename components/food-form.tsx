"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Plus, Trash } from "lucide-react"
import { getSupabaseBrowserClient, type Category, type Food } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FoodFormProps {
  initialData?: Food
  isEditing?: boolean
}

export default function FoodForm({ initialData, isEditing = false }: FoodFormProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [name, setName] = useState(initialData?.name || "")
  const [slug, setSlug] = useState(initialData?.slug || "")
  const [description, setDescription] = useState(initialData?.description || "")
  const [longDescription, setLongDescription] = useState(initialData?.long_description || "")
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || "")
  const [videoId, setVideoId] = useState(initialData?.video_id || "")
  const [categoryId, setCategoryId] = useState(initialData?.category_id || "")
  const [featured, setFeatured] = useState(initialData?.featured || false)
  const [culturalSignificance, setCulturalSignificance] = useState(initialData?.cultural_significance || "")

  // Ingredients and instructions as arrays
  const [ingredients, setIngredients] = useState<string[]>(initialData?.ingredients || [""])
  const [instructions, setInstructions] = useState<string[]>(initialData?.instructions || [""])

  // Nutritional info
  const [calories, setCalories] = useState(initialData?.nutritional_info?.calories || "")
  const [protein, setProtein] = useState(initialData?.nutritional_info?.protein || "")
  const [carbs, setCarbs] = useState(initialData?.nutritional_info?.carbs || "")
  const [fat, setFat] = useState(initialData?.nutritional_info?.fat || "")
  const [fiber, setFiber] = useState(initialData?.nutritional_info?.fiber || "")

  const [isLoading, setIsLoading] = useState(false)
  const [isFetchingCategories, setIsFetchingCategories] = useState(true)

  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase.from("categories").select("*").order("name")

        if (error) throw error

        setCategories(data || [])
      } catch (error) {
        console.error("Error fetching categories:", error)
        toast({
          title: "Error",
          description: "Failed to load categories. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsFetchingCategories(false)
      }
    }

    fetchCategories()
  }, [supabase])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
    // Only update slug if it hasn't been manually edited or we're creating a new food
    if (!isEditing || slug === initialData?.slug) {
      setSlug(
        value
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, ""),
      )
    }
  }

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""])
  }

  const handleRemoveIngredient = (index: number) => {
    if (ingredients.length > 1) {
      const newIngredients = [...ingredients]
      newIngredients.splice(index, 1)
      setIngredients(newIngredients)
    }
  }

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...instructions]
    newInstructions[index] = value
    setInstructions(newInstructions)
  }

  const handleAddInstruction = () => {
    setInstructions([...instructions, ""])
  }

  const handleRemoveInstruction = (index: number) => {
    if (instructions.length > 1) {
      const newInstructions = [...instructions]
      newInstructions.splice(index, 1)
      setInstructions(newInstructions)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Filter out empty ingredients and instructions
    const filteredIngredients = ingredients.filter((item) => item.trim() !== "")
    const filteredInstructions = instructions.filter((item) => item.trim() !== "")

    const foodData = {
      name,
      slug,
      description,
      long_description: longDescription,
      image_url: imageUrl || null,
      video_id: videoId || null,
      category_id: categoryId || null,
      featured,
      cultural_significance: culturalSignificance || null,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
      nutritional_info: {
        calories,
        protein,
        carbs,
        fat,
        fiber,
      },
      updated_at: new Date().toISOString(),
    }

    try {
      let error

      if (isEditing && initialData) {
        // Update existing food
        const response = await supabase.from("foods").update(foodData).eq("id", initialData.id)

        error = response.error
      } else {
        // Create new food
        const response = await supabase.from("foods").insert({
          ...foodData,
          created_at: new Date().toISOString(),
        })

        error = response.error
      }

      if (error) throw error

      toast({
        title: isEditing ? "Food updated" : "Food created",
        description: isEditing ? "The food has been updated successfully." : "The food has been created successfully.",
      })

      router.push("/admin/foods")
      router.refresh()
    } catch (error) {
      console.error("Error saving food:", error)
      toast({
        title: "Error",
        description: `Failed to ${isEditing ? "update" : "create"} food. Please try again.`,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isFetchingCategories) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Food" : "Add New Food"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <Input
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                className="w-full"
                placeholder="Food name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="slug" className="text-sm font-medium">
                Slug *
              </label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
                className="w-full"
                placeholder="food-slug"
              />
              <p className="text-xs text-muted-foreground">
                Used for URLs. Only use lowercase letters, numbers, and hyphens.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Short Description *
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full"
                placeholder="Brief description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="longDescription" className="text-sm font-medium">
                Long Description
              </label>
              <Textarea
                id="longDescription"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                className="w-full"
                placeholder="Detailed description"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="imageUrl" className="text-sm font-medium">
                Image URL
              </label>
              <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="videoId" className="text-sm font-medium">
                YouTube Video ID
              </label>
              <Input
                id="videoId"
                value={videoId}
                onChange={(e) => setVideoId(e.target.value)}
                className="w-full"
                placeholder="dQw4w9WgXcQ"
              />
              <p className="text-xs text-muted-foreground">
                The ID from the YouTube URL (e.g., dQw4w9WgXcQ from https://www.youtube.com/watch?v=dQw4w9WgXcQ)
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={featured}
                onCheckedChange={(checked) => setFeatured(checked as boolean)}
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Featured on homepage
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Ingredients</h3>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveIngredient(index)}
                  disabled={ingredients.length <= 1}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={handleAddIngredient} className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Ingredient
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Instructions</h3>
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-yoruba-500 text-white text-sm font-medium mt-2">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <Textarea
                    value={instruction}
                    onChange={(e) => handleInstructionChange(index, e.target.value)}
                    placeholder={`Step ${index + 1}`}
                    className="w-full"
                    rows={2}
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveInstruction(index)}
                  disabled={instructions.length <= 1}
                  className="mt-2"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={handleAddInstruction} className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Instruction
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Nutritional Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="calories" className="text-sm font-medium">
                  Calories
                </label>
                <Input
                  id="calories"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="e.g., 320 per serving"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="protein" className="text-sm font-medium">
                  Protein
                </label>
                <Input
                  id="protein"
                  value={protein}
                  onChange={(e) => setProtein(e.target.value)}
                  placeholder="e.g., 18g"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="carbs" className="text-sm font-medium">
                  Carbs
                </label>
                <Input id="carbs" value={carbs} onChange={(e) => setCarbs(e.target.value)} placeholder="e.g., 12g" />
              </div>
              <div className="space-y-2">
                <label htmlFor="fat" className="text-sm font-medium">
                  Fat
                </label>
                <Input id="fat" value={fat} onChange={(e) => setFat(e.target.value)} placeholder="e.g., 24g" />
              </div>
              <div className="space-y-2">
                <label htmlFor="fiber" className="text-sm font-medium">
                  Fiber
                </label>
                <Input id="fiber" value={fiber} onChange={(e) => setFiber(e.target.value)} placeholder="e.g., 5g" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Cultural Significance</h3>
            <div className="space-y-2">
              <Textarea
                id="culturalSignificance"
                value={culturalSignificance}
                onChange={(e) => setCulturalSignificance(e.target.value)}
                className="w-full"
                placeholder="Cultural significance of this food..."
                rows={3}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : isEditing ? (
                "Update Food"
              ) : (
                "Save Food"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
