# AI_RULES.md

You are working on a production-quality frontend project.

## IMPORTANT

Before making any changes, inspect the repository and use the technologies that already exist.

Do NOT assume the stack.

Do NOT migrate the project to another framework.

Do NOT introduce unnecessary dependencies.

---

## Tech Stack

This project uses:

- React 18
- JavaScript (.jsx) ONLY
- Vite
- React Router DOM
- CSS (global.css, index.css, navbar.css, etc.)
- Context API for state management
- Functional Components
- React Hooks
- Lazy Loading with React.lazy()
- Suspense
- Error Boundaries

DO NOT convert the project to:

- TypeScript
- Next.js
- Tailwind CSS
- shadcn/ui
- Material UI
- Chakra UI
- Redux
- MobX
- Vue
- Angular
- Svelte

unless explicitly requested.

---

## Project Structure

Follow the existing structure exactly.

src/

components/
pages/
routes/
context/
hooks/
services/
styles/
utils/
assets/
admin/

The admin application already exists inside:

src/admin/

Keep all admin code there.

Do NOT create another admin project.

---

## Coding Rules

Always:

- Write clean React JavaScript (.jsx)
- Use functional components
- Use hooks
- Keep components reusable
- Keep files small and modular
- Follow the existing naming conventions
- Follow the current folder structure
- Use React Router for navigation
- Use Context API where appropriate
- Keep imports organized
- Remove unused imports
- Remove dead code
- Write readable code
- Keep components production-ready

---

## Styling Rules

Use the existing CSS architecture.

Use:

- global.css
- index.css
- navbar.css
- error-pages.css

or create additional CSS files inside:

src/styles/

Do NOT:

- install Tailwind
- install Bootstrap
- install Material UI
- install Chakra
- install styled-components

unless explicitly requested.

---

## Routing

Use React Router DOM.

Keep public routes inside:

src/routes/AppRoutes.jsx

Keep admin routes inside:

src/admin/routes/AdminRoutes.jsx

Never break existing routes.

---

## Admin Rules

The admin panel is frontend only.

Authentication is currently mock/demo.

Do NOT attempt to create a backend.

Do NOT create APIs.

Do NOT add databases.

Prepare the frontend so it can easily connect to a backend later.

---

## Performance Rules

Always:

- lazy load pages
- avoid unnecessary renders
- split large components
- optimize images
- remove unused code
- minimize bundle size

---

## Accessibility

Always include:

- semantic HTML
- proper headings
- alt text
- keyboard accessibility
- aria labels where appropriate
- focus management

---

## Security

Never:

- hardcode secrets
- expose API keys
- use dangerouslySetInnerHTML without sanitization

Use the existing sanitize utility when needed.

---

## Code Quality

Every change must:

- pass ESLint
- build successfully
- avoid duplicate code
- avoid unnecessary dependencies
- maintain readability
- follow existing project conventions

---

## Before Finishing

Always verify:

- npm run build passes
- no ESLint errors
- no broken imports
- no broken routes
- no console errors
- no unused variables
- no duplicate components

Never guess the project structure.

Always inspect the repository before making changes.

Preserve the existing architecture unless explicitly instructed otherwise.