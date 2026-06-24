# Project

Personal profile/portfolio site for Chayapol Bunnag. Astro (static) + Tailwind CSS v4 + TypeScript. Single page.

## Gotchas

- **Node ≥ 22.12.0 required** (Astro 7). The default shell here runs Node 18 — switch first (`nvm use 22`) or builds fail with a native-binding error.
- **Use pnpm** (a `pnpm-lock.yaml` is committed). Installing under Node 18 skips the Tailwind native binding; reinstall under Node 22+ if you hit `@tailwindcss/oxide` errors.

## Content is data-driven

All copy lives in `src/data/profile.ts`, typed by `src/types/profile.ts`. Components consume props from there — **never hardcode strings in components**. To change content, edit the data file.

Experience is grouped by workplace: one `Experience` entry per company, with `roles[]`, a single `summary`, and a single `skills[]`.

## Styling

Tailwind v4 via `@tailwindcss/vite`. Design tokens are CSS variables in `src/styles/global.css` under `@theme` (e.g. `--color-accent`), exposed as utilities like `text-accent`. No inline styles.

## SEO / deploy

- Deployed URL is set as `site` in `astro.config.mjs` (`https://chayapolb.me`) — drives canonical, OG image URL, sitemap, and `robots.txt`.
- `public/og.png` is a **static** social-preview image; regenerate it if the name/headline changes.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
