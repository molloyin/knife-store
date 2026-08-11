import Image from "next/image";
import Link from "next/link";
import knives from "@/data/knives.json";
import ProductFeature from "@/components/productfeature";

const ETHOS = [
  {
    label: "Materials",
    body: "Premium stainless steel and hand-selected handle stock. Nothing on the bench that we would not carry ourselves.",
  },
  {
    label: "Custom Made",
    body: "Every piece is cut, ground and finished to order. Specify the blade, the handle, the purpose.",
  },
  {
    label: "Built to Last",
    body: "Made to be used, not displayed. With basic care these knives outlive the people who buy them.",
  },
];

export default function Home() {
  const featured = knives.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src={knives[0].images[0]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black" />

        <div className="relative z-10 w-full px-4 text-center sm:px-6">
          <h1 className="display text-[17vw] text-white/90 sm:text-[13vw]">
            Objective
            <br />
            Resource
            <br />
            Group
          </h1>
          <p className="ui mt-8 text-white/70">
            Custom Knives &middot; Built for Purpose &middot; Veteran Owned
          </p>
        </div>

        <Link
          href="#featured"
          className="ui-sm absolute inset-x-0 bottom-8 z-10 mx-auto w-fit text-white/60 transition-opacity hover:opacity-100"
        >
          Scroll &darr;
        </Link>
      </section>

      {/* Featured products */}
      <div id="featured" className="hairline">
        <div className="mx-auto flex max-w-shell items-baseline justify-between px-4 py-6 sm:px-6">
          <p className="ui-sm text-muted">Featured</p>
          <p className="ui-sm text-muted">
            {String(featured.length).padStart(2, "0")} {featured.length === 1 ? "Piece" : "Pieces"}
          </p>
        </div>
      </div>

      {featured.map((knife, index) => (
        <ProductFeature key={knife.id} knife={knife} index={index} />
      ))}

      {/* Ethos */}
      <section className="hairline">
        <div className="mx-auto max-w-shell px-4 py-20 sm:px-6 sm:py-28">
          <p className="ui-sm mb-14 text-muted">The Work</p>
          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            {ETHOS.map((item, index) => (
              <div key={item.label} className="border-t border-line pt-6">
                <p className="ui-sm mb-4 text-muted">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="display mb-4 text-[8vw] text-white sm:text-[2.4vw]">
                  {item.label}
                </h3>
                <p className="ui max-w-xs normal-case leading-relaxed tracking-normal text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="hairline">
        <Link
          href="/knifelist"
          className="group mx-auto flex max-w-shell flex-col items-start gap-6 px-4 py-20 transition-opacity hover:opacity-70 sm:px-6 sm:py-28"
        >
          <span className="ui-sm text-muted">Shop</span>
          <span className="display text-[13vw] leading-[0.85] text-white sm:text-[7vw]">
            View All Knives
          </span>
          <span className="ui text-foreground">Enter the collection &raquo;</span>
        </Link>
      </section>
    </>
  );
}
