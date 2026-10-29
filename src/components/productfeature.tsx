"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Knife } from "@/types/knife";
import { useReveal } from "@/lib/usereveal";

interface ProductFeatureProps {
  knife: Knife;
  index: number;
  /** Puts the photo on the right from `md` up, so cards alternate sides. */
  reverse?: boolean;
}

/**
 * One featured product. Mobile: photo, then caption. From `md` up: a 3:2 row
 * with the photo pushed toward the page centre and the caption raised beside
 * it, joined to the photo by a dotted connector line. The photo is shown whole —
 * the frame takes the image's own aspect ratio rather than cropping it — and its
 * edges are feathered into the page black (`.feather` in globals.css).
 */
export default function ProductFeature({ knife, index, reverse = false }: ProductFeatureProps) {
  const { ref, cls } = useReveal<HTMLElement>();
  // Measured from the file itself so any shape of photo is shown uncropped.
  const [ratio, setRatio] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full px-4 py-16 sm:px-6 lg:py-28">
      <Link
        href={`/knifelist/${knife.slug}`}
        className={`group mx-auto flex max-w-shell flex-col md:items-center md:gap-8 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Photo column */}
        <div className="w-full md:flex-[3]">
          <div
            className={`reveal ${cls} w-full md:max-w-[700px] ${reverse ? "md:mr-auto" : "md:ml-auto"}`}
          >
            <div
              className="feather relative w-full overflow-hidden"
              style={{ aspectRatio: ratio ?? 1 }}
            >
              <Image
                src={knife.images[0]}
                alt={knife.name}
                fill
                sizes="(max-width: 768px) 92vw, 700px"
                priority={index === 0}
                onLoad={(event) => {
                  const img = event.currentTarget;
                  if (img.naturalWidth && img.naturalHeight) {
                    setRatio(img.naturalWidth / img.naturalHeight);
                  }
                }}
                className="object-contain transition duration-500 ease-in-out group-hover:brightness-105"
              />
            </div>
          </div>
        </div>

        {/* Caption column. The outer wrapper owns the raise; the inner wrapper
            owns the reveal, because both set `transform`. */}
        <div className="mt-6 w-full md:mt-0 md:flex-[2]">
          <div
            className={`relative md:max-w-[500px] md:-translate-y-[80%] ${
              reverse ? "md:ml-auto" : "md:mr-auto"
            }`}
          >
            <div
              className={`reveal ${cls} relative flex flex-col gap-3 md:items-center md:text-center`}
              style={{ transitionDelay: "150ms" }}
            >
              <span className="ui-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
              <span className="ui-sm text-foreground">${knife.price.toFixed(2)} NZD</span>
              <h2 className="display break-words text-[7vw] text-white sm:text-[clamp(22px,2.2vw,34px)]">
                {knife.name}
              </h2>
              <span className="ui text-foreground transition-opacity group-hover:opacity-60">
                Details &raquo;
              </span>

              {/* Connector: drops from the caption centre, then runs toward the photo. */}
              <span
                aria-hidden
                className={`pointer-events-none absolute top-full mt-2.5 hidden h-[65px] w-[60%] border-b border-dotted border-white/80 transition-[width] duration-[800ms] ease-[cubic-bezier(.39,.12,0,1.1)] group-hover:w-3/4 group-hover:duration-500 md:block ${
                  reverse ? "right-1/2 translate-x-full border-l" : "left-1/2 -translate-x-full border-r"
                }`}
              />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
