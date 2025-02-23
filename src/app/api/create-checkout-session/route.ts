import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import knives from "@/data/knives.json";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: undefined,
});

export async function POST(req: NextRequest) {
  const { knifeId } = await req.json();
  const knife = knives.find((k) => k.id === knifeId);

  if (!knife) {
    return NextResponse.json({ error: "Knife not found" }, { status: 404 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
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
    success_url: `${req.headers.get("origin")}/success`,
    cancel_url: `${req.headers.get("origin")}/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
