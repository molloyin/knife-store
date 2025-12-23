"use client"; 

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
          
          <div className="space-y-6">
            <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">Email</h2>
                  <a 
                    href="mailto:Info@objectiveresourcegroup.com"
                    className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
                  >
                    Info@objectiveresourcegroup.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">Instagram</h2>
                  <a 
                    href="https://www.instagram.com/objectiveresourcegroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
                  >
                    @objectiveresourcegroup
                  </a>
                  <p className="text-gray-400 text-sm mt-2">
                    Follow us for updates and behind-the-scenes content
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-950 bg-opacity-30 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-semibold text-white mb-2">Have Questions?</h3>
              <p className="text-gray-300 text-sm">
                Whether you&apos;re interested in a custom order, have questions about our products, or just want to learn more about our process, we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
