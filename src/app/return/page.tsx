import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface ReturnPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function Return({ searchParams }: ReturnPageProps) {
  const { session_id } = await searchParams;

  const session = session_id
    ? await stripe.checkout.sessions
        .retrieve(session_id, { expand: ["line_items", "payment_intent"] })
        .catch(() => null)
    : null;

  if (!session || session.status !== "complete" || !session.customer_details?.email) {
    redirect("/");
  }

  const customerEmail = session.customer_details.email;
  const shippingAddress = session.shipping_details?.address;
  const totalAmount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "N/A";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <main className="w-full max-w-4xl mt-4">
        <Navbar />

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-8 mb-6">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-900 bg-opacity-50 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2 text-center text-white">Order Confirmed!</h1>
          <p className="text-lg text-center text-gray-400 mb-8">
            Thank you for choosing us! Your order has been successful.
          </p>

          <div className="bg-blue-950 bg-opacity-30 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <p className="text-gray-200">
              We&apos;ll be in touch when your custom knife is ready. You should receive a confirmation email shortly.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="text-sm text-gray-400 font-medium">Receipt sent to:</span>
                  <p className="text-white font-semibold">{customerEmail}</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-sm text-gray-400 font-medium">Total amount paid:</span>
                  <p className="text-2xl text-green-400 font-bold">${totalAmount} <span className="text-sm font-normal text-gray-400">NZD</span></p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex-1">
                  <span className="text-sm text-gray-400 font-medium">Shipping to:</span>
                  {shippingAddress ? (
                    <div className="text-white mt-1">
                      <p>{shippingAddress.line1}</p>
                      {shippingAddress.line2 && <p>{shippingAddress.line2}</p>}
                      <p>
                        {shippingAddress.city}
                        {shippingAddress.state && `, ${shippingAddress.state}`}{" "}
                        {shippingAddress.postal_code}
                      </p>
                      <p className="font-semibold">{shippingAddress.country}</p>
                    </div>
                  ) : (
                    <span className="text-white">N/A</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 pt-6 border-t border-zinc-800">
            Have questions? Reach out to{" "}
            <a
              href="mailto:Info@objectiveresourcegroup.com"
              className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
            >
              Info@objectiveresourcegroup.com
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
