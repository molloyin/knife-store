"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Knife } from "@/types/knife";
import { useReveal } from "@/lib/usereveal";

interface ProductFeatureProps {
  knife: Knife;
  index: number;
}

/**
 * One product photograph, centred, shown whole — the frame takes the image's own
 * aspect ratio rather than cropping it to a fixed one — with a technical caption
 * ruled off directly beneath it.
 */
export default function ProductFeature({ knife, index }: ProductFeatureProps) {
  const { ref, cls } = useReveal<HTMLDivElement>();
  // Measured from the file itself so any shape of photo is shown uncropped.
  const [ratio, setRatio] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full px-4 py-12 sm:px-6 sm:py-20">
      <div className="feature-column">
        <Link href={`/knifelist/${knife.id}`} className="group block">
          <div
            className="relative w-full overflow-hidden bg-[#0a0a0a]"
            style={{ aspectRatio: ratio ?? 1 }}
          >
            <Image
              src={knife.images[0]}
              alt={knife.name}
              fill
              sizes="(max-width: 640px) 92vw, 760px"
              priority={index === 0}
              onLoad={(event) => {
                const img = event.currentTarget;
                if (img.naturalWidth && img.naturalHeight) {
                  setRatio(img.naturalWidth / img.naturalHeight);
                }
              }}
              className="object-contain transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Caption — ruled off under the photo, aligned to its edges */}
          <div className={`reveal-line ${cls} mt-5 h-px w-full bg-white/25`} />
          <div className={`reveal ${cls} mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2`}>
            <span className="ui-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="display break-words text-[7vw] text-white sm:text-[clamp(24px,2.6vw,38px)]">
              {knife.name}
            </h2>
            <span className="ui flex w-full items-baseline gap-3 text-foreground sm:ml-auto sm:w-auto">
              <span>${knife.price.toFixed(2)} NZD</span>
              <span className="text-line">·</span>
              <span className="transition-opacity group-hover:opacity-60">Details &raquo;</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
