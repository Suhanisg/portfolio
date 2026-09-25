# Suhani Goyal — Portfolio

A React + Vite portfolio built for full-stack / frontend developer job applications.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

Deploy the contents of `dist/` to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
  data/siteData.js      ← all your content lives here (name, links, experience,
                           skills, projects, certifications) — edit this file
                           first for any content change
  hooks/useReveal.js     ← small scroll-reveal hook used by each section
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    Experience.jsx / .css
    Skills.jsx / .css
    Projects.jsx / .css
    ProjectCard.jsx
    UIUXShowcase.jsx / .css
    Certifications.jsx / .css
    ResumeCTA.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
  App.jsx
  index.css              ← design tokens (colors, type, spacing) + globals
public/
  images/                ← placeholder project/UI screenshots — replace these
  favicon.svg
```

## Things to replace before you send this to recruiters

1. **Resume** — add your real PDF at `public/resume.pdf` (the Download Resume
   buttons already point at `/resume.pdf`).
2. **Project & UI screenshots** — swap the generated placeholders in
   `public/images/` for real screenshots, keeping the same file names, or
   update the paths in `src/data/siteData.js`.
3. **Certificate links** — each certification in `src/data/siteData.js` has a
   `url: '#'` placeholder; replace with your real certificate links.
4. **Contact form** — the form in `Contact.jsx` is fully functional as UI
   (validation, state, a submit handler) but isn't wired to send email yet.
   Easiest options:
   - [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — point
     the form's `onSubmit` at their endpoint, no backend needed.
   - A small serverless function (Vercel/Netlify function) using
     [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com/).

## Editing content

Almost everything text-based (name, role, bio, experience, skills, projects,
certifications, nav links) lives in `src/data/siteData.js` — you shouldn't
need to touch the component files for routine content edits.

## Notes

- No fake stats, testimonials, clients or live-demo links were added — GitHub
  buttons show "GitHub — private" where no public repo was given, and Live
  Demo buttons only appear where a URL was actually provided.
- Reduced-motion is respected (`prefers-reduced-motion`) and focus states are
  visible for keyboard navigation.
