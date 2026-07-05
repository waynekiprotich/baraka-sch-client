# AI Rules & Guidelines — Baraka School Kapsabet

This document outlines the tech stack, design system, and development rules for modifying or extending the Baraka School Kapsabet web application.

## Tech Stack

*   **React (v18)**: Built as a single-page application using Vite for fast development and optimized production builds.
*   **React Router DOM (v6)**: Handles client-side routing. All routes are defined in `src/App.jsx` and wrapped in a shared `Layout` component.
*   **Custom CSS Design System**: Styled using a bespoke CSS system defined in `src/index.css` with custom CSS variables, utility classes, and responsive design tokens.
*   **Dark Mode Support**: Managed via the custom `useTheme` hook, which toggles a `data-theme="dark"` attribute on the `html` element and persists the preference in `localStorage`.
*   **Scroll Animations**: Handled by the custom `Reveal` component using the `IntersectionObserver` API for smooth fade-in and slide-in effects.
*   **Interactive Components**: Custom-built lightweight components for UI patterns, including `Accordion`, `Tabs`, `Testimonials` (carousel), and `Lightbox`.
*   **Deterministic Gradients (`Tile`)**: Used as placeholders for photography using brand-color gradients (`p1` through `p6`) defined in `src/index.css`.

## Development Rules & Library Usage

### 1. Styling & Design System
*   **Do NOT install Tailwind CSS or external UI libraries** unless explicitly requested. The project relies on the custom design system in `src/index.css`.
*   Use the established CSS variables for colors (`--purple`, `--gold`, `--bg`, `--text`, etc.) and spacing/radii to maintain visual consistency.
*   Always support both light and dark modes by using the appropriate CSS variables or checking the theme state.

### 2. Component Structure
*   **Keep Components Small**: Aim for components under 100 lines of code. Create new files in `src/components/` for any new UI elements.
*   **Use Existing Components**:
    *   Use `<Reveal>` for scroll-triggered animations.
    *   Use `<Tile>` for image placeholders or grid items.
    *   Use `<PageHero>` for inner page headers.
    *   Use `<Counter>` for animated statistics.

### 3. Routing & Layout
*   All pages must be registered in `src/App.jsx` under the main `<Route element={<Layout />}>` block to ensure they inherit the global navigation, footer, and floating action buttons.
*   Use `<Link>` or `<NavLink>` from `react-router-dom` for internal navigation. Do not use standard `<a>` tags for internal links.

### 4. Forms & Interactivity
*   All forms (e.g., admissions, contact, newsletter) are client-side demos. They should show a temporary success state upon submission without reloading the page.
*   Do not add heavy form validation libraries unless requested; standard HTML5 validation attributes (`required`, `type="email"`, etc.) are preferred.