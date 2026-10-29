/**
 * Turns a knife name into its web address, e.g. "Tītī Hunter #2" -> "titi-hunter-2".
 * Plain JS so the site and scripts/check-knives.mjs share one rule.
 * @param {string} name
 * @returns {string}
 */
export function slugify(name) {
  return name
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
