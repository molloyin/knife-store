import { notFound } from "next/navigation";
import knives from "@/data/knives.json";
import KnifeDisplay from "@/components/knifedisplay";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return knives.map((knife) => ({ id: knife.id }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const knife = knives.find((k) => k.id === id);

  if (!knife) return { title: "Not Found | Objective Resource Group" };

  return {
    title: `${knife.name} | Objective Resource Group`,
    description: knife.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const knife = knives.find((k) => k.id === id);

  if (!knife) notFound();

  return <KnifeDisplay knife={knife} />;
}
