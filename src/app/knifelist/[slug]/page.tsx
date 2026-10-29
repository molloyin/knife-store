import { notFound } from "next/navigation";
import { getKnife, knives } from "@/lib/knives";
import KnifeDisplay from "@/components/knifedisplay";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return knives.map((knife) => ({ slug: knife.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const knife = getKnife(slug);

  if (!knife) return { title: "Not Found | Objective Resource Group" };

  return {
    title: `${knife.name} | Objective Resource Group`,
    description: knife.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const knife = getKnife(slug);

  if (!knife) notFound();

  return <KnifeDisplay knife={knife} />;
}
