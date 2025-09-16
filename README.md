WorkSocial India – Static Site
====================================

A responsive, accessible marketing site for financial services built with plain HTML, CSS, and a little JavaScript. No build step required.

Quick Start
-----------
- Open `index.html` directly in a browser; or
- Serve locally for correct caching and routing:
  - Node: `npx serve -s .`
  - Python: `python -m http.server 8080`

Deploy to Vercel
----------------
- Install CLI: `npm i -g vercel`
- First deploy (interactive): `vercel`
- Production deploy: `vercel --prod`

Config is in `vercel.json:1`:
- Clean URLs (e.g., `/pricing` resolves to `pricing.html`)
- Long‑term caching for files under `assets/`

Project Structure
-----------------
- `index.html:1` – Home with hero and CTA
- `solutions.html:1`, `pricing.html:1`, `resources.html:1`, `about.html:1`, `contact.html:1`
- `assets/styles.css:1` – Responsive design, light/dark
- `assets/script.js:1` – Mobile nav, simple form handling
- `assets/images/hero-desktop.(avif|webp|jpg)`, `assets/images/hero-mobile.(avif|webp|jpg)`

Customize
---------
- Brand and copy: edit text in each HTML page
- Colors: update CSS variables in `assets/styles.css:1` under `:root`

Notes
-----
- The hero image uses `<picture>` with AVIF/WebP and JPG fallback
- `.nojekyll` is included for GitHub Pages compatibility
