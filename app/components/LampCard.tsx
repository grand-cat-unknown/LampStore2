import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface LampCardProps {
  title: string
  imageUrl: string
  showroomId: string
  price: number
}

export default function LampCard({ imageUrl, showroomId, dimensions, price }: LampCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Lamp ${showroomId}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <CardContent className="p-4">
        <p className="font-semibold text-lg">Showroom ID: {showroomId}</p>
        <p className="text-base text-gray-600">Dimensions: {dimensions}</p>
        <p className="text-xl font-bold mt-2">${price.toFixed(2)}</p>
      </CardContent>
    </Card>
  )
}

