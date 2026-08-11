import Link from "next/link";
import PageShell from "@/components/pageshell";

export const metadata = {
  title: "Contact | Objective Resource Group",
  description: "Get in touch about custom orders, questions, or the process.",
};

const CHANNELS = [
  {
    label: "Email",
    value: "Info@objectiveresourcegroup.com",
    href: "mailto:Info@objectiveresourcegroup.com",
    note: "We typically respond within 24–48 hours",
  },
  {
    label: "Instagram",
    value: "@objectiveresourcegroup",
    href: "https://www.instagram.com/objectiveresourcegroup/",
    note: "Updates and behind-the-scenes from the bench",
  },
];

export default function Contact() {
  return (
    <PageShell
      eyebrow="Get in Touch"
      title="Contact"
      intro="Custom orders, questions about a piece, or just curious about the process — we would like to hear from you."
    >
      <div className="border-t border-line">
        {CHANNELS.map((channel) => (
          <Link
            key={channel.label}
            href={channel.href}
            className="group flex flex-col gap-2 border-b border-line py-8 transition-opacity hover:opacity-60 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div>
              <p className="ui-sm mb-3 text-muted">{channel.label}</p>
              <p className="display break-all text-[5.5vw] text-white sm:text-[2.2vw]">
                {channel.value}
              </p>
            </div>
            <span className="ui shrink-0 text-muted sm:text-right">
              {channel.note}
              <span className="mt-2 block text-foreground">Open &raquo;</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <p className="ui-sm mb-4 text-muted">Custom Work</p>
        <p className="ui max-w-xl normal-case leading-relaxed tracking-normal text-muted">
          Tell us the blade length, the steel, the handle material and what the knife has to do. We
          will come back to you with a price and a timeline.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/knifelist" className="btn">
            View the Collection &raquo;
          </Link>
          <Link href="/shipping" className="btn-ghost">
            Shipping Policy
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
