// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config.cjs'; // add this

const baseUrl = process.env.IS_LOCAL ? '/Users/roybailey/Coding/github/research-docusaurus/build/' : '/research-docusaurus/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Showcase',
  tagline: 'Docusaurus React Showcase',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://roybailey.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'roybailey', // Usually your GitHub org/user name.
  projectName: 'research-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/..../',
        },
        theme: {
          customCss: [
            // custom css
            // './static/showcase.css',
            './src/css/custom.scss',
            './src/css/custom.css'
          ],
        },
      }),
    ],
  ],

  staticDirectories: [
    '../react-showcase/src',
    'static',
    'src'
  ],
  scripts: [
    // jQuery (necessary for Bootstrap's JavaScript plugins)
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
      async: false,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js',
      async: false,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js",
      async: false,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js",
      async: false,
    },
  ],
  stylesheets: [
    'https://fonts.cdnfonts.com/css/titillium',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
    'https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css',
    baseUrl+'/showcase/css/animate.css',
    baseUrl+'/showcase/css/showcase.css',
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'Docusaurus React Showcase',
          logo: {
            alt: 'Docusaurus React Showcase',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'docSidebar',
              position: 'left',
              label: 'Showcase Components',
            },
            {
              href: 'https://github.com/roybailey',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        docs: {
          sidebar: {
            hideable: true,
          },
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Content',
              items: [
                {
                  label: 'Components',
                  to: '/docs/category/showcase---components',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/roybailey',
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/roybailey',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/roybaileybiz',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Odinium, Ltd.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),

  plugins: [
      'docusaurus-plugin-sass',
      tailwindPlugin
  ],
};

export default config;
