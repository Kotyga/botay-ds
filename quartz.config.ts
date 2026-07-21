import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Public Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f8ff", // основной фон: очень светлый сиренево-голубой
          lightgray: "#e9ebf7", // блоки, границы, фон кода
          gray: "#a5abc3", // второстепенные элементы
          darkgray: "#4b526a", // основной текст
          dark: "#25283b", // заголовки
          secondary: "#3f67a8", // ссылки и синий акцент
          tertiary: "#7556b8", // сиренево-фиолетовый акцент
          highlight: "rgba(46, 169, 174, 0.13)", // мягкая бирюзовая подсветка
          textHighlight: "rgba(185, 178, 255, 0.48)", // выделение текста
        },
        darkMode: {
          light: "#171827", // основной тёмный фон
          lightgray: "#282a40", // блоки и границы
          gray: "#777d99", // второстепенные элементы
          darkgray: "#c8cce0", // основной текст
          dark: "#f1f2ff", // заголовки
          secondary: "#82b7eb", // голубые ссылки
          tertiary: "#b69ae8", // сиреневый акцент
          highlight: "rgba(53, 196, 199, 0.14)", // бирюзовая подсветка
          textHighlight: "rgba(111, 88, 180, 0.55)", // выделение текста
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
