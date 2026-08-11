"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Knife } from "@/types/knife";
import CheckoutModal from "./checkoutmodal";

interface KnifeDisplayProps {
  knife: Knife;
}

export default function KnifeDisplay({ knife }: KnifeDisplayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const hasMultiple = knife.images.length > 1;

  return (
    <>
      <div className="pt-[var(--header-h)]">
        <div className="mx-auto max-w-shell px-4 py-6 sm:px-6">
          <Link href="/knifelist" className="ui-sm link-underline text-muted">
            &laquo; All Knives
          </Link>
        </div>

        <div className="hairline">
          <div className="mx-auto grid max-w-shell gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="relative aspect-square w-full overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={knife.images[currentImageIndex]}
                  alt={knife.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {hasMultiple && (
                <div className="mt-3 flex gap-3">
                  {knife.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                      aria-current={index === currentImageIndex}
                      className={`relative h-20 w-20 overflow-hidden bg-[#0a0a0a] transition-opacity duration-200 ${
                        index === currentImageIndex
                          ? "opacity-100 outline outline-1 outline-white"
                          : "opacity-45 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Specification */}
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">
              <h1 className="display break-words text-[13vw] text-white lg:text-[4.5vw]">
                {knife.name}
              </h1>

              <p className="ui mt-6 text-white">${knife.price.toFixed(2)} NZD</p>

              <p className="ui mt-8 max-w-md normal-case leading-relaxed tracking-normal text-muted">
                {knife.description}
              </p>

              <dl className="mt-10 border-t border-line">
                {Object.entries(knife.properties).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                  >
                    <dt className="ui-sm text-muted">{key}</dt>
                    <dd className="ui text-right text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>

              <button
                type="button"
                onClick={() => setShowCheckout(true)}
                className="btn mt-10 w-full"
              >
                Buy Now &raquo;
              </button>

              <p className="ui-sm mt-5 text-muted">
                Handmade to order &middot; Allow up to 2 weeks for dispatch &middot;{" "}
                <Link href="/shipping" className="link-underline underline">
                  Shipping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal knifeId={knife.id} onClose={() => setShowCheckout(false)} />
      )}
    </>
  );
}
