"use client";

import Image from 'next/image';
import Navbar from '@/components/navbar';
import KnifeCard from '@/components/knifecard';
import knives from '@/data/knives.json';
import { useState } from 'react';
import { Knife } from '@/types/knife';

export default function KnifeList() {
  const [selectedKnife, setSelectedKnife] = useState<Knife | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Navbar />
      <h1 className="text-3xl font-bold mb-8 mt-8">Knives for Sale</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {knives.map((knife) => (
          <KnifeCard key={knife.id} knife={knife} onClick={() => setSelectedKnife(knife)} />
        ))}
      </div>

      {selectedKnife && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full border-[0.5px] border-white">
            <Image
              src={selectedKnife.image}
              alt={selectedKnife.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded"
            />
            <h3 className="text-2xl font-semibold mt-4">
              {selectedKnife.name}
            </h3>
            <p>{selectedKnife.description}</p>
            <div className="mt-4">
              <p>Blade Length: {selectedKnife.properties.Length}</p>
              <p>Material: {selectedKnife.properties.Material}</p>
              <p>Handle: {selectedKnife.properties.Handle}</p>
              <p>Price: ${selectedKnife.price}</p>
            </div>
            <button
              onClick={() => setSelectedKnife(null)}
              className="mt-4 bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
            <button
              onClick={() => handleBuyNow(selectedKnife.id)}
              className="mt-4 bg-blue-500 text-white p-2 rounded ml-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
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