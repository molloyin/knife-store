import Link from "next/link";
import PageShell from "@/components/pageshell";

export const metadata = {
  title: "About | Objective Resource Group",
  description: "Custom knives, built for purpose. Veteran owned.",
};

const SECTIONS = [
  {
    label: "Our Craft",
    body: "Each knife in the collection is handmade with meticulous attention to detail. We use premium materials only — high-quality stainless steel blades and carefully selected handle stock — so every piece is as durable as it is good-looking.",
  },
  {
    label: "Our Philosophy",
    body: "A knife is more than a tool; it is an extension of the person carrying it. Every piece we make is designed with a specific purpose in mind, whether that is a professional kitchen, the back country, or a collection.",
  },
  {
    label: "Custom Orders",
    body: "Most of what we make starts as a conversation. Tell us the blade, the handle and the job it has to do, and we will build it. Get in touch to start one.",
  },
];

export default function About() {
  return (
    <PageShell
      eyebrow="Objective Resource Group"
      title={"Built for\nPurpose"}
      intro="Where craftsmanship meets purpose. We make custom knives that are built to perform and built to last."
    >
      <div className="space-y-14">
        {SECTIONS.map((section, index) => (
          <section key={section.label} className="border-t border-line pt-6">
            <p className="ui-sm mb-4 text-muted">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="display mb-5 text-[9vw] text-white sm:text-[3vw]">{section.label}</h2>
            <p className="ui max-w-xl normal-case leading-relaxed tracking-normal text-muted">
              {section.body}
            </p>
          </section>
        ))}

        <blockquote className="border-l border-white pl-6">
          <p className="ui normal-case leading-relaxed tracking-normal text-foreground">
            &quot;Quality is never an accident; it is always the result of high intention, sincere
            effort, intelligent direction and skillful execution.&quot;
          </p>
        </blockquote>

        <div className="flex flex-wrap gap-4">
          <Link href="/knifelist" className="btn">
            View the Collection &raquo;
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
