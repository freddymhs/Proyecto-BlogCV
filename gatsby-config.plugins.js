const config = require("./config")

module.exports = [
  "gatsby-plugin-react-helmet",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-less",
  "gatsby-plugin-offline",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Freddy Marcos Huaylla Silvestre",
      short_name: "FmarcosDev",
      start_url: "/",
      background_color: "#00BCD4",
      theme_color: "#00BCD4",
      display: "standalone",
      icon: "src/images/icon.png",
      legacy: true,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "markdown-pages",
      path: `${__dirname}/content`,
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1000,
            quality: 80,
            showCaptions: true,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            rel: "nofollow",
          },
        },
        "gatsby-remark-prismjs",
      ],
    },
  },
  {
    resolve: "gatsby-plugin-i18n",
    options: {
      langKeyDefault: config.defaultLanguage,
      useLangKeyLayout: false,
    },
  },
  "gatsby-plugin-sitemap",
  "gatsby-plugin-robots-txt",
  {
    resolve: "gatsby-plugin-antd",
    options: {
      javascriptEnabled: true,
    },
  },
  {
    resolve: "gatsby-plugin-eslint-v2",
    options: {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ["develop"],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  },
  {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: config.googleAnalyticTrackingId,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
    },
  },
  {
    resolve: "gatsby-plugin-nprogress",
    options: {
      // Setting a color is optional.
      color: "black",
      // Disable the loading spinner.
      showSpinner: true,
    },
  },
]
