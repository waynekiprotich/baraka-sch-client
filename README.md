# Baraka School Kapsabet — React Project

A componentized React (Vite) build of the Baraka School Kapsabet site, sharing the same
purple/gold design system as the static HTML/CSS version.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

- `src/index.css` — full design system (tokens, components) — same system as the static build
- `src/components/` — Navbar, MobileMenu, Footer, Layout, Reveal (scroll-in), Counter (animated
  stats), Tabs, Accordion, Testimonials (carousel), Lightbox, Tile (brand-color placeholder for
  photography), PageHero, ChromeExtras (preloader, WhatsApp FAB, back-to-top, cookie banner)
- `src/pages/` — Home, About, Academics, Admissions, School Life, Gallery, News, Contact,
  Parent Portal, NotFound
- `src/hooks/useTheme.js` — dark-mode toggle persisted to `localStorage`
- `public/images/` — brand mark (crest) and hero illustration SVGs

## Notes

- Routing is via `react-router-dom` — every page lives under the shared `Layout`, so nav,
  footer, mobile menu, FAB and cookie banner stay consistent across pages automatically.
- All forms (application, tour booking, contact, newsletter) are **demo-only** — they show a
  success state client-side but don't send data anywhere. Wire them to your backend/API of
  choice by replacing the `onSubmit` handlers.
- "Photography" throughout is represented with brand-color gradient tiles (`Tile` component)
  rather than real images — swap the `.tile::before` background in `index.css`, or replace
  `<Tile>` usages with `<img>` tags, once real photography is available.
- Verified with `npm install && npm run build` — production build succeeds with no errors.
# Baraka_SCH-Frontend
