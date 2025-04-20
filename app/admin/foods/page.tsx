import { getSupabaseServerClient } from "@/lib/supabase"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, Edit, Trash, Star } from "lucide-react"
import Image from "next/image"

export default async function FoodsPage() {
  const supabase = getSupabaseServerClient()
  const { data: foods, error } = await supabase.from("foods").select("*, categories(name)").order("name")

  if (error) {
    console.error("Error fetching foods:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Foods</h2>
        <Link href="/admin/foods/new">
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>

      {foods && foods.length > 0 ? (
        <div className="grid gap-4">
          {foods.map((food: any) => (
            <Card key={food.id} className="overflow-hidden">
              <div className="flex items-center">
                <div className="relative h-16 w-16">
                  <Image
                    src={food.image_url || "/placeholder.svg?height=64&width=64"}
                    alt={food.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{food.name}</h3>
                        {food.featured && <Star className="h-4 w-4 text-amber-500" />}
                      </div>
                      <p className="text-xs text-muted-foreground">{food.categories?.name || "Uncategorized"}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{food.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/admin/foods/${food.id}`}>
                        <Button size="icon" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/foods/${food.id}/delete`}>
                        <Button size="icon" variant="outline" className="text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 border rounded-lg bg-muted/50">
          <p className="text-muted-foreground">No foods found</p>
          <Link href="/admin/foods/new">
            <Button className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Your First Food
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
