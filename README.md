# Baraka School Kapsabet — React Project

A componentized React (Vite) build of the Baraka School Kapsabet site, sharing the same
purple/gold design system as the static HTML/CSS version.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint      # eslint check
npm run format    # prettier write
```

## Structure

- `src/index.css` — full design system (tokens, components)
- `src/components/` — Navbar, MobileMenu, Footer, Layout, Reveal (scroll-in), Counter (animated
  stats), Tabs, Accordion, Testimonials (carousel), Lightbox, Tile (brand-color placeholder for
  photography), PageHero, ChromeExtras (preloader, WhatsApp FAB, back-to-top, cookie banner),
  ErrorBoundary (global error catch)
- `src/pages/` — Home, About, Academics, Admissions, School Life, Gallery, News, Contact,
  Parent Portal, NotFound, 500
- `src/hooks/useTheme.js` — dark-mode toggle persisted to `localStorage`
- `src/utils/sanitize.js` — input sanitization helper for demo forms
- `public/images/` — brand mark (crest) and hero illustration SVGs
- `public/robots.txt`, `public/sitemap.xml`, `public/manifest.json` — SEO & PWA metadata
- `vercel.json` / `public/_headers` — security headers & cache policy

## Security

Deploys enforce: Content-Security-Policy, X-Frame-Options: DENY, X-Content-Type-Options: nosniff,
Referrer-Policy, and Permissions-Policy via `vercel.json` (Vercel) or `public/_headers` (Netlify).

## Deployment

Static build output in `dist/` works on Vercel, Netlify, Cloudflare Pages, and Firebase Hosting.
All routes SPA-fallback to `index.html` (configured in `vercel.json`; add a `/* /index.html` redirect
on other hosts).

## Notes

- Routing is via `react-router-dom` — every page lives under the shared `Layout`.
- All forms are **demo-only** — they show a success state client-side but don't send data anywhere.
- "Photography" is represented with brand-color gradient tiles (`Tile` component) or Unsplash URLs.
- Verified with `npm install && npm run build` — production build succeeds with no errors.