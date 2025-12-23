import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold mb-6 text-white">About Us</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Objective Resource Group, where craftsmanship meets purpose. We specialize in creating custom knives that are built to perform and built to last.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Craft</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each knife in our collection is handcrafted with meticulous attention to detail. We use only premium materials including high-quality stainless steel blades and carefully selected handle materials to ensure both beauty and functionality.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Philosophy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We believe that a knife is more than just a tool—it&apos;s an extension of its owner. That&apos;s why every piece we create is designed with a specific purpose in mind, whether it&apos;s for the professional chef, outdoor enthusiast, or collector.
            </p>
            
            <div className="bg-blue-950 bg-opacity-30 border-l-4 border-blue-600 p-6 mt-8 rounded-r-lg">
              <p className="text-gray-200 italic">
                &quot;Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution.&quot;
              </p>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
