# Adynext — Digital Agency Website

A premium, animated marketing website for **Adynext**, built with Next.js
(App Router), Tailwind CSS, Framer Motion, GSAP and Lenis smooth scroll.

## Tech stack

- **Next.js 14** (App Router, JavaScript only — no TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals, page/menu transitions and micro-interactions
- **GSAP** available for any additional scroll-triggered animation
- **Lenis** for buttery smooth scrolling
- **Lucide Icons**
- **Embla Carousel** for the testimonials slider
- **React Hook Form** for the contact form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

The project is ready to deploy directly to **Vercel** — just import the
repository and deploy, no configuration required.

## Project structure

```
app/                  # App Router routes (page.js per route)
  about/
  services/
  projects/
  case-studies/
  pricing/
  blog/
  careers/
  contact/
  privacy/
  terms/
  layout.js           # Root layout, fonts, metadata, JSON-LD
  page.js              # Home page
  sitemap.js           # Dynamic sitemap.xml
  robots.js            # Dynamic robots.txt
  not-found.js         # Custom 404
  globals.css

components/
  layout/              # Navbar, Footer, SmoothScroll, CursorFollower, Loader
  home/                # All homepage sections (Hero, Services, Projects, etc.)
  ui/                  # MagneticButton, RevealText, AnimatedCounter
  ContactForm.jsx

lib/
  data.js              # All site copy & content (services, projects, pricing, FAQ...)
  utils.js             # cn() className helper
```

## Content

All copy lives in `lib/data.js` — update services, pricing, testimonials,
FAQs, blog posts and project case studies from a single file.

## Design system

Colors, radii and type scale are defined in `tailwind.config.js` and
`app/globals.css`:

- Background `#FFFFFF`, Secondary `#F8F8F8`, Ink/Accent `#111111`
- Muted text `#6B7280`, Border `#E5E7EB`
- Card radius `24px`, buttons fully rounded
- Display font: Space Grotesk · Body font: Inter (swap in `app/layout.js`
  for General Sans / Satoshi if you have licenses for them)

## Notes

- Contact form submission is simulated client-side — wire `ContactForm.jsx`
  up to your email/CRM endpoint of choice.
- Hero and About imagery uses Unsplash placeholders via `next/image` —
  swap in your own photography before launch.
- Favicon, app icons and the OG image are lightweight SVG placeholders in
  `public/` — replace with final brand assets.
