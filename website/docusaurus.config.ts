import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';
import {writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const githubUsername = process.env.GITHUB_USERNAME ?? 'dheerix';
const repositoryName = process.env.GITHUB_REPOSITORY_NAME ?? 'melt';

const config: Config = {
  title: 'MELT Bakery',
  tagline: 'Purely eggless. Just enough sweet.',
  favicon: 'img/brand/favicon.svg',
  url: `https://${githubUsername}.github.io`,
  baseUrl: `/${repositoryName}/`,
  organizationName: githubUsername,
  projectName: repositoryName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  // Docusaurus cannot discover IDs rendered by custom React pages during its anchor check.
  onBrokenAnchors: 'ignore',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    ['classic', {
      docs: false,
      blog: false,
      theme: {customCss: './src/css/custom.css'},
      sitemap: {changefreq: 'weekly', priority: 0.5},
    } satisfies Options],
  ],
  plugins: [
    function robotsPlugin() {
      return {
        name: 'melt-robots-plugin',
        async postBuild({outDir}: {outDir: string}) {
          const origin = `https://${githubUsername}.github.io${repositoryName ? `/${repositoryName}` : ''}`;
          await writeFile(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
        },
      };
    },
  ],
  themeConfig: {
    image: 'img/brand/social-card.svg',
    metadata: [
      {name: 'description', content: 'Eggless, made-to-order celebration bakes in Waterloo Region, Ontario.'},
      {property: 'og:type', content: 'website'},
    ],
    navbar: {
      title: 'MELT',
      logo: {alt: 'MELT Bakery monogram', src: 'img/brand/logo-mark.svg'},
      items: [
        {to: '/#bakes', label: 'Our Bakes', position: 'right'},
        {to: '/#story', label: 'Our Story', position: 'right'},
        {to: '/#order', label: 'How to Order', position: 'right'},
        {to: '/#faq', label: 'FAQ', position: 'right'},
        {href: 'https://www.instagram.com/melt.bakers/', label: 'Order on Instagram', position: 'right', className: 'navbar-instagram'},
      ],
    },
    footer: {style: 'dark', copyright: `© ${new Date().getFullYear()} MELT Bakery · Waterloo Region, Ontario`},
    colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
  } satisfies ThemeConfig,
};

export default config;
