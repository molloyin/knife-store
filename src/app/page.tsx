"use client"; 

import Navbar from '@/components/navbar';
import KnifeDisplay from '@/components/knifedisplay';
import knives from '@/data/knives.json';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <main className="w-full max-w-6xl mt-4">
        <Navbar />
        
        {/* Hero Section */}
        {/* <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-lg shadow-2xl border border-blue-800 p-8 sm:p-12 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Handcrafted Excellence
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-blue-100">
              Each knife is custom-made with precision and care, designed to last a lifetime. Discover craftsmanship that cuts above the rest.
            </p>
            <Link href="/knifelist">
              <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Shop Collection
              </button>
            </Link>
          </div>
        </div> */}

        {/* Featured Product Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4"/>
          <KnifeDisplay knife={knives[0]} />
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-lg shadow-2xl border border-blue-800 p-8 sm:p-12 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Handcrafted Excellence
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-blue-100">
              Each knife is custom-made with precision and care, designed to last a lifetime. Discover craftsmanship that cuts above the rest.
            </p>
            <Link href="/knifelist">
              <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Shop Collection
              </button>
            </Link>
          </div>
        </div>
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quality Materials</h3>
            <p className="text-gray-400 text-sm">Premium stainless steel and carefully selected handles</p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Custom Made</h3>
            <p className="text-gray-400 text-sm">Each piece crafted to order with attention to detail</p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Built to Last</h3>
            <p className="text-gray-400 text-sm">Lifetime durability with proper care and maintenance</p>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
