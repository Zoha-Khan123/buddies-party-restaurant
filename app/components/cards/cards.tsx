import { cards } from "@/app/data/card";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="max-w-[1200px] mx-auto grid bg-gray grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <div className="space-y-2 p-4 rounded-lg bg-white shadow-md" key={index}>
          {/* Image */}
          <div className="h-[200px]">
            <Image
              src={card.image}
              alt="Image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heading */}
          <h1 className="font-bold text-[#c60a1e] text-lg">{card.heading}</h1>

          {/* Description */}
          <p className="text-sm text-gray-500">{card.description}</p>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <button className="bg-[#c60a1e] hover:bg-[#a80818] cursor-pointer hover:shadow-md text-white font-semibold py-2 px-4 rounded text-sm transition duration-200 w-full">
              View
            </button>
            <button className="bg-[#c60a1e] hover:bg-[#a80818] cursor-pointer hover:shadow-md text-white font-semibold py-2 px-4 rounded text-sm transition duration-200 w-full">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
