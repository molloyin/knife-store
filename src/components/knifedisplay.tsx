import Image from 'next/image';
import { Knife } from '@/types/knife';

interface KnifeDisplayProps {
  knife: Knife;
}

export default function KnifeDisplay({ knife }: KnifeDisplayProps) {
  return (
    <div className="border-[0.5px] border-white p-5">
      <h2 className="text-2xl font-semibold mb-2">{knife.name}</h2>
      <div className='border-[0.5px] border-flex flex-col md:flex-row'>
        <div className="flex flex-col md:flex-row gap-3">
            {/* Knife Image (View on the left) */}
            <div className="md:w-2/3">
            <div className="border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-white p-4">
                <Image
                src={knife.image}
                alt={knife.name}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
                />
            </div>
            </div>

            {/* Knife Properties (Boxes on the right) */}
            <div className="md:w-1/3 flex flex-col gap-2 pt-1 md:pt-3 pr-3 pl-3 md:pl-0">
            <div className="border-[0.5px] border-white p-2">
                <label className="block font-semibold">Description:</label>
                <p className="text-sm">{knife.description}</p>
            </div>
            {Object.entries(knife.properties).map(([key, value]) => (
                <div key={key} className="border-[0.5px] border-white p-2">
                <label className="block font-semibold capitalize">{key}:</label>
                <p className="text-sm">{value}</p>
                </div>
            ))}
            <div className="border-[0.5px] border-white p-2">
                <label className="block font-semibold">Price:</label>
                <p className="text-sm">${knife.price}</p>
            </div>

            {/* Buy Now Button */}
            <button
                onClick={() => handleBuyNow(knife.id)}
                className="md:mt-auto mt-4 mb-4 bg-neutral-200 text-black p-2 pr-5 pl-5"
                // className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
              Buy Now
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}

async function handleBuyNow(knifeId: string) {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ knifeId }),
  });
  const { url } = await response.json();
  if (url) window.location.href = url;
}