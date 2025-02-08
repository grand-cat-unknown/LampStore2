import LampCard from "../LampCard"

const bedroomLamps = [
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "BR001",
    dimensions: '12" x 12" x 36"',
    price: 129.99,
  },
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "BR002",
    dimensions: '14" x 14" x 42"',
    price: 159.99,
  },
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "BR003",
    dimensions: '10" x 10" x 30"',
    price: 99.99,
  },
  // Add more lamps as needed
]

export default function Bedroom() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      {bedroomLamps.map((lamp) => (
        <LampCard key={lamp.showroomId} {...lamp} />
      ))}
    </div>
  )
}

