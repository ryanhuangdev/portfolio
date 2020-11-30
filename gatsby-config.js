/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ryan Huang's Portfolio",
    description: "This is WebDev Portfolio Site",
    author: "@ryanhuang",
    twitterUsername: "@ryanyagami",
    image: "/twitter-img.png",
    siteUrl: "https://ryanhuangdev.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: ['jobs', 'projects', 'blogs'],
        singleTypes: ['about'],
      },
    }
  ],
}
