# Objective Resource Group — knife store

Next.js 16 storefront with Stripe embedded checkout, hosted on Netlify. The owner edits the knife list through [Pages CMS](https://pagescms.org); accounts, setup steps and the owner's guide are in the [Knife Store Handover Plan](https://claude.ai/artifact/5NduEh8UcNZBWKKoJX7uef).

## Knife list

- `src/data/knives.json` is the catalogue. Pages CMS edits it using `.pages.yml` and uploads photos to `public/images/knives/`.
- Each knife's URL is its slugified name (`/knifelist/chef-knife`, see `src/lib/slug.mjs`), so names must be unique.
- The home page features knives with `featured: true` (or the first three if none are ticked). The first featured knife's first photo is the hero background.
- `scripts/check-knives.mjs` runs before every build (`prebuild`). It fails the build with plain-English errors for duplicate names, missing or mis-cased photo paths, unsupported photo types and bad prices. A failed Netlify build leaves the live site unchanged.

Pages CMS rewrites `knives.json` from the `.pages.yml` schema on every save and drops keys the schema doesn't list. Add a field to `.pages.yml`, `src/types/knife.ts` and `src/lib/knives.ts` together.

## Netlify

`netlify.toml` builds with `npm run build` on Node 24. Pages CMS commits each photo upload on its own before saving the list, so commits that only touch `public/images/knives/` skip the deploy; the next list save deploys them. Overwriting an existing photo by hand therefore needs a manual deploy.

Environment variables: `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`. The publishable key is baked in at build time, so redeploy after changing it.

## Local development

```bash
npm install
npm run dev
```

Put Stripe test keys in `.env.local` under the same two variable names.
