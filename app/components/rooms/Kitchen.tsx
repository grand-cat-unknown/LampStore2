import LampCard from "../LampCard"

const kitchenLamps = [
  {
    title: "Hanglamp 74368",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74368.jpg",
    showroomId: "0.16",
    price: 199.00,
  },
  {
    title: "Hanglamp 73604",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/73604.jpg",
    price: 299.00,
  },
  {
    title: "Hanglamp 73957",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/73957.jpg",
    showroomId: "2.14",
    price: 399.00,
  },
  {
    title: "Hanglamp 15248",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/15248.jpg",
    showroomId: "0.45",
    price: 399.00,
  },
  {
    title: "Hanglamp 14332",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/14332.jpg",
    showroomId: "0.02",
    price: 359.00,
  },
  {
    title: "Hanglamp 74544",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/74544.jpg",
    showroomId: "0.34A",
    price: 399.00,
  },
  {
    title: "Hanglamp 13648",
    imageUrl: "https://www.rietveldlicht.nl/fotos/groot/13648.jpg",
    showroomId: "1.13",
    price: 299.00,
  },
]

export default function Kitchen() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      {kitchenLamps.map((lamp) => (
        <LampCard key={lamp.showroomId} {...lamp} />
      ))}
    </div>
  )
} 