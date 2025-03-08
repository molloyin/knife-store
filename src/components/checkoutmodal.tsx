"use client";

import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createCheckoutSession } from '@/lib/stripecheckout';

// Load Stripe with the publishable key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutModalProps {
  knifeId: string;
  onClose: () => void;
}

export default function CheckoutModal({ knifeId, onClose }: CheckoutModalProps) {
  // Function to fetch the client secret by calling the server action
  const fetchClientSecret = async () => {
    const clientSecret = await createCheckoutSession(knifeId);
    if (!clientSecret) {
      throw new Error('Client secret is null');
    }
    return clientSecret;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-black p-0 rounded-lg bg-opacity-75 max-w-lg w-full max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          ×
        </button>
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