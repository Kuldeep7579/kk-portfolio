# Kuldeep Kumar — Data Analyst Portfolio

## Status: Work in progress (sections 1–7 of ~12 complete)

Built: Hero, About, Skills, Stats, Projects, Experience.
Remaining: Certifications, Services, Testimonials, Contact form, Footer, scroll-to-top, SEO meta, GitHub/LeetCode widgets.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

## Key files to know about

- `src/data/profile.js` — **single source of truth** for all content (your name, projects, skills, timeline, etc).
  Edit this file to change any text on the site without touching component code.
- `tailwind.config.js` — design tokens (colors, fonts, animations).
- `src/components/sections/` — one file per page section.
- `src/components/ui/` — reusable pieces (buttons, cards, cursor, background).

## Things you'll need to plug in later

- `src/data/profile.js` → `social` object: replace GitHub/LinkedIn URLs with your real profile links.
- `public/resume/` → drop your actual resume PDF here, matching the filename in `profile.resumeFile`.
- Project `github` / `demo` links in `profile.js` → point to your real repos once pushed.
- EmailJS keys (when Contact section is built) → your own service ID, template ID, public key from emailjs.com.
