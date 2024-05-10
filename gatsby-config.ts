import type { GatsbyConfig } from "gatsby";
const dotenv = require("dotenv");
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Boyle Software, Inc.`,
    description: `Boyle Software creates technology solutions for Fortune 1000 clients across several industries.`,
    image: `/icon-bs.png`,
    siteUrl: `https://www.boylesoftware.com`,
    twitterUsername: `@BoyleSoftware`,
  },
  trailingSlash: "never",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.GATSBY_CONTENTFUL_HOST,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        pageLimit: 200,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-inline-svg",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg",
        icon_options: {
          purpose: `any maskable`,
        },
        name: `Boyle Software, Inc.`,
        short_name: `Boyle Software`,
        start_url: `/`,
        background_color: `#157efa`,
        theme_color: `#3dc55d`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`, `/work/*`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-7NJ030KMFM", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};

export default config;
