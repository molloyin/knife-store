"use client";

import { useEffect } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createCheckoutSession } from '@/lib/stripecheckout';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutModalProps {
  knifeSlug: string;
  onClose: () => void;
}

export default function CheckoutModal({ knifeSlug, onClose }: CheckoutModalProps) {
  const fetchClientSecret = async () => {
    const clientSecret = await createCheckoutSession(knifeSlug);
    if (!clientSecret) {
      throw new Error('Client secret is null');
    }
    return clientSecret;
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-black">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-black px-4 py-4 sm:px-6">
        <span className="ui-sm text-muted">Checkout</span>
        <button onClick={onClose} className="ui link-underline text-foreground" aria-label="Close checkout">
          Close &times;
        </button>
      </div>

      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}
