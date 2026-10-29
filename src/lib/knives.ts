import data from "@/data/knives.json";
import { slugify } from "@/lib/slug.mjs";
import type { Knife, KnifeEntry } from "@/types/knife";

// The file's shape is checked by scripts/check-knives.mjs before every build, so it is
// asserted here rather than inferred: TypeScript's inference from the JSON breaks as soon
// as two knives differ (one has specs, another doesn't).
const entries = (data as unknown as { knives: KnifeEntry[] }).knives;

export const knives: Knife[] = entries.map((entry) => ({
  slug: slugify(entry.name),
  name: entry.name,
  price: entry.price,
  description: entry.description ?? "",
  images: entry.images,
  specs: entry.specs ?? [],
  featured: entry.featured ?? false,
}));

/** Knives ticked "Show on home page", in list order — or the first three if none are ticked. */
export const featuredKnives: Knife[] = knives.some((knife) => knife.featured)
  ? knives.filter((knife) => knife.featured)
  : knives.slice(0, 3);

export function getKnife(slug: string): Knife | undefined {
  return knives.find((knife) => knife.slug === slug);
}
