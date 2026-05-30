# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server (Turbopack, default in Next.js 16)
npm run build     # Production build (Turbopack)
npm run start     # Serve production build
npm run lint      # Run ESLint directly (next lint was removed in v16)
```

There is no test suite configured yet.

## Architecture

This is a **Next.js 16** app using the **App Router** with React 19, TypeScript (strict), and Tailwind CSS v4.

- `app/layout.tsx` — root layout; loads Geist Sans and Geist Mono from `next/font/google`, applies them as CSS variables
- `app/page.tsx` — home page (Server Component by default)
- `app/globals.css` — global styles; Tailwind is imported here via `@tailwindcss/postcss` (v4 syntax, not the v3 `@tailwind` directives)
- `public/` — static assets served at `/`
- Path alias `@/*` resolves to the project root

## Next.js 16 Breaking Changes to Know

- **Proxy replaces Middleware**: the interceptor file is `proxy.ts` (not `middleware.ts`); export a named `proxy` function or a default export
- **`next lint` removed**: linting now uses `eslint` directly; `next build` no longer runs lint
- **`params` is a Promise**: unwrap with `await params` in pages and layouts — `params.id` is a type error
- **`serverRuntimeConfig` / `publicRuntimeConfig` removed**: use `process.env` with `NEXT_PUBLIC_` prefix for client-accessible values; call `connection()` before `process.env` reads that must be runtime (not build-time)
- **`experimental.dynamicIO` renamed** to top-level `cacheComponents: true` in `next.config.ts`
- **AMP removed** entirely
- **Turbopack is the default** for both `next dev` and `next build`; adding a custom `webpack` config to `next.config.ts` will break the build unless you pass `--webpack`

Read `node_modules/next/dist/docs/` for the authoritative API reference for this version.
