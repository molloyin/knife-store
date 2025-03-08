"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />

        {/* Main Container with 0.5px border */}
        <div className="mt-6 border-[0.5px] border-white p-6">
          {/* Page Title with a subtle bottom border */}
          {/* <h1 className="text-2xl font-bold mb-4 border-b-[0.5px] border-white pb-2 uppercase tracking-wide">
            Shipping Policy
          </h1> */}

          {/* Order Processing Section */}
          <section className="border-b-[0.5px] border-white pb-4 mb-6">
            <h2 className="text-lg font-semibold mb-2 uppercase tracking-wider">
              Order Processing
            </h2>
            <p className="leading-relaxed">
              Please allow up to{" "}
              <span className="font-semibold">2 weeks</span> for order
              processing and dispatch. You’ll receive an email confirmation once
              your order is on its way.
            </p>
          </section>

          {/* Shipping Options Section */}
          <section className="border-b-[0.5px] border-white pb-4 mb-6">
            <h2 className="text-lg font-semibold mb-2 uppercase tracking-wider">
              Shipping Options
            </h2>
            <div className="mb-4">
              <h3 className="font-bold mb-1">New Zealand Shipping</h3>
              <p className="leading-relaxed">
                We ship within New Zealand. Shipping charges are calculated at
                checkout, and tracking information will be provided once your
                order has been dispatched.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-1">International Shipping</h3>
              <p className="leading-relaxed">
                We also ship to Australia. Shipping fees for orders to Australia
                are calculated at checkout, with the same{" "}
                <span className="font-semibold">2-week</span> dispatch time.
              </p>
            </div>
          </section>

          {/* Store Pickup Section */}
          <section className="border-b-[0.5px] border-white pb-4 mb-6">
            <h2 className="text-lg font-semibold mb-2 uppercase tracking-wider">
              Store Pickup
            </h2>
            <p className="leading-relaxed">
              Store pickup is available. Pickup location details and available
              times will be announced soon. Simply select the pickup option at
              checkout.
            </p>
          </section>

          {/* Additional Information Section */}
          <section>
            <h2 className="text-lg font-semibold mb-2 uppercase tracking-wider">
              Additional Information
            </h2>
            <p className="leading-relaxed mb-2">
              If your order arrives damaged, please contact us with your order
              number and photos of the damage.
            </p>
            <p className="leading-relaxed">
              For further inquiries, email us at{" "}
              <a
                href="mailto:support@yourcompany.com"
                className="text-blue-400 hover:underline"
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


