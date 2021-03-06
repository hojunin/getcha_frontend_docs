// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "🚘 겟차 프론트엔드 챕터입니다",
  tagline: "React & React Native 개발 가이드",
  url: "https://hojunin.github.io",
  baseUrl: "/getcha_frontend_docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/getcha_favicon.ico",
  organizationName: "getcha",
  projectName: "getcha_frontend_docs",

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
        gtag: {
          trackingID: "G-GED69DZF72",
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
        {
          name: "Keywords",
          content:
            "겟차, 프론트엔드, 겟차 프론트엔드, 기술블로그, 기술, 겟차 기술 블로그, 겟차 프론트엔드 기술 블로그",
        },
      ],
      algolia: {
        appId: "1AE76JL4OP",
        apiKey: "e0f179e8ee37140bb5a083e9d4baaf67",
        indexName: "getcha-frontend",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
      },
      navbar: {
        title: "겟차 프론트엔드 챕터",
        logo: {
          alt: "Getcha_Logo",
          src: "img/getcha_logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "리액트 네이티브",
          },
          {
            to: "/web-docs/intro",
            label: "리액트",
            position: "left",
          },
          // {
          //     to: '/utils-docs/intro',
          //     label: '유틸',
          //     position: 'left',
          // },
          { to: "/blog", label: "블로그", position: "left" },
          {
            href: "https://www.npmjs.com/package/getcha-react-ui-components",
            label: "겟차 UI Components",
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
                label: "리액트 쿼리 번역 프로젝트",
                href: "https://hojunin.github.io/react-query-kr/",
              },
            ],
          },
          {
            title: "동료를 찾아요!",
            items: [
              {
                label: "지원하러 가기",
                href: "https://www.wanted.co.kr/wd/100800",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Getcha Frontend Chapter`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
