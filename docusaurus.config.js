// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DTG Docs',
  tagline: 'Tài liệu kỹ thuật DTG Corp',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dtg-corp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dtg-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DTG-Corp', // Usually your GitHub org/user name.
  projectName: 'dtg-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/DTG-Corp/dtg-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/DTG-Corp/dtg-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DTG Docs',
        logo: {
          alt: 'DTG Docs Logo',
          src: 'img/dtg-logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tài liệu',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://dtgcorp.com.vn',
            label: 'DTG Corp',
            position: 'right',
          },
          {
            href: 'https://dtgsoft.vn',
            label: 'R&D Center',
            position: 'right',
          },
          {
            href: 'https://cybergateway.vn',
            label: 'SOC Center',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tài liệu',
            items: [
              {
                label: 'Giới thiệu',
                to: '/docs/intro',
              },
              {
                label: 'AI Encyclopedia',
                to: '/docs/category/ai-encyclopedia',
              },
            ],
          },
          {
            title: 'Hệ sinh thái DTG',
            items: [
              {
                label: '🌐 DTG Corp',
                href: 'https://dtgcorp.com.vn',
              },
              {
                label: '🔬 R&D Center',
                href: 'https://dtgsoft.vn',
              },
              {
                label: '🛡️ SOC Center',
                href: 'https://cybergateway.vn',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'DTG Docs',
                href: 'https://github.com/DTG-Corp/dtg-docs',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DTG Corp. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
