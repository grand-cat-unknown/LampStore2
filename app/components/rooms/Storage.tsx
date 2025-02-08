import LampCard from "../LampCard"

const storageLamps = [
  {
    title: "Wandlamp 74403",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74403.jpg",
    showroomId: "1.48",
    price: 79.90,
  },
]

export default function Storage() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      {storageLamps.map((lamp) => (
        <LampCard key={lamp.showroomId} {...lamp} />
      ))}
    </div>
  )
} 