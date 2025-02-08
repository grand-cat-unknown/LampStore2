import LampCard from "../LampCard"

const diningRoomLamps = [
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "DR001",
    dimensions: '20" x 20" x 48"',
    price: 299.99,
  },
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "DR002",
    dimensions: '24" x 24" x 54"',
    price: 349.99,
  },
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "DR003",
    dimensions: '18" x 18" x 42"',
    price: 249.99,
  },
  // Add more lamps as needed
]

export default function DiningRoom() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      {diningRoomLamps.map((lamp) => (
        <LampCard key={lamp.showroomId} {...lamp} />
      ))}
    </div>
  )
}

