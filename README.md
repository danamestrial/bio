# Chayapol Bunnag — Profile Site

Personal portfolio built with **Astro** (static output), **Tailwind CSS v4**, and **TypeScript**.

## Requirements

- **Node.js ≥ 22.12.0** (Astro 7 requirement)

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:4321
```

```bash
npm run build    # static output to ./dist
npm run preview  # preview the production build
```

> Using pnpm? Swap `npm` for `pnpm` — a `pnpm-lock.yaml` is included.

## Structure

```
src/
  components/   # Hero, Section, About, Experience, Skills, Projects, Card, Education, Contact
  layouts/      # BaseLayout — <head>, fonts, scroll-reveal observer
  pages/        # index.astro — composes the single page
  data/         # profile.ts — all content, the single source of truth
  types/        # profile.ts — TypeScript interfaces
  styles/       # global.css — Tailwind import + design tokens
```

## Editing content

All copy lives in [`src/data/profile.ts`](src/data/profile.ts) and is typed by
[`src/types/profile.ts`](src/types/profile.ts). Components never hardcode strings —
edit the data file and the page updates.

Design tokens (colors, fonts) are CSS variables in
[`src/styles/global.css`](src/styles/global.css), exposed to Tailwind via `@theme`.
