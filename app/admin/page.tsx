import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, List, Grid, Database } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <Link href="/admin/categories">
          <Card className="hover:bg-accent transition-colors">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Categories</h2>
                <p className="text-sm text-muted-foreground">Manage food categories</p>
              </div>
              <Grid className="h-6 w-6 text-yoruba-500" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/foods">
          <Card className="hover:bg-accent transition-colors">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Foods</h2>
                <p className="text-sm text-muted-foreground">Manage food items</p>
              </div>
              <List className="h-6 w-6 text-yoruba-500" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/seed">
          <Card className="hover:bg-accent transition-colors">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Seed Database</h2>
                <p className="text-sm text-muted-foreground">Populate with initial data</p>
              </div>
              <Database className="h-6 w-6 text-yoruba-500" />
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <Link href="/admin/categories/new">
          <Button className="w-full justify-start">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Category
          </Button>
        </Link>

        <Link href="/admin/foods/new">
          <Button className="w-full justify-start">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Food
          </Button>
        </Link>
      </div>
    </div>
  )
}
