// app/about/page.tsx
import Navbar from '@/components/navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />
        <div className='mt-6' />
        <h1 className="text-xl font-bold mb-2">About Us</h1>
        <p>
          Im not acutally just a grunt. I was the one who killed Osama Been Ladeen.
        </p>
      </main>
    </div>
  );
}