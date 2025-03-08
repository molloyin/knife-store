"use client"; 

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />
        <div className='mt-6' />
        <h1 className="text-xl font-bold mb-2">Contact</h1>
        <p>
          Info@objectiveresourcegroup.com 
        </p>
        <Footer />
      </main>
    </div>
  );
}

