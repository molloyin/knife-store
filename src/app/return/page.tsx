import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import Navbar from "@/components/navbar";

interface ReturnPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function Return({ searchParams }: ReturnPageProps) {
  const { session_id } = await searchParams;
  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });
  if (!session.customer_details || !session.customer_details.email) {
    throw new Error("Customer details or email not found.");
  }

  const customerEmail = session.customer_details.email;
  const shippingAddress = session.shipping_details?.address;
  const totalAmount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "N/A";

  if (session.status === "open") {
    return redirect("/");
  }

  if (session.status === "complete") {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
        <main className="w-full max-w-4xl mt-4">
          <Navbar />
          <div className="mt-6" />
          <div className="border-[0.5px] border-white p-6 rounded-sm">
            <h1 className="text-3xl font-bold mb-4">Order Confirmed</h1>
            <p className="text-lg mb-6">
              Thank you for choosing us! Your order has been sucessful, we&apos;ll be in touch
              when your custom knife is ready.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Receipt sent to:</span>
                <span className="text-base">{customerEmail}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Total amount paid:</span>
                <span className="text-base">${totalAmount} NZD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Shipping to:</span>
                {shippingAddress ? (
                  <div>
                    <p>{shippingAddress.line1}</p>
                    {shippingAddress.line2 && <p>{shippingAddress.line2}</p>}
                    <p>
                      {shippingAddress.city}
                      {shippingAddress.state && `, ${shippingAddress.state}`}{" "}
                      {shippingAddress.postal_code}
                    </p>
                    <p>{shippingAddress.country}</p>
                  </div>
                ) : (
                  <span className="text-base">N/A</span>
                )}
              </div>
            </div>
            <p className="text-sm">
              Have questions? Reach out to{" "}
              <a
                href="mailto:Info@objectiveresourcegroup.com"
                className="text-white hover:underline"
              >
                Info@objectiveresourcegroup.com
              </a>
            </p>
          </div>
        </main>
      </div>
    );
  }
}