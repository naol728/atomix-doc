import { defineConfig } from "vitepress";

const version = "1.0.2";

export default defineConfig({
  base: "/atomix-doc/",
  title: "Atomix",
  description:
    "Minimal reactive state management library for JavaScript and TypeScript.",
  lang: "en-US",

  head: [["link", { rel: "icon", href: "/atomix-doc/logo.png" }]],

  themeConfig: {
    logo: "/logo.png",

    search: {
      provider: "local",
    },

    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "API", link: "/api/" },
      {
        text: "Showcase",
        link: "https://atomix-showcase.vercel.app/",
        target: "_blank",
      },
      {
        text: `v${version}`,
        items: [
          {
            text: "Releases",
            link: "https://github.com/naol728/Atomix/releases",
          },
          { text: "Changelog", link: "/guide/changelog" }, // optional: write one!
        ],
      },
      { text: "GitHub", link: "https://github.com/naol728/Atomix" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Usage Basics", link: "/guide/usage" },
            { text: "React Integration", link: "/guide/react" },
          ],
        },
        {
          text: "Advanced",
          items: [
            { text: "Selectors & Subscriptions", link: "/guide/selectors" },
            { text: "Derived State", link: "/guide/derived" },
            { text: "Performance Tips", link: "/guide/performance" },
            { text: "Testing", link: "/guide/testing" },
          ],
        },
        {
          text: "Examples",
          items: [
            { text: "Counter", link: "/guide/examples/counter" },
            { text: "Todo List", link: "/guide/examples/todo" },
          ],
        },
      ],
      "/api/": [
        {
          text: "Core API",
          items: [
            { text: "createAtom", link: "/api/" },
            { text: "AtomixStore", link: "/api/atomixStore" },
            { text: "subscribe", link: "/api/subscribe" },
          ],
        },
        {
          text: "Types",
          items: [
            { text: "Selector", link: "/api/selector" },
            { text: "Listener", link: "/api/listener" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/naol728/Atomix" },
      { icon: "twitter", link: "https://x.com/Naol528" },
    ],

    footer: {
      message: `v${version} • Released under the MIT License.`,
      copyright: "Copyright © 2025 Naol Meseret",
    },
  },
});
