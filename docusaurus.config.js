// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "๐ ๊ฒ์ฐจ ํ๋ก ํธ์๋ ์ฑํฐ์๋๋ค",
  tagline: "React & React Native ๊ฐ๋ฐ ๊ฐ์ด๋",
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
            "๊ฒ์ฐจ, ํ๋ก ํธ์๋, ๊ฒ์ฐจ ํ๋ก ํธ์๋, ๊ธฐ์ ๋ธ๋ก๊ทธ, ๊ธฐ์ , ๊ฒ์ฐจ ๊ธฐ์  ๋ธ๋ก๊ทธ, ๊ฒ์ฐจ ํ๋ก ํธ์๋ ๊ธฐ์  ๋ธ๋ก๊ทธ",
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
        title: "๊ฒ์ฐจ ํ๋ก ํธ์๋ ์ฑํฐ",
        logo: {
          alt: "Getcha_Logo",
          src: "img/getcha_logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ",
          },
          {
            to: "/web-docs/intro",
            label: "๋ฆฌ์กํธ",
            position: "left",
          },
          // {
          //     to: '/utils-docs/intro',
          //     label: '์ ํธ',
          //     position: 'left',
          // },
          { to: "/blog", label: "๋ธ๋ก๊ทธ", position: "left" },
          {
            href: "https://www.npmjs.com/package/getcha-react-ui-components",
            label: "๊ฒ์ฐจ UI Components",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "๊ฒ์ฐจ ์๋น์ค",
            items: [
              {
                label: "๊ฒ์ฐจ",
                href: "https://m.getcha.kr/",
              },
              {
                label: "๋ฆฌ์กํธ ์ฟผ๋ฆฌ ๋ฒ์ญ ํ๋ก์ ํธ",
                href: "https://hojunin.github.io/react-query-kr/",
              },
            ],
          },
          {
            title: "๋๋ฃ๋ฅผ ์ฐพ์์!",
            items: [
              {
                label: "์ง์ํ๋ฌ ๊ฐ๊ธฐ",
                href: "https://www.wanted.co.kr/wd/100800",
              },
            ],
          },
        ],
        copyright: `Copyright ยฉ ${new Date().getFullYear()} Getcha Frontend Chapter`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
