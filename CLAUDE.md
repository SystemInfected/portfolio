# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Sebastian Widin (sebastianwidin.se), built with Next.js (App Router) and GSAP animations. There is no test suite.

## Commands

Package manager is pnpm (see `packageManager` in package.json — use pnpm, not npm/yarn).

- `pnpm dev` — start dev server (Turbopack)
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — run `next lint`
- `pnpm check-packages` — list outdated deps (`pnpm outdated`)
- `pnpm update-packages` — update deps to latest (`pnpm update --latest`)

No test script exists in this repo.

## Architecture

**Routing & data flow**: App Router under `src/app`. The home page (`src/app/page.tsx`) assembles `Hero`, `NavBar`, `Featured`, and `SkillsAbout`. Project detail pages live at `src/app/portfolio/[portfolio]/page.tsx`.

**Portfolio content is markdown-driven, not database-backed.** Each project is a markdown file in `src/app/data/portfolio/*.md` with YAML frontmatter (`title`, `slug`, `order`, `url`, `source`, `responsibilities`, `tags`, `tech`, `images`). The dynamic route reads the file matching the `[portfolio]` slug at request/build time via `fs.readFileSync`, parses frontmatter with `gray-matter`, and renders the body with `marked`. `generateStaticParams` enumerates all files in that directory to statically generate one page per project. Adding a new project means adding a new `.md` file there — no code changes needed. Other static content (clients, featured items, history, skills) lives in JSON files alongside it (`src/app/data/*.json`).

**Contact form** posts to `src/app/api/contact/route.ts`, a route handler that sends mail via `nodemailer` using SMTP credentials from `NEXT_PUBLIC_MAIL_*` env vars.

**Styling**: SCSS modules per component under `src/styles`, mirroring the `src/components` tree (e.g. `components/Footer/Footer.tsx` ↔ `styles/Footer/Footer.module.scss`). Shared design tokens (colors, fonts, breakpoints, reusable component CSS strings) are in `src/styles/variables.ts` and `src/styles/variables/*.scss`; global styles are in `src/styles/Main.scss` and `_globals.scss`. Formatting: no semicolons, single quotes (see `.prettierrc.json`).

**Animation**: Hero section (`src/components/Hero`) and related SVG illustrations (`src/assets/hero`) use GSAP for animated illustrations (eye tracking, animated nodes).

**Path alias**: `@/*` maps to `src/*` (tsconfig).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
