# sangeeta-site

Personal site for Sangeeta Singh-Kurtz — a static Vite + React landing page. No database, no backend.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub, import the repo in Vercel (framework auto-detected: Vite). `vercel.json` already
rewrites all routes to `index.html` for client-side routing.

## Editing content

All copy, links, and image paths live in `src/content.jsx`. Images are in `public/images/`.

## Contact form

The form in `src/pages/Contact.jsx` posts to `site.formEndpoint` (set in `src/content.jsx`).
Recommended free option: create a form at https://formspree.io (or https://web3forms.com),
paste the endpoint URL into `formEndpoint`. If left empty, the form falls back to opening the
visitor's email client addressed to `site.contactEmail`.
