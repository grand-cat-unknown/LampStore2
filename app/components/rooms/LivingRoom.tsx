import LampCard from "../LampCard"

const livingRoomLamps = [
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "LR001",
    dimensions: '18" x 18" x 60"',
    price: 249.99,
  },
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "LR002",
    dimensions: '24" x 24" x 72"',
    price: 399.99,
  },
  {
    imageUrl: "/placeholder.svg?height=800&width=800",
    showroomId: "LR003",
    dimensions: '16" x 16" x 48"',
    price: 179.99,
  },
  // Add more lamps as needed
]

export default function LivingRoom() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      {livingRoomLamps.map((lamp) => (
        <LampCard key={lamp.showroomId} {...lamp} />
      ))}
    </div>
  )
}

