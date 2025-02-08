import LampCard from "../LampCard"
import { useRatings } from "@/app/hooks/useRatings"

const storageLamps = [
  {
    title: "Wandlamp 74403",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74403.jpg",
    showroomId: "1.48",
    price: 79.90,
  },
]

export default function Storage() {
  const { ratings, updateRating } = useRatings()

  return (
    <div className="rooms-container">
      <h2>Storage</h2>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {storageLamps.map((lamp) => (
          <LampCard 
            key={lamp.title}
            title={lamp.title}
            imageUrl={lamp.imageUrl}
            showroomId={lamp.showroomId}
            price={lamp.price}
            initialRating={ratings[lamp.title] || 0}
            onRatingChange={(rating) => updateRating(lamp.title, rating)}
          />
        ))}
      </div>
    </div>
  )
} 