# Sascan Meditech website (Next.js)

Next.js 16 (App Router) site for Sascan Meditech. It builds to a fully static site, so it can be hosted anywhere (Vercel, Netlify, cPanel/Hostinger, S3…).

## Run it

```bash
npm install
npm run dev      # editing preview at http://localhost:3000 (compiles each page on first visit, so it is slower)
npm run build    # production site written to ./out — upload that folder to your host
npx serve out    # preview the production build locally (this is how fast the live site is)
```

`npm run build` also runs `scripts/flatten-rsc.mjs`, which writes the per-page navigation data files under the
names the browser requests. Keep it: without it, instant page switching fails on plain static hosts.

## Where things live

| Path | What it is |
|---|---|
| `app/layout.jsx` | Page shell: self-hosted fonts (next/font), background grid, `SiteEffects` |
| `app/page.jsx` | Home page (`/`) |
| `app/<name>/page.jsx` | Other pages: `/about`, `/team`, `/partners`, `/advisors`, `/careers`, `/pbmt`, `/multimodal-imaging`, `/oralscan`, `/cerviscan`, `/vaguslite` |
| `components/Header.jsx` | Header and the Company / Technology / Products mega menus. Pass `active="company"` (or `technology`, `products`) to highlight a section |
| `components/Footer.jsx` | Footer |
| `components/site-effects.js` | Menus, scroll reveals, team pop-up, PBMT gallery, partner tabs, newsletter check. Re-runs after every page change |
| `components/SiteEffects.jsx` | Starts/stops `site-effects.js` when the page changes |
| `app/globals.css` | All styles (light theme only) |
| `public/assets/` | Images and logos |

## Adding a page

1. Create `app/<route>/page.jsx` (copy an existing page as a starting point).
2. Set its `metadata` title and description at the top.
3. Link to it with `<Link href="/route">` (from `next/link`) in `components/Header.jsx` and/or the footer.
