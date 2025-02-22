"use client"; 

import Navbar from '@/components/navbar';
import KnifeDisplay from '@/components/knifedisplay';
import knives from '@/data/knives.json';

export default function Home() {
  const featuredKnife = knives[0]; // For simplicity, use the first knife

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <main className="w-full max-w-4xl l mt-4">
        <Navbar />
        <div className='mt-6' />
        <KnifeDisplay knife={featuredKnife} />
      </main>
    </div>
  );
}
