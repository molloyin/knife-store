"use client"; 

import Navbar from '@/components/navbar';
import KnifeDisplay from '@/components/knifedisplay';
import knives from '@/data/knives.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />
        <div className='mt-6' />
        <KnifeDisplay knife={knives[0]} />
      </main>
    </div>
  );
}
