import { getSupabaseServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import FoodForm from "@/components/food-form"

export default async function EditFoodPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient()

  const { data: food, error } = await supabase.from("foods").select("*").eq("id", params.id).single()

  if (error || !food) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <FoodForm initialData={food} isEditing />
    </div>
  )
}
