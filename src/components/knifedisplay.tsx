"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Knife } from '@/types/knife';

interface KnifeDisplayProps {
  knife: Knife;
}

export default function KnifeDisplay({ knife }: KnifeDisplayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultiple = knife.images.length > 1;

  // Navigation functions with non-looping logic
  const nextImage = () => {
    if (currentImageIndex < knife.images.length - 1) {
      setCurrentImageIndex(i => i + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(i => i - 1);
    }
  };

  return (
    <div className="border-[0.5px] border-white p-5">
      <h2 className="text-2xl font-semibold mb-2">{knife.name}</h2>
      <div className="border-[0.5px] border-white border-flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Knife Image (View on the left) */}
          <div className="md:w-2/3">
            <div className="border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-white relative group">
              <Image
                src={knife.images[currentImageIndex]}
                alt={knife.name}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              {hasMultiple && (
                <>
                  {/* Previous Button */}
                  {currentImageIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 group-hover:opacity-100 opacity-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 text-white"
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

                  {/* Next Button */}
                  {currentImageIndex < knife.images.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 group-hover:opacity-100 opacity-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 text-white"
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

                  {/* Pagination Dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center">
                    {knife.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full mx-1 transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-gray-600'
                        }`}
                      ></div>
                    ))}
                  </div>
                </>
              )}
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
              className="md:mt-auto mt-4 mb-4 bg-neutral-200 hover:bg-white transition text-black p-2 pr-5 pl-5"
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