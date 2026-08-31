# Reliable Properties

Property-detail website for Reliable Properties (Amanora Park Town, Pune), built with Next.js and deployed to GitHub Pages as a static export.

## Structure

- `app/page.tsx` — the published listing (site root)
- `app/properties/[slug]/` — per-property route + client component, statically generated for every sample listing in `lib/property-data.ts`
- `components/` — header, footer, mobile bottom bar, WhatsApp button
- `lib/property-data.ts` — listing data, agent info, WhatsApp link helpers
- `lib/property-images.ts` — gallery photo assignment
- `public/images/` — gallery photos (see `IMAGE_CREDITS.md`)
- `.github/workflows/pages.yml` — builds and deploys to GitHub Pages on every push to `main`

## Develop locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

Static output is written to `out/` (`next.config.mjs` sets `output: "export"`).

## Publish

Push to `main` — the GitHub Actions workflow builds and deploys automatically. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (one-time setup).

To use a custom domain, add a `CNAME` file at the repo root containing the domain name; the workflow copies it into the build output automatically.
