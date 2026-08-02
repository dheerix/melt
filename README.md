# MELT

MELT is a founder-operated, made-to-order eggless home bakery serving Waterloo Region. This repository manages the public landing page and private-minded business planning framework.

## Repository structure

- `website/` — the deployable Docusaurus landing page and public assets
- `docs/` — strategy, research, playbooks, operations, SOPs, and photography guidance
- `private-data/` — ignored local working area; see its example README

Only `website/build` is uploaded to GitHub Pages. The repository README and root `docs/` are not part of the website build.

> [!WARNING]
> Repository visibility and website visibility are separate. A GitHub Pages deployment is normally public even when its source repository is private. Never commit customer data, residential addresses, personal contact details, recipes, supplier accounts, costs, revenue, credentials, or private incidents.

## Run the landing page locally

Requires Node.js 20 or newer.

```bash
cd website
npm install
npm start
```

Build and type-check:

```bash
cd website
npm run build
npm run typecheck
```

## Edit public content

- Business details and policy placeholders: `website/src/config/business.ts`
- Product collection: `website/src/data/products.ts`
- Landing page: `website/src/pages/index.tsx`
- Visual design: `website/src/pages/index.module.css` and `website/src/css/custom.css`
- Images: `website/static/img/`

The generated rasmalai image and SVG product artwork are placeholders. Replace them with approved MELT photography and accurate alt text. Do not publish fabricated prices or definitive policies that MELT has not confirmed.

## Manage the roadmap and operating documentation

Root-level `docs/` contains Bakery OS strategy and SOP templates. These files are for managing the business repository and are deliberately excluded from Docusaurus. Edit them as Markdown and keep all sensitive records outside Git.

Hiding or excluding documentation from a build does not make committed files private if the repository later becomes public.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml`:

1. Installs dependencies in `website/`.
2. Builds only the Docusaurus landing-page application.
3. Uploads only `website/build`.
4. Deploys the artifact with GitHub Pages Actions.

For this repository, the site URL is:

```text
https://dheerix.github.io/melt/
```

In GitHub, select **Settings → Pages → Build and deployment → GitHub Actions**. Do not select “Deploy from a branch”; that can expose rendered repository content instead of the Docusaurus build.

After changing the publishing source, run **Actions → Deploy to GitHub Pages → Run workflow** or push a commit to `main`.

## Launch checklist

- [ ] GitHub Pages source is set to **GitHub Actions**.
- [ ] The deployment shows the MELT landing page, not this README.
- [ ] Product imagery and copy are approved.
- [ ] Policies marked “Confirm with MELT” are reviewed.
- [ ] No sensitive business or customer information is committed.
- [ ] Instagram links work.
- [ ] Mobile and desktop layouts are checked.
- [ ] Production build and type-check pass.
