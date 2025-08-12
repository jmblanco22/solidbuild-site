# SolidBuild Construction Site

Single page site built with React + TypeScript + Vite + Tailwind.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Replace images

Put your images into `/public/images` and update `src/data/projects.json` as needed.
The placeholders included here are just stand-ins.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub, go to Settings → Pages. Choose **GitHub Actions**.
3. Add the workflow below in `.github/workflows/pages.yml`.
4. Commit and push. The site will publish to `https://<user>.github.io/<repo>`.

```yaml
name: Deploy Vite site to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - uses: actions/deploy-pages@v4
```

### Base path
Vite config sets `base: './'` so assets work on Pages.
