# Dev Portfolio

Personal portfolio built with **Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stack

| Tool | Version |
|------|---------|
| Next.js | 15 (App Router) |
| TypeScript | 5 |
| Tailwind CSS | v4 |
| Framer Motion | latest |

## Structure

```
src/
  app/
    layout.tsx      # Root layout + Google Fonts
    page.tsx        # Main page — assembles all sections
    globals.css     # CSS variables + Tailwind
  components/
    Nav.tsx         # Fixed nav + mobile menu
    Hero.tsx        # Hero with stagger animation
    About.tsx       # About + stats grid
    Skills.tsx      # Tech stack groups
    Projects.tsx    # Project cards
    Experience.tsx  # Work/education timeline
    Contact.tsx     # Contact link panel
    Footer.tsx      # Footer
    FadeIn.tsx      # Reusable scroll-triggered fade wrapper
```

## Customisation

- **Personal info** — update name, email, links in each component
- **Projects** — edit the `projects` array in `src/components/Projects.tsx`
- **Experience** — edit the `experiences` array in `src/components/Experience.tsx`
- **Colors** — all CSS variables in `src/app/globals.css`

## Deploy

```bash
npm run build   # Production build
npx vercel      # Deploy to Vercel (recommended)
```
