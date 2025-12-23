"use client";

import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createCheckoutSession } from '@/lib/stripecheckout';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutModalProps {
  knifeId: string;
  onClose: () => void;
}

export default function CheckoutModal({ knifeId, onClose }: CheckoutModalProps) {
  const fetchClientSecret = async () => {
    const clientSecret = await createCheckoutSession(knifeId);
    if (!clientSecret) {
      throw new Error('Client secret is null');
    }
    return clientSecret;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 text-3xl font-light z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-800 transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        <div className="p-4">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  );
}
