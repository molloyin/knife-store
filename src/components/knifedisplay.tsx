"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Knife } from '@/types/knife';
import CheckoutModal from './checkoutmodal';

interface KnifeDisplayProps {
  knife: Knife;
}

export default function KnifeDisplay({ knife }: KnifeDisplayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const hasMultiple = knife.images.length > 1;

  const nextImage = () => {
    if (currentImageIndex < knife.images.length - 1) {
      setCurrentImageIndex((i) => i + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((i) => i - 1);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg border border-zinc-800 overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-white">{knife.name}</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Knife Image */}
          <div className="md:w-2/3">
            <div className="relative group bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src={knife.images[currentImageIndex]}
                alt={knife.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              {hasMultiple && (
                <>
                  {currentImageIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 bg-opacity-90 hover:bg-zinc-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  )}
                  {currentImageIndex < knife.images.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 bg-opacity-90 hover:bg-zinc-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {knife.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-blue-500 scale-125' : 'bg-zinc-600 hover:bg-zinc-500'
                        }`}
                      ></button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Knife Properties */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Description</label>
              <p className="text-gray-300 leading-relaxed">{knife.description}</p>
            </div>
            
            {Object.entries(knife.properties).map(([key, value]) => (
              <div key={key} className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">{key}</label>
                <p className="text-gray-300">{value}</p>
              </div>
            ))}
            
            <div className="bg-blue-950 bg-opacity-30 rounded-lg p-4 border-2 border-blue-900">
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Price</label>
              <p className="text-2xl font-bold text-blue-400">${knife.price} <span className="text-sm font-normal text-gray-400">NZD</span></p>
            </div>
            
            <button
              onClick={() => setShowCheckout(true)}
              className="mt-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {showCheckout && (
        <CheckoutModal knifeId={knife.id} onClose={() => setShowCheckout(false)} />
      )}
    </div>
  );
}