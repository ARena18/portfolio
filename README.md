# Rena Ahn — Portfolio

A personal portfolio site built with React + Vite, styled around a cold-pastel,
technical design system (Space Grotesk / Inter / IBM Plex Mono, blue-lavender-mint
accents) and a custom animated node-graph as the hero's signature visual.

## Project structure

```
src/
  components/
    Nav.jsx / Nav.css
    Hero.jsx / Hero.css
    NetworkGraph.jsx     — signature animated SVG graph
    About.jsx / About.css
    Experience.jsx / Experience.css
    Projects.jsx / Projects.css
    Skills.jsx / Skills.css
    Education.jsx / Education.css
    Footer.jsx / Footer.css
  App.jsx
  index.css               — design tokens (colors, type, spacing) live here
  main.jsx
.github/workflows/deploy.yml   — auto-deploy to GitHub Pages on push to main
```

## Editing content

All the resume-derived content (roles, projects, skills, education) lives as
plain data arrays at the top of each component file in `src/components/`, so
you can update text without touching layout/markup. Colors and fonts are
CSS variables in `src/index.css` under `:root`.

## Run locally

```bash
npm install
npm run dev
```

Visit the printed `localhost` URL. Hot reload is on by default.

## Deploy to GitHub Pages

**Option A — GitHub Actions (recommended, already set up)**

1. Create a new GitHub repo and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**, and under **Build and deployment**,
   set **Source** to **GitHub Actions**.
3. Every push to `main` will now automatically build and deploy via
   `.github/workflows/deploy.yml`. Check the **Actions** tab for progress.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`
   (or `https://<your-username>.github.io/` if the repo is named exactly
   `<your-username>.github.io`).

**Option B — Manual `gh-pages` branch deploy**

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

Then in **Settings → Pages**, set **Source** to **Deploy from a branch** and
pick the `gh-pages` branch, `/ (root)` folder.

## Notes

- `vite.config.js` uses `base: './'` (relative paths), so the build works
  whether it's hosted at the domain root or under a repo subpath — no need
  to hardcode a repo name.
- Update the contact email, GitHub, and LinkedIn links in
  `src/components/Footer.jsx` if they ever change.
