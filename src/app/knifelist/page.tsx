import Image from "next/image";
import Link from "next/link";
import knives from "@/data/knives.json";
import PageShell from "@/components/pageshell";

export const metadata = {
  title: "Knives | Objective Resource Group",
  description: "The full collection of custom knives from Objective Resource Group.",
};

export default function KnifeList() {
  return (
    <PageShell
      eyebrow={`${String(knives.length).padStart(2, "0")} ${knives.length === 1 ? "Product" : "Products"}`}
      title="Knives"
      intro="Every piece is handmade to order. Select a knife for full specifications."
      wide
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
        {knives.map((knife, index) => (
          <Link key={knife.id} href={`/knifelist/${knife.id}`} className="group block">
            <div className="relative aspect-square w-full overflow-hidden bg-[#0a0a0a]">
              <Image
                src={knife.images[0]}
                alt={knife.name}
                fill
                priority={index < 4}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>

            <div className="mt-4 border-t border-line pt-3">
              <h2 className="ui text-white">{knife.name}</h2>
              <p className="ui mt-2 flex flex-wrap items-baseline gap-x-2 text-muted">
                <span>${knife.price.toFixed(2)} NZD</span>
                <span className="text-line">·</span>
                <span className="transition-opacity group-hover:opacity-60">Details &raquo;</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
