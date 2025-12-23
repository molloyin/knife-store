"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold mb-6 text-white">Shipping Policy</h1>

          {/* Order Processing Section */}
          <section className="mb-8">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-white">
                  Order Processing
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Please allow up to{" "}
                  <span className="font-semibold text-blue-400">2 weeks</span> for order
                  processing and dispatch. You&apos;ll receive an email confirmation once
                  your order is on its way.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping Options Section */}
          <section className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3 text-white">
                  Shipping Options
                </h2>
                
                <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800 mb-3">
                  <h3 className="font-bold text-white mb-2">New Zealand Shipping</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We ship within New Zealand. Shipping charges are calculated at
                    checkout, and tracking information will be provided once your
                    order has been dispatched.
                  </p>
                </div>
                
                <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
                  <h3 className="font-bold text-white mb-2">International Shipping</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We also ship to Australia. Shipping fees for orders to Australia
                    are calculated at checkout, with the same{" "}
                    <span className="font-semibold text-blue-400">2-week</span> dispatch time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Store Pickup Section */}
          <section className="mb-8">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-white">
                  Store Pickup
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Store pickup is available. Pickup location details and available
                  times will be announced soon. Simply select the pickup option at
                  checkout.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Information Section */}
          <section className="bg-blue-950 bg-opacity-30 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold mb-3 text-white">
              Additional Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              If your order arrives damaged, please contact us with your order
              number and photos of the damage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For further inquiries, email us at{" "}
              <a
                href="mailto:Info@objectiveresourcegroup.com"
                className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
              >
                Info@objectiveresourcegroup.com
              </a>
              .
            </p>
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
}
