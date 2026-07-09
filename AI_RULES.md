# Tech Stack & Rules

- React with TypeScript
- Vite as the build tool
- React Router for routing (keep routes in `src/App.tsx`)
- Tailwind CSS for styling
- shadcn/ui component library (pre-built components)
- Lucide React for icons
- Radix UI primitives (via shadcn/ui)
- No additional state management library unless needed (use React hooks)
- Source code in `src/` folder; pages in `src/pages/`; components in `src/components/`
- Main page is `src/pages/Index.tsx`

## Usage Rules

- Use shadcn/ui components as they are; if you need to modify behavior or appearance, create a new component that wraps or extends the shadcn/ui component rather than editing the original file.
- Always style with Tailwind CSS utility classes for layout, spacing, colors, typography, and other design aspects.
- Keep all route definitions in `src/App.tsx`; do not scatter routing logic elsewhere.
- Place page components in the `src/pages/` directory.
- Place reusable UI components in the `src/components/` directory.
- Whenever you create a new component, remember to import and use it in the appropriate page (typically `src/pages/Index.tsx` for the main view) so it appears in the preview.
- Use `lucide-react` icons for any icon needs; import specific icons as needed.
- Do not edit the files inside `src/components/` that come from shadcn/ui; treat them as immutable. If customization is required, create a wrapper component in `src/components/`.
- Write all code in TypeScript with strict typing; avoid `any` types unless absolutely necessary.
- Prefer functional components with React hooks (`useState`, `useEffect`, etc.) for state and side effects.
- Keep components small and focused; split complex logic into separate custom hooks or utility files when beneficial.
- Follow existing code style and formatting conventions in the project.