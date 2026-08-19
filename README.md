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

All copy, links, and image paths live in `content/*.json`; images in `public/images/`.
Non-technical editing is done through [Pages CMS](https://app.pagescms.org) — the schema is
`.pages.yml`. See `EDITING.md` for the editor's guide. Design mockups from the redesign are in
`design/mockups/`.

### Onboarding an editor
1. They create a GitHub account.
2. Repo owner: Settings → Collaborators → invite their username (Write access).
3. They sign in at https://app.pagescms.org with GitHub and pick this repo.

## Contact form

The form in `src/pages/Contact.jsx` posts to `formEndpoint` in `content/site.json` (also editable in Pages CMS → Settings).
Recommended free option: create a form at https://formspree.io (or https://web3forms.com),
paste the endpoint URL into `formEndpoint`. If left empty, the form falls back to opening the
visitor's email client addressed to `contactEmail`.
