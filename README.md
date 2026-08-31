# Reliable Properties

Property-detail page for Reliable Properties (Amanora Park Town, Pune) — the direct static export from the Claude Design project this site was designed in, deployed to GitHub Pages.

## Structure

- `index.html` — the page (exported from Claude Design's `Property-Detail.dc.html`, with real photos wired into the gallery)
- `support.js` — the Design Components runtime (loads React/ReactDOM from a CDN at page load; unmodified from the export)
- `image-slot.js` — the image-gallery component used by the page (unmodified from the export)
- `images/` — gallery photos (see `IMAGE_CREDITS.md`)
- `.github/workflows/pages.yml` — deploys this repo's static files to GitHub Pages on every push to `main`

## Preview locally

Serve the folder with any static file server, e.g. `python3 -m http.server`, then open `index.html`. It needs network access (the runtime scripts fetch React/ReactDOM/Babel from a CDN at load time).

## Publish

Push to `main` — the workflow deploys automatically. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (one-time setup).

To use a custom domain, add a `CNAME` file at the repo root containing the domain name; the workflow copies it into the deployed output automatically.
