# Reliable Properties

Website for Reliable Properties (Amanora Park Town, Pune), deployed to GitHub Pages.

This is a hand-built implementation of the Property Detail page design (from the Claude Design handoff bundle), in plain HTML/CSS/JS — no build step, no framework runtime. Home, Properties, Sell, About, and Contact are minimal stub pages so navigation works end to end; only Property Detail is fully built out.

## Structure

- `property-detail.html` + `js/property-detail.js` — the main page. Reads a listing by `?slug=` from `js/data.js`, renders the gallery (with a full-screen lightbox), facts, description, amenities, location, and the sticky enquiry sidebar (Call / WhatsApp / enquiry form).
- `properties.html` — a working listing page (cards link into `property-detail.html?slug=...`) so every mock property is reachable.
- `index.html`, `sell.html`, `about.html`, `contact.html` — minimal stubs, not full builds.
- `css/style.css` — shared styling (navy/gold palette, Spectral + Manrope type, single 1119px responsive breakpoint).
- `js/data.js` — shared mock property/testimonial/service data.
- `js/main.js` — shared header/mobile-menu/WhatsApp-link behavior across pages.
- `images/` — real property/Amanora photos, wired into the Future Towers 3 BHK listing's gallery (see `IMAGE_CREDITS.md`); every other mock listing uses styled placeholder tiles.
- `.github/workflows/pages.yml` — deploys the static files to GitHub Pages on every push to `main`.

## Preview locally

No build step and no network dependency. Either open `property-detail.html` directly in a browser, or serve the folder with any static file server, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000/property-detail.html`.

## Publish

Push to `main` — the workflow deploys automatically. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (one-time setup).

To use a custom domain, add a `CNAME` file at the repo root containing the domain name; the workflow copies it into the deployed output automatically.
