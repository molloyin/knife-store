"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Knife } from '@/types/knife';
import CheckoutModal from './checkoutmodal';

interface KnifeDisplayProps {
  knife: Knife;
  onCheckoutOpenChange?: (open: boolean) => void;
}

export default function KnifeDisplay({ knife, onCheckoutOpenChange }: KnifeDisplayProps) {
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

  const setCheckoutOpen = (open: boolean) => {
    setShowCheckout(open);
    onCheckoutOpenChange?.(open);
  };

  if (showCheckout) {
    return <CheckoutModal knifeId={knife.id} onClose={() => setCheckoutOpen(false)} />;
  }

  return (
    <div className="bg-zinc-900 rounded-lg shadow-xl border border-zinc-800 overflow-hidden">
      <div className="p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{knife.name}</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Knife Image */}
          <div className="sm:w-2/3">
            <div className="relative group bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src={knife.images[currentImageIndex]}
                alt={knife.name}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              {hasMultiple && (
                <>
                  {currentImageIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-zinc-800 bg-opacity-90 hover:bg-zinc-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-zinc-800 bg-opacity-90 hover:bg-zinc-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {knife.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
          <div className="sm:w-1/3 flex flex-col gap-3">
            <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800">
              <label className="block text-xs sm:text-sm font-bold text-gray-400 mb-1 uppercase tracking-wide">Description</label>
              <p className="text-sm text-gray-300 leading-relaxed">{knife.description}</p>
            </div>

            {Object.entries(knife.properties).map(([key, value]) => (
              <div key={key} className="bg-zinc-950 rounded-lg p-3 border border-zinc-800">
                <label className="block text-xs sm:text-sm font-bold text-gray-400 mb-1 uppercase tracking-wide">{key}</label>
                <p className="text-sm text-gray-300">{value}</p>
              </div>
            ))}

            <div className="bg-blue-950 bg-opacity-30 rounded-lg p-3 border-2 border-blue-900">
              <label className="block text-xs sm:text-sm font-bold text-gray-400 mb-1 uppercase tracking-wide">Price</label>
              <p className="text-xl sm:text-2xl font-bold text-blue-400">${knife.price.toFixed(2)} <span className="text-xs sm:text-sm font-normal text-gray-400">NZD</span></p>
            </div>

            <button
              onClick={() => setCheckoutOpen(true)}
              className="mt-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
