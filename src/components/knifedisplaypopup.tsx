"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Knife } from '@/types/knife';
import CheckoutModal from './checkoutmodal';

interface KnifeDisplayPopupProps {
  knife: Knife;
}

export default function KnifeDisplayPopup({ knife }: KnifeDisplayPopupProps) {
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
    <div className="border-[0.5px] border-white p-3 sm:p-5">
      <h2 className="text-2xl font-semibold mb-2">{knife.name}</h2>
      <div className="border-[0.5px] border-white flex flex-row gap-2 sm:gap-3">
        {/* Knife Image */}
        <div className="w-2/3 border-r-[0.5px] border-white relative group flex items-center justify-center">
          <Image
            src={knife.images[currentImageIndex]}
            alt={knife.name}
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
          {hasMultiple && (
            <>
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
        {/* Knife Properties */}
        <div className="w-1/3 flex flex-col gap-1.5 sm:gap-2 pt-2 sm:pt-3 pr-2 sm:pr-3 pl-0">
          <div className="border-[0.5px] border-white p-1.5 pt-1 pb-1 sm:p-2">
            <label className="block text-sm sm:text-base font-semibold">Description</label>
            <p className="text-xs sm:text-sm">{knife.description}</p>
          </div>
          {Object.entries(knife.properties).map(([key, value]) => (
            <div key={key} className="border-[0.5px] border-white p-1.5 pt-1 pb-1 sm:p-2">
              <label className="block text-sm sm:text-base font-semibold capitalize">{key}</label>
              <p className="text-xs sm:text-sm">{value}</p>
            </div>
          ))}
          <div className="border-[0.5px] border-white p-1.5 pt-1 pb-1 sm:p-2">
            <label className="block text-sm sm:text-base font-semibold">Price</label>
            <p className="text-xs sm:text-sm">${knife.price}</p>
          </div>
          <button
            onClick={() => setShowCheckout(true)}
            className="mt-auto mb-2 sm:mb-3 bg-neutral-200 hover:bg-white transition text-black text-sm sm:text-base p-2 pr-4 pl-4"
          >
            Buy Now
          </button>
        </div>
      </div>
      {showCheckout && (
        <CheckoutModal knifeId={knife.id} onClose={() => setShowCheckout(false)} />
      )}
    </div>
  );
}