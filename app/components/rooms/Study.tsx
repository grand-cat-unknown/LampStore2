import LampCard from "../LampCard"
import { useRatings } from "@/app/hooks/useRatings"

const studyLamps = [
  {
    title: "Hanglamp 13671",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/13671.jpg",
    showroomId: "2.27",
    price: 179.00,
  },
  {
    title: "Hanglamp 70598",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/70598.jpg",
    showroomId: "1.09",
    price: 179.00,
  },
  {
    title: "Hanglamp 31499",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/31499.jpg",
    showroomId: "2.05",
    price: 104.40,
  },
  {
    title: "Plafondlamp 74228",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74228.jpg",
    showroomId: "1.42",
    price: 109.00,
  },
  {
    title: "Plafondlamp 74605",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74605.jpg",
    showroomId: "1.37",
    price: 149.00,
  },
  {
    title: "Plafondlamp 13589",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/13589.jpg",
    showroomId: "1.43",
    price: 185.00,
  },
  {
    title: "Plafondlamp 73559",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/73559.jpg",
    showroomId: "1.42",
    price: 119.00,
  },
  {
    title: "Plafondlamp 14260",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/14260.jpg",
    showroomId: "1.43",
    price: 225.00,
  },
]

export default function Study() {
  const { ratings, updateRating } = useRatings()

  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      {studyLamps.map((lamp) => (
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
  )
} 