/** One row of a knife's spec table, e.g. { label: "Blade Length", value: "210 mm" }. */
export interface KnifeSpec {
  label: string;
  value: string;
}

/**
 * A knife as stored in src/data/knives.json. Kez edits that file through
 * Pages CMS (.pages.yml), which writes `null` for fields left empty;
 * scripts/check-knives.mjs checks every entry before each build.
 */
export interface KnifeEntry {
  name: string;
  price: number;
  description?: string | null;
  images: string[];
  specs?: KnifeSpec[] | null;
  featured?: boolean | null;
}

/** A knife as the site uses it: empty fields filled in, plus the URL slug made from its name. */
export interface Knife {
  slug: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  specs: KnifeSpec[];
  featured: boolean;
}
