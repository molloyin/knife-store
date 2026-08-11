import Link from "next/link";
import PageShell from "@/components/pageshell";

export const metadata = {
  title: "Shipping | Objective Resource Group",
  description: "Processing times, shipping options and pickup details.",
};

const SECTIONS = [
  {
    label: "Order Processing",
    body: "Please allow up to 2 weeks for order processing and dispatch. You will receive an email confirmation once your order is on its way.",
  },
  {
    label: "New Zealand",
    body: "We ship New Zealand wide. Shipping charges are calculated at checkout and tracking information is provided once your order has been dispatched.",
  },
  {
    label: "Australia",
    body: "We also ship to Australia. Shipping fees for Australian orders are calculated at checkout, with the same 2-week dispatch time.",
  },
  {
    label: "Store Pickup",
    body: "Store pickup is available. Pickup location details and available times will be announced soon — simply select the pickup option at checkout.",
  },
  {
    label: "Damaged Orders",
    body: "If your order arrives damaged, contact us with your order number and photos of the damage and we will sort it out.",
  },
];

export default function ShippingPage() {
  return (
    <PageShell
      eyebrow="Policy"
      title="Shipping"
      intro="Everything is made to order, so dispatch takes a little longer than an off-the-shelf knife."
    >
      <dl className="border-t border-line">
        {SECTIONS.map((section) => (
          <div
            key={section.label}
            className="grid gap-3 border-b border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <dt className="ui-sm text-muted">{section.label}</dt>
            <dd className="ui max-w-xl normal-case leading-relaxed tracking-normal text-foreground">
              {section.body}
            </dd>
          </div>
        ))}
      </dl>

      <p className="ui mt-10 normal-case tracking-normal text-muted">
        Further questions?{" "}
        <Link href="/contact" className="link-underline text-foreground underline">
          Get in touch
        </Link>
        .
      </p>
    </PageShell>
  );
}
