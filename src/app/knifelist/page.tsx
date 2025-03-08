"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Knife } from '@/types/knife'; 
import knives from '@/data/knives.json'; 
import KnifeDisplayPopup from '@/components/knifedisplaypopup'; 
import Navbar from '@/components/navbar'; 
import Footer from '@/components/footer';

export default function KnifeList() {
  const [selectedKnife, setSelectedKnife] = useState<Knife | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />
        {/* Responsive Grid for Knifecards */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {knives.map((knife) => (
            <div
              key={knife.id}
              className="border-[0.5px] border-white p-4 rounded-sm cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedKnife(knife)}
            >
              {/* Knife Image */}
              <Image
                src={knife.images[0]}
                alt={knife.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-sm border-[0.5px] border-black"
              />
              {/* Knife Name */}
              <h3 className="text-xl font-semibold mt-2">{knife.name}</h3>
              {/* Knife Price */}
              <p className="text-sm">${knife.price}</p>
            </div>
          ))}
        </div>

        {/* Popup for Knifedisplay */}
        {selectedKnife && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2">
            <div className="relative bg-black md:max-w-3xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedKnife(null)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                &times;
              </button>
              {/* Knifedisplay Component */}
              <KnifeDisplayPopup knife={selectedKnife} />
            </div>
          </div>
        )}
      <Footer />
      </main>
    </div>
  );
}