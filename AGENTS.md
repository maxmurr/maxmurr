# AGENTS.md

## Commands

```bash
bun install        # Install dependencies
bun run dev        # Start Next.js dev server
bun run build      # Production build
bun run lint       # ESLint (flat config, core-web-vitals + typescript)
```

## Tech Stack

- **Next.js 16** with React 19, React Compiler enabled, App Router
- **Tailwind CSS v4** (PostCSS plugin, no tailwind.config — uses CSS-based config in `globals.css`)
- **shadcn/ui** (new-york style, Radix UI primitives, lucide icons)
- **Tailwind CSS transitions** for animations (CSS-only, no JS animation library)
- **next-themes** for dark/light mode (default: dark)
- **Zod v4** for validation, **react-hook-form** for forms
- **Bun** as package manager (bun.lock)

## Architecture

Personal portfolio site. Single-page layout with sections driven by `config/site.ts` (`SITE_CONFIG` constant).

```
app/            # Next.js App Router pages + generated icons (icon.tsx, apple-icon.tsx)
components/
  ui/           # shadcn/ui components (do not manually edit — use `bunx shadcn add`)
  layout/       # Header, Footer
  motion/       # Animation components (currently unused)
  providers/    # ThemeProvider
config/site.ts  # All site content: nav, projects, experience, skills, social links
lib/utils.ts    # cn() utility
hooks/          # Custom hooks (use-mobile)
```

## Key Patterns

- `@/` path alias maps to project root
- All content is centralized in `SITE_CONFIG` — edit `config/site.ts` to change site content
- `components/ui/` is shadcn-managed — add components via `bunx shadcn add <component>`
- Layout components (`Header`, `Footer`) and page are "use client" where interactivity is needed; the root layout is a Server Component
- Global `prefers-reduced-motion` media query disables all animations/transitions for accessibility
