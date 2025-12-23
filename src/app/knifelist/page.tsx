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
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <main className="w-full max-w-6xl mt-4">
        <Navbar />
        
        <div className="mb-6 ml-2 mt-6">
          <h1 className="text-3xl font-bold text-white mb-2">Our Collection</h1>
          <p className="text-gray-400">Discover our range of handcrafted custom knives</p>
        </div>

        {/* Responsive Grid for Knife Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ml-2 mb-8">
          {knives.map((knife) => (
            <div
              key={knife.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedKnife(knife)}
            >
              {/* Knife Image */}
              <div className="aspect-square bg-zinc-950 relative overflow-hidden border-b border-zinc-800">
                <Image
                  src={knife.images[0]}
                  alt={knife.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Knife Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">{knife.name}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{knife.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-400">${knife.price}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">NZD</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup for Knife Display */}
        {selectedKnife && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedKnife(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 text-3xl font-light z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-800 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              {/* Knife Display Component */}
              <KnifeDisplayPopup knife={selectedKnife} />
            </div>
          </div>
        )}
        
        <Footer />
      </main>
    </div>
  );
}
