import LampCard from "../LampCard"

const toiletLamps = [
  {
    title: "Wandlamp 74532",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74532.jpg",
    showroomId: "1.29",
    price: 99.90,
  },
  {
    title: "Spot 73235",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/73235.jpg",
    showroomId: "0.48",
    price: 69.90,
  },
  {
    title: "Wandlamp 74698",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74698.jpg",
    showroomId: "1.45",
    price: 59.90,
  },
  {
    title: "Wandlamp 74633",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74633.jpg",
    showroomId: "1.35",
    price: 79.90,
  },
  {
    title: "Wandlamp 74951",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74951.jpg",
    showroomId: "2.76",
    price: 59.90,
  },
]

export default function Toilet() {
  return (
    <div className="room toilet">
      <h2>Toilet</h2>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {toiletLamps.map((lamp) => (
          <LampCard key={lamp.showroomId} {...lamp} />
        ))}
      </div>
    </div>
  )
} 