// Checks src/data/knives.json before every build (the "prebuild" script) and explains
// any problem in plain English. Kez edits that file through Pages CMS (.pages.yml);
// when this check fails, the build stops and Netlify keeps the last good site live.
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { slugify } from "../src/lib/slug.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PHOTO_TYPES = [".jpg", ".jpeg", ".png", ".webp"];

const problems = [];
let knives;

try {
  knives = JSON.parse(readFileSync(path.join(ROOT, "src/data/knives.json"), "utf8")).knives ?? [];
} catch (error) {
  problems.push(
    `The knife list file can't be read (${error.message}). If it was edited by hand on GitHub, ` +
      `look for a missing comma or quote, or a " typed inside some text (write 8 inch, not 8").`,
  );
}

if (knives !== undefined) {
  if (!Array.isArray(knives)) {
    problems.push("The knife list file should hold a list of knives.");
  } else if (knives.length === 0) {
    problems.push("The knife list is empty. Keep at least one knife on the site.");
  } else {
    const names = new Map(); // web address -> the knife that has it
    knives.forEach((knife, index) => checkKnife(knife, index, names));
  }
}

if (problems.length > 0) {
  console.error("\nKNIFE LIST PROBLEM: the site was not updated (the live site is unchanged).\n");
  problems.forEach((problem, index) => console.error(`  ${index + 1}. ${problem}`));
  console.error(`\nFix ${problems.length === 1 ? "this" : "these"} and save again.\n`);
  process.exit(1);
}

console.log(`Knife list OK: ${knives.length} ${knives.length === 1 ? "knife" : "knives"}.`);

function checkKnife(knife, index, names) {
  const named = typeof knife?.name === "string" && knife.name.trim() !== "";
  const label = named ? `Knife ${index + 1} ("${knife.name.trim()}")` : `Knife ${index + 1}`;
  const problem = (text) => problems.push(`${label} ${text}`);

  if (typeof knife !== "object" || knife === null || Array.isArray(knife)) {
    problem("isn't a knife entry. Remove it and add it again.");
    return;
  }

  // The name becomes the knife's web address, so two knives can't share one.
  if (!named) {
    problem("has no name.");
  } else {
    const slug = slugify(knife.name);
    if (!slug) {
      problem("needs a name with at least one letter or number.");
    } else if (names.has(slug)) {
      problem(`has the same name as ${names.get(slug)}. Every knife needs a different name.`);
    } else {
      names.set(slug, label);
    }
  }

  if (typeof knife.price !== "number" || !Number.isFinite(knife.price) || knife.price <= 0) {
    problem("needs a price: just the number, like 349 or 349.50.");
  }

  if (knife.description != null && typeof knife.description !== "string") {
    problem("has a description that isn't plain text.");
  }

  if (!Array.isArray(knife.images) || knife.images.length === 0) {
    problem("needs at least one photo.");
  } else {
    knife.images.forEach((image, photo) => checkPhoto(image, photo + 1, problem));
  }

  if (knife.specs != null) {
    if (!Array.isArray(knife.specs)) {
      problem("has specs that aren't a list of rows.");
    } else {
      knife.specs.forEach((spec, row) => {
        const filled = (value) => typeof value === "string" && value.trim() !== "";
        if (!filled(spec?.label) || !filled(spec?.value)) {
          problem(`has a spec row (row ${row + 1}) without both a detail and a value. Fill it in or remove it.`);
        }
      });
    }
  }

  if (knife.featured != null && typeof knife.featured !== "boolean") {
    problem('has a "Show on home page" value that isn\'t a tick box.');
  }
}

function checkPhoto(image, number, problem) {
  if (typeof image !== "string" || !image.startsWith("/")) {
    problem(`has a photo (photo ${number}) that wasn't uploaded through Pages CMS. Remove it and upload it again.`);
    return;
  }

  const extension = path.extname(image).toLowerCase();
  if (!PHOTO_TYPES.includes(extension)) {
    problem(
      `has a photo (${path.basename(image)}) the site can't show. Use JPG, PNG or WebP; ` +
        `on an iPhone, export the photo as JPEG first.`,
    );
  } else if (!existsExactly(image)) {
    problem(`has a photo (${image}) that isn't on the site any more. Remove it from the knife and upload it again.`);
  }
}

// Compares each folder and file name exactly: macOS ignores capital letters in
// file names, but Netlify's servers don't, so a near-miss would break live.
function existsExactly(publicPath) {
  let current = path.join(ROOT, "public");
  for (const part of publicPath.split("/").filter(Boolean)) {
    let entries;
    try {
      entries = readdirSync(current);
    } catch {
      return false;
    }
    if (!entries.includes(part)) return false;
    current = path.join(current, part);
  }
  return statSync(current).isFile();
}
