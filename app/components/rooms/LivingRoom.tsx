import LampCard from "../LampCard"

const tableLamps = [
  {
    title: "Spot 72531",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/72531.jpg",
    showroomId: "0.57",
    price: 79.90,
  },
  {
    title: "Railspots 74942",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74942.jpg",
    showroomId: "0.56",
    price: 139.00,
  },
  {
    title: "Spot 74355",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74355.jpg",
    showroomId: "0.49",
    price: 99.90,
  },
]

const standingLamps = [
  {
    title: "Staande lamp 74249",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74249.jpg",
    showroomId: "1.11",
    price: 169.00,
  },
  {
    title: "Staande lamp 14292",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/14292.jpg",
    showroomId: "0.06",
    price: 219.00,
  },
  {
    title: "Staande lamp 74035",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74035.jpg",
    showroomId: "0.19",
    price: 129.90,
  },
  {
    title: "Staande lamp 31083",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/31083.jpg",
    showroomId: "0.37",
    price: 175.90,
  },
]

const couchLamps = [
  {
    title: "Hanglamp 74039",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74039.jpg",
    showroomId: "2.18",
    price: 279.00,
  },
  {
    title: "Hanglamp 73958",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/73958.jpg",
    showroomId: "2.14",
    price: 349.00,
  },
]

export default function LivingRoom() {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-xl font-semibold mb-4">Above Table</h3>
        <div className="grid grid-cols-1 gap-6">
          {tableLamps.map((lamp) => (
            <LampCard key={lamp.showroomId} {...lamp} />
          ))}
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Standing Lamps</h3>
        <div className="grid grid-cols-1 gap-6">
          {standingLamps.map((lamp) => (
            <LampCard key={lamp.showroomId} {...lamp} />
          ))}
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Above Couch</h3>
        <div className="grid grid-cols-1 gap-6">
          {couchLamps.map((lamp) => (
            <LampCard key={lamp.showroomId} {...lamp} />
          ))}
        </div>
      </section>
    </div>
  )
} 