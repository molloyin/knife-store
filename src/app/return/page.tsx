import Link from "next/link";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import PageShell from "@/components/pageshell";

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
    <PageShell
      eyebrow="Order Confirmed"
      title={"Thank\nYou"}
      intro="Your order has gone through. We will be in touch when your knife is ready — a confirmation email should land shortly."
    >
      <dl className="border-t border-line">
        <div className="grid gap-3 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <dt className="ui-sm text-muted">Receipt Sent To</dt>
          <dd className="ui text-foreground">{customerEmail}</dd>
        </div>

        <div className="grid gap-3 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <dt className="ui-sm text-muted">Total Paid</dt>
          <dd className="ui text-white">${totalAmount} NZD</dd>
        </div>

        <div className="grid gap-3 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <dt className="ui-sm text-muted">Shipping To</dt>
          <dd className="ui text-foreground">
            {shippingAddress ? (
              <>
                {shippingAddress.line1}
                <br />
                {shippingAddress.line2 && (
                  <>
                    {shippingAddress.line2}
                    <br />
                  </>
                )}
                {shippingAddress.city}
                {shippingAddress.state && `, ${shippingAddress.state}`} {shippingAddress.postal_code}
                <br />
                {shippingAddress.country}
              </>
            ) : (
              "N/A"
            )}
          </dd>
        </div>
      </dl>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/knifelist" className="btn">
          Back to the Collection &raquo;
        </Link>
        <Link href="/contact" className="btn-ghost">
          Questions? Contact Us
        </Link>
      </div>
    </PageShell>
  );
}
