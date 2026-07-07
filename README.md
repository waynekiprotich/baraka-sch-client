# Baraka School Kapsabet

> **Nurturing Excellence, Character & Future Leaders**

A modern, accessible, and performant React (Vite) web application for Baraka School Kapsabet — a premium private mixed day school in Kapsabet, Nandi County, Kenya. Built with a custom design system, dark mode, scroll animations, and a10 and interactive components.

---

## 🌟 Features

- **Custom Design System** — Purple/Gold brand tokens, fluid typography, responsive spacing, and a signature "lane line" motif inspired by Kapsabet's running heritage
- **Dark Mode** — Persisted in `localStorage`, toggled via a smooth animated switch in the navbar
- **Scroll Animations** — `Reveal` component using `IntersectionObserver` for fade/slide-in effects
- **Interactive Components** — `Accordion` (FAQ), `Tabs` (curriculum levels), `Testimonials` (carousel), `Lightbox` (gallery), `Counter` (animated stats)
- **Deterministic Gradient Tiles** — Brand-color placeholders (`p1`–`p6`) for photography, zero external image dependencies
- **Accessibility First** — Semantic HTML, focus-visible outlines, skip links, ARIA labels, reduced-motion support
- **SEO & Schema** — Per-page JSON-LD structured data (School, AboutPage, EducationalProcedure, Blog, ImageGallery, LocalBusiness)
- **PWA Ready** — `manifest.json`, theme color, icons, offline-capable build output
- **Security Headers** — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy via `vercel.json` / `public/_headers`
- **Forms (Demo)** — Client-side only with sanitization helper; shows success toast state without page reload

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 (Vite) |
| Routing | React Router DOM v6 |
| Styling | Custom CSS Design System (`src/index.css`) — **No Tailwind, no UI libraries** |
| State | React hooks (`useState`, `useEffect`, `useRef`, `useCallback`) |
| Animations | Custom `Reveal` (IntersectionObserver), CSS transitions |
| Linting | ESLint (React, JSX-A11y, Hooks) |
| Formatting | Prettier |
| CI/CD | GitHub Actions (lint + build) |
| Deployment | Vercel / Netlify / Cloudflare Pages / Firebase Hosting |

---

## 📁 Project Structure

```
baraka-school-kapsabet/
├── public/
│   ├── images/
│   │   ├── logo.svg              # School crest
│   │   └── hero-illustration.svg # Hero decorative illustration
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json             # PWA manifest
│   └── _headers                  # Netlify security headers
├── src/
│   ├── components/
│   │   ├── Accordion.jsx         # FAQ accordion
│   │   ├── ChromeExtras.jsx      # Preloader, FAB stack, Cookie banner, Back-to-top
│   │   ├── Counter.jsx           # Animated number counter
│   │   ├── ErrorBoundary.jsx     # Global error catch UI
│   │   ├── Footer.jsx            # Site footer with newsletter
│   │   ├── Layout.jsx            # Root layout (Navbar, MobileMenu, Footer, ChromeExtras)
│   │   ├── Lightbox.jsx          # Gallery image lightbox
│   │   ├── MobileMenu.jsx        # Slide-in mobile navigation
│   │   ├── Navbar.jsx            # Desktop + mobile navbar, theme toggle, dropdown
│   │   ├── PageHero.jsx          # Inner page hero with breadcrumb
│   │   ├── Reveal.jsx            # Scroll-triggered reveal wrapper
│   │   ├── SEO.jsx               # Dynamic meta tags + JSON-LD injection
│   │   ├── Tabs.jsx              # Tabbed content panels
│   │   ├── Testimonials.jsx      # Horizontal scroll carousel
│   │   └── Tile.jsx              # Brand-gradient placeholder / gallery item
│   ├── hooks/
│   │   └── useTheme.js           # Dark mode toggle + localStorage persistence
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── About.jsx             # History, mission, leadership, timeline, stats
│   │   ├── Academics.jsx         # CBC pathways, departments, philosophy, calendar
│   │   ├── Admissions.jsx        # Process, requirements, fees table, FAQ, application form
│   │   ├── SchoolLife.jsx        # Clubs, sports, arts, gallery preview, student stories
│   │   ├── Gallery.jsx           # Masonry grid + lightbox + video embed
│   │   ├── News.jsx              # Featured article + filterable cards + newsletter
│   │   ├── Contact.jsx           # Location, hours, emergency, WhatsApp, FAQ accordion
│   │   ├── NotFound.jsx          # 404 page
│   │   └── 500.jsx               # 500 error page
│   ├── styles/
│   │   ├── error-pages.css       # 404/500 page styles
│   │   └── navbar.css            # Mobile nav toggle styles
│   ├── utils/
│   │   └── sanitize.js           # Client-side input sanitization for demo forms
│   ├── App.jsx                   # Routes + lazy-loaded pages + ErrorBoundary
│   ├── main.jsx                  # Entry point (BrowserRouter, StrictMode)
│   └── index.css                 # Complete design system (tokens, components, utilities)
├── .github/workflows/production.yml  # CI: lint + build
├── vercel.json                   # Vercel config (SPA fallback, headers, cache)
├── package.json
├── vite.config.js
├── jsconfig.json
├── .eslintrc.cjs
├── .prettierrc
└── AI_RULES.md                   # Development guidelines for AI assistants
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (comes with Node)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/baraka-school-kapsabet.git
cd baraka-school-kapsabet

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in terminal).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on `src/` |
| `npm run format` | Format code with Prettier |

---

## 🎨 Design System Overview

The entire visual language lives in **`src/index.css`**. Key tokens:

```css
:root {
  /* Brand */
  --purple:        #5B2C90;
  --purple-light:  #6E3CBC;
  --purple-dark:   #3D1B65;
  --gold:          #F4B400;
  --gold-soft:     #FBD98A;

  /* Accents (Primary School) */
  --sky-blue:      #38BDF8;
  --grass-green:   #4ADE80;
  --coral-pink:    #F87171;
  --sunny-yellow:  #FBBF24;

  /* Layout */
  --container: 1240px;
  --nav-h: 84px;
  --r-sm: 10px; --r-md: 18px; --r-lg: 28px; --r-pill: 100px;
}
```

**Dark mode** is activated by `[data-theme="dark"]` on `<html>` (managed by `useTheme` hook).

### Utility Classes (from `index.css`)

| Class | Purpose |
|-------|---------|
| `.container` | Max-width wrapper with horizontal padding |
| `.grid`, `.grid-2/3/4` | Responsive grid layouts |
| `.card`, `.card-glass` | Elevated content cards |
| `.btn`, `.btn-primary/secondary/ghost` | Button variants |
| `.section-head`, `.eyebrow` | Section headers with label |
| `.reveal`, `.reveal-left/right`, `.stagger` | Scroll animations |
| `.tile`, `.p1–.p6` | Gradient placeholder tiles |
| `.stats-strip`, `.stat-cell` | Key metrics row |
| `.split`, `.split-media`, `.split-body` | Image + text layouts |
| `.timeline`, `.timeline-item` | Vertical timeline |
| `.accordion-item`, `.accordion-trigger`, `.accordion-panel` | FAQ accordion |
| `.tabs-nav`, `.tab-btn`, `.tab-panel` | Tabbed interface |
| `.news-card`, `.news-feature` | Article cards |
| `.masonry`, `.m-item` | Pinterest-style gallery grid |
| `.fee-table` | Styled fee structure table |
| `.steps`, `.step` | Numbered process steps |
| `.cta-band` | Full-width call-to-action section |

---

## 🧩 Component Usage Examples

### Reveal (Scroll Animation)

```jsx
import Reveal from './components/Reveal.jsx';

<Reveal dir="left" delay={100} className="card">
  <h3>Animated on Scroll</h3>
  <p>This fades in from the left after 100ms delay.</p>
</Reveal>
```

### Tile (Gradient Placeholder / Gallery Item)

```jsx
import Tile from './components/Tile.jsx';

{/* As a brand-gradient placeholder */}
<Tile swatch="p3" title="Science Lab" label="Academics" />

{/* As a clickable gallery item with background image */}
<Tile
  swatch="p1"
  bgImage="https://example.com/photo.jpg"
  alt="Students in classroom"
  onClick={() => openLightbox()}
/>
```

### Counter (Animated Number)

```jsx
import Counter from './components/Counter.jsx';

<div className="stat-cell">
  <Counter target={98} suffix="%" duration={1400} />
  <span>Pass Rate</span>
</div>
```

### Accordion (FAQ)

```jsx
import Accordion from './components/Accordion.jsx';

<Accordion
  items={[
    { q: 'Question?', a: 'Answer.' },
    { q: 'Another?', a: 'Another answer.' }
  ]}
  defaultOpen={0}
/>
```

### Tabs

```jsx
import Tabs from './components/Tabs.jsx';

<Tabs
  tabs={[
    { key: 'tab1', label: 'Tab One', content: <p>Content 1</p> },
    { key: 'tab2', label: 'Tab Two', content: <p>Content 2</p> }
  ]}
  defaultKey="tab1"
/>
```

### SEO (Per-Page Meta + JSON-LD)

```jsx
import SEO from './components/SEO.jsx';

<SEO
  title="Page Title"
  description="Page description for search engines."
  schema={{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Title"
  }}
/>
```

---

## 🔧 Configuration

### Environment Variables

No required environment variables for the frontend. All forms are client-side demos.

### Vercel Deployment (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

### Netlify Deployment (`public/_headers`)

Same security headers applied via Netlify's `_headers` file.

---

## ♿ Accessibility Checklist

- [x] Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [x] Skip-to-content link (first focusable element)
- [x] Focus-visible outlines on all interactive elements
- [x] ARIA labels on icon-only buttons
- [x] `aria-expanded` / `aria-controls` on dropdowns and accordions
- [x] Reduced-motion media query respected
- [x] Color contrast ratios ≥ 4.5:1 (WCAG AA)
- [x] Alt text on all content images; decorative images use `alt=""`
- [x] Form labels associated with inputs (`htmlFor` / `id`)
- [x] Heading hierarchy (h1 → h2 → h3) maintained per page

---

## 📱 PWA Support

- `public/manifest.json` defines name, icons, theme color, display mode
- Add a service worker (e.g., `vite-plugin-pwa`) for offline caching if desired

---

## 🧪 Testing

No test runner configured by default. Recommended additions:

```bash
# Unit / component tests
npm add -D vitest @testing-library/react @testing-library/user-event jsdom

# E2E tests
npm add -D playwright
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Follow the code style (ESLint + Prettier): `npm run format`
4. Ensure lint passes: `npm run lint`
5. Build successfully: `npm run build`
6. Submit a Pull Request

### Code Style Rules

- **No Tailwind / external UI libraries** — use the design system in `src/index.css`
- **Components ≤ 100 lines** — create new files in `src/components/`
- **Use existing components** (`Reveal`, `Tile`, `PageHero`, `Counter`, `Accordion`, `Tabs`, `Testimonials`, `Lightbox`)
- **All pages under `<Layout>`** — register routes in `src/App.jsx`
- **Forms are demo-only** — show success state client-side, no backend calls
- **Accessibility first** — never remove focus styles, skip links, or ARIA attributes

---

## 📄 License

Proprietary — Baraka School Kapsabet. All rights reserved.

---

## 🙏 Acknowledgements

- **Fonts**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (body) via Google Fonts
- **Icons**: Custom inline SVGs (no icon library dependency)
- **Placeholder Photography**: Deterministic CSS gradients (`p1`–`p6`) + [Unsplash](https://unsplash.com) for demo images
- **Inspiration**: Kapsabet's world-renowned running heritage — the "lane line" motif runs through the design

---

## 📞 Contact

**Baraka School Kapsabet**  
Kapsabet–Eldoret Road, Kapsabet, Nandi County, Kenya  
📞 +254 700 123 456  
✉️ info@barakaschoolkapsabet.ac.ke  
🌐 [barakaschoolkapsabet.ac.ke](https://barakaschoolkapsabet.ac.ke)

---

*Built with care for the Baraka community. 💜💛*