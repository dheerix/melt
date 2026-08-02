# MELT Bakery

A maintainable Docusaurus 3 site for MELT, a founder-operated, made-to-order eggless home bakery serving Waterloo Region. It combines a custom public landing page with a privacy-safe Bakery OS documentation framework.

> [!WARNING]
> **Anything committed to a public GitHub repository can become public.** Hiding Bakery OS from navigation does not make its files private. Never commit customer data, a residential address, personal contact details, recipes, supplier accounts, costs, revenue, passwords, tokens, or private incidents. Use an access-controlled system for sensitive records; `private-data/` is ignored only as a local safety net.

## Local setup

Requires Node.js 20 LTS (Node 18+ is accepted by the project).

```bash
npm install
npm start
```

The development site includes Bakery OS navigation for easy editing. Build the same public-safe output used by GitHub Pages:

```bash
GITHUB_USERNAME=your-github-username \
GITHUB_REPOSITORY_NAME=melt-bakery \
SHOW_BAKERY_OS=false \
npm run build
```

Run `npm run typecheck` for a separate TypeScript check.

## Update the site

- Business details and policy placeholders: `src/config/business.ts`
- Products, descriptions, image paths, and availability: `src/data/products.ts`
- Homepage structure and copy: `src/pages/index.tsx`
- Visual system: `src/pages/index.module.css` and `src/css/custom.css`
- Bakery OS: Markdown files in `docs/`
- Photography guidance: `docs/photography-guide.md`

Replace files in `static/img/products/` with approved MELT photography and update product paths and alt text. The generated rasmalai cake image and illustrated product cards are placeholders; recommended crops and dimensions are in the photography guide.

Policy text labelled **Confirm with MELT** is deliberately unresolved. Confirm it before making a definitive public claim. The contact email is a placeholder and is not currently displayed.

## Bakery OS publication switch

Production navigation is hidden by default. Set `SHOW_BAKERY_OS=true` to show it. This is only discoverability control: Docusaurus still builds the docs, and all committed Markdown remains readable in a public repository.

If the documents ever contain sensitive information, remove them from the public repository and place them in a genuinely private system. Do not rely on navigation, `robots.txt`, unlisted URLs, or Git history rewrites as access control.

## GitHub Pages configuration

`docusaurus.config.ts` reads these environment variables:

```text
GITHUB_USERNAME=your-github-username
GITHUB_REPOSITORY_NAME=melt-bakery
```

For a project site, these create:

```text
url: https://your-github-username.github.io
baseUrl: /melt-bakery/
```

The workflow fills both values from the GitHub repository automatically. The sitemap and generated `robots.txt` use the resulting deployment URL.

If the repository itself is named `your-github-username.github.io`, change `baseUrl` in `docusaurus.config.ts` to `'/'` (or add an equivalent conditional) and use the account site URL.

## Create and push the repository

This project is initialized locally but no remote is created or contacted. To create a public repo with GitHub CLI and push it:

```bash
cd /Users/dj/Documents/Programming/melt
gh repo create melt-bakery --public --source=. --remote=origin
git push -u origin main
```

Or create an empty `melt-bakery` repository in GitHub, then:

```bash
cd /Users/dj/Documents/Programming/melt
git remote add origin https://github.com/YOUR_USERNAME/melt-bakery.git
git push -u origin main
```

In GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source. Pushes to `main` and manual workflow runs build and deploy through `.github/workflows/deploy.yml`.

For a future custom domain, add the domain in **Settings → Pages**, configure the DNS records GitHub specifies, enable HTTPS, and update `url`/`baseUrl` plus canonical references. Add a `static/CNAME` file only after the domain is confirmed.

## Launch checklist

- [ ] Replace `GITHUB_USERNAME` and verify the repository name/base URL.
- [ ] Replace placeholder images with approved MELT photography where available.
- [ ] Confirm every policy marked “Confirm with MELT.”
- [ ] Confirm whether the placeholder contact email should be replaced and displayed.
- [ ] Review products, dietary notes, and availability with MELT.
- [ ] Verify compliance, labelling, and food-safety requirements using current official sources.
- [ ] Confirm no address, customer data, recipes, costs, finances, credentials, or incidents are staged.
- [ ] Run `npm run typecheck` and the production build command above.
- [ ] Test navigation, Instagram links, mobile layout, keyboard focus, metadata, and structured data.
- [ ] Enable GitHub Pages using GitHub Actions and check the deployed URL.
- [ ] Review the allergy statement immediately before launch.

## Asset note

The raster hero placeholder was produced with the built-in image generator using this direction: premium editorial food photography of an ivory rasmalai-inspired celebration cake, pistachio and saffron detail, warm cream plaster, forest-green linen, restrained brass, soft window light, wide composition, no people/logos/text/prices. It is a visual concept, not evidence of an actual MELT product.
