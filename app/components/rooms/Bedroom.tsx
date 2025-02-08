import LampCard from "../LampCard"
import { useRatings } from "@/app/hooks/useRatings"

const bedroomLamps = [
  {
    title: "Hanglamp 15614",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/15614.jpg",
    showroomId: "0.13",
    price: 229.00,
  },
  {
    title: "Hanglamp 13472",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/13472.jpg",
    showroomId: "1.21",
    price: 159.00,
  },
  {
    title: "Plafondlamp 15382",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/15382.jpg",
    showroomId: "1.08",
    price: 119.00,
  },
  {
    title: "Plafondlamp 74013",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74013.jpg",
    showroomId: "2.18",
    price: 139.00,
  },
  {
    title: "Plafondlamp 11507",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/11507.jpg",
    showroomId: "0.22",
    price: 159.00,
  },
  {
    title: "Plafondlamp 30918",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/30918.jpg",
    price: 89.80,
  },
  {
    title: "Hanglamp 75002",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/75002.jpg",
    showroomId: "0.09",
    price: 299.00,
  },
  {
    title: "Hanglamp 73827",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/73827.jpg",
    showroomId: "2.24",
    price: 99.90,
  },
  {
    title: "Hanglamp 13471",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/13471.jpg",
    showroomId: "1.21",
    price: 259.00,
  },
  {
    title: "Hanglamp 31301",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/31301.jpg",
    price: 114.40,
  },
]

export default function Bedroom() {
  const { ratings, updateRating } = useRatings()

  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      {bedroomLamps.map((lamp) => (
        <LampCard 
          key={lamp.title} 
          {...lamp} 
          initialRating={ratings[lamp.title] || 0}
          onRatingChange={(rating) => updateRating(lamp.title, rating)}
        />
      ))}
    </div>
  )
}

