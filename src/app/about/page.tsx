// app/about/page.tsx
import Navbar from '@/components/navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Navbar />
      <main className="w-full max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>
          We are passionate knife artisans crafting high-quality blades for chefs
          and enthusiasts worldwide. Our mission is to blend tradition with
          modern technology.
        </p>
      </main>
    </div>
  );
}