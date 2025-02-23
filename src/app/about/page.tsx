// app/about/page.tsx
import Navbar from '@/components/navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>
          Im not acutally just a grunt. I was the one who killed Osama Been Ladeen.
        </p>
      </main>
    </div>
  );
}