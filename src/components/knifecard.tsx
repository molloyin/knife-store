// components/KnifeCard.tsx
import Image from 'next/image';
import { Knife } from '../types/knife';

interface KnifeCardProps {
  knife: Knife;
  onClick: () => void;
}

export default function KnifeCard({ knife, onClick }: KnifeCardProps) {
  return (
    <div
      className="bg-gray-900 p-4 rounded-lg cursor-pointer hover:bg-gray-800 border-[0.5px] border-white"
      onClick={onClick}
    >
      <Image
        src={knife.image}
        alt={knife.name}
        width={300}
        height={300}
        className="w-full h-auto object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-2">{knife.name}</h3>
      <p>${knife.price}</p>
    </div>
  );
}