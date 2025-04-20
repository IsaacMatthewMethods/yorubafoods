"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  id: string
  name: string
  description: string
  image: string
}

export default function CategoryCard({ id, name, description, image }: CategoryCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Link href={`/categories/${id}`}>
      <Card className="overflow-hidden category-card">
        <div className="relative h-40">
          <Image
            src={imageError ? "/placeholder.svg?height=400&width=200" : image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="font-bold text-xl">{name}</h3>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
