// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "겟차 프론트엔드 팀입니다",
  tagline: "개발 가이드",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/getcha_frontend_docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/getcha_favicon.ico",
  organizationName: "getcha", // Usually your GitHub org/user name.
  projectName: "getcha_frontend_docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hojunin/getcha_frontend_docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/hojunin/getcha_frontend_docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "web-docs",
        path: "web-docs",
        routeBasePath: "web-docs",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "utils-docs",
        path: "utils-docs",
        routeBasePath: "utils-docs",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "Keywords", content: "겟차, 프론트엔드, 겟차 프론트엔드" },
      ],
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
      navbar: {
        title: "겟차 프론트엔드 팀",
        logo: {
          alt: "Getcha_Logo",
          src: "img/getcha_logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "앱",
          },
          {
            to: "/web-docs/intro",
            label: "웹",
            position: "left",
          },
          {
            to: "/utils-docs/intro",
            label: "유틸",
            position: "left",
          },
          { to: "/blog", label: "블로그", position: "left" },
          {
            href: "https://m.getcha.kr",
            label: "겟차 놀러가기",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "겟차 서비스",
            items: [
              {
                label: "겟차",
                href: "https://m.getcha.kr/",
              },
              {
                label: "겟차 커머스",
                href: "https://naver.com",
              },
              {
                label: "겟차 중고차",
                href: "https://github.com",
              },
            ],
          },
          {
            title: "동료를 찾아요!",
            items: [
              {
                label: "복지 & 동료",
                to: "/blog",
              },
              {
                label: "지원하러 가기",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Getcha Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
