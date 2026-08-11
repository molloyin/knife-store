"use client";

import Image from "next/image";
import Link from "next/link";
import { Knife } from "@/types/knife";
import { useReveal } from "@/lib/usereveal";

interface ProductFeatureProps {
  knife: Knife;
  index: number;
}

/**
 * Full-bleed scroll section: one product photograph filling the viewport with a
 * technical meta line overlaid along the bottom.
 */
export default function ProductFeature({ knife, index }: ProductFeatureProps) {
  const { ref, cls } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative w-full px-4 py-10 sm:px-6 sm:py-16">
      <Link
        href={`/knifelist/${knife.id}`}
        className="group relative mx-auto block aspect-[4/3] w-full max-w-[1100px] overflow-hidden bg-black sm:aspect-[3/2] sm:w-[76%]"
      >
        <Image
          src={knife.images[0]}
          alt={knife.name}
          fill
          sizes="(max-width: 640px) 100vw, 76vw"
          priority={index === 0}
          className="object-cover opacity-90 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        {/* Index marker */}
        <span className={`ui-sm reveal ${cls} absolute left-4 top-8 text-white/70 sm:left-6`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Meta line */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-6 sm:pb-10">
          <div className={`reveal-line ${cls} mb-5 h-px w-full bg-white/40`} />
          <div className={`reveal ${cls} flex flex-wrap items-baseline gap-x-3 gap-y-2`}>
            <h2 className="display break-words text-[9vw] leading-[0.85] text-white sm:text-[4vw]">
              {knife.name}
            </h2>
            <span className="ui ml-auto flex items-baseline gap-3 text-white">
              <span>${knife.price.toFixed(2)} NZD</span>
              <span className="text-white/40">·</span>
              <span className="transition-opacity group-hover:opacity-60">Details &raquo;</span>
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
