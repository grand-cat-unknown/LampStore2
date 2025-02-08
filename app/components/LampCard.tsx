import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Star } from "lucide-react"

interface LampCardProps {
  title: string
  imageUrl: string
  showroomId?: string
  price: number
  dimensions?: string
  initialRating?: number
  onRatingChange?: (rating: number) => void
}

export default function LampCard({ 
  title,
  imageUrl, 
  showroomId, 
  dimensions, 
  price, 
  initialRating = 0,
  onRatingChange 
}: LampCardProps) {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = (newRating: number) => {
    setRating(newRating);
    onRatingChange?.(newRating);
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title || `Lamp ${showroomId}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <CardContent className="p-4">
        <p className="font-semibold text-lg">{title}</p>
        {showroomId && <p className="text-sm text-gray-500">Showroom ID: {showroomId}</p>}
        <p className="text-base text-gray-600">Dimensions: {dimensions}</p>
        <p className="text-xl font-bold mt-2">${price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 cursor-pointer ${
                star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

