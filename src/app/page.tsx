import Image from "next/image";
import Link from "next/link";
import { featuredKnives } from "@/lib/knives";
import ProductFeature from "@/components/productfeature";

export default function Home() {
  // In development only, repeat the stock knives to fill three slots so the
  // alternating layout can be checked. Production shows the real data as-is.
  const featured =
    process.env.NODE_ENV === "development" && featuredKnives.length > 0 && featuredKnives.length < 3
      ? Array.from({ length: 3 }, (_, i) => featuredKnives[i % featuredKnives.length])
      : featuredKnives;
  // The first featured knife's first photo doubles as the hero background.
  const heroImage = featuredKnives[0]?.images[0];

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-black">
        {heroImage && (
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        )}
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
      <div id="featured" className="hairline px-4 sm:px-6">
        <div className="mx-auto flex max-w-shell items-baseline justify-between py-6">
          <p className="ui-sm text-muted">Featured</p>
          <p className="ui-sm text-muted">
            {String(featured.length).padStart(2, "0")} {featured.length === 1 ? "Piece" : "Pieces"}
          </p>
        </div>
      </div>

      {featured.map((knife, index) => (
        <ProductFeature
          key={`${knife.slug}-${index}`}
          knife={knife}
          index={index}
          reverse={index % 2 === 1}
        />
      ))}

      {/* Closing CTA */}
      <section className="hairline">
        <Link
          href="/knifelist"
          className="group mx-auto flex max-w-shell flex-col items-start gap-5 px-4 py-16 transition-opacity hover:opacity-70 sm:px-6 sm:py-20"
        >
          <span className="ui-sm text-muted">Shop</span>
          <span className="display text-[8vw] text-white sm:text-[clamp(28px,3.4vw,48px)]">
            View All Knives
          </span>
          <span className="ui text-foreground">Enter the collection &raquo;</span>
        </Link>
      </section>
    </>
  );
}
