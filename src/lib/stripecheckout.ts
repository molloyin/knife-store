"use server";

import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import knives from "@/data/knives.json";

export async function createCheckoutSession(knifeId: string) {
  const knife = knives.find((k) => k.id === knifeId);
  if (!knife) throw new Error("Knife not found");

  const origin = (await headers()).get("origin");

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price_data: {
          currency: "nzd",
          product_data: { name: knife.name },
          unit_amount: Math.round(knife.price * 100),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["NZ", "AU"], // Restrict shipping to New Zealand and Australia
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 500, // 5 NZD flat shipping rate
            currency: "nzd",
          },
          display_name: "Standard Shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
    ],
  });

  return session.client_secret;
}
