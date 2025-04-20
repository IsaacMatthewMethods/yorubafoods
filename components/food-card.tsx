"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import VideoModal from "./video-modal"

interface FoodCardProps {
  id: string
  name: string
  description: string
  image: string
  videoId?: string
}

export default function FoodCard({ id, name, description, image, videoId }: FoodCardProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <>
      <Card className="overflow-hidden category-card">
        <div className="relative">
          <Image
            src={
              imageError ? "/placeholder.svg?height=400&width=200" : image || "/placeholder.svg?height=400&width=200"
            }
            alt={name}
            width={400}
            height={200}
            className="food-card-image"
            onError={handleImageError}
          />
          {videoId && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-3 right-3 rounded-full bg-black/70 hover:bg-black text-white"
              onClick={() => setShowVideo(true)}
            >
              <Play className="h-5 w-5" />
            </Button>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link href={`/food/${id}`} className="w-full">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {showVideo && videoId && <VideoModal videoId={videoId} onClose={() => setShowVideo(false)} />}
    </>
  )
}
