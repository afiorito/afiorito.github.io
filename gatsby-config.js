module.exports = {
  siteMetadata: {
    title: `Anthony Fiorito`,
    description: `A place to publish cool projects and talk about technology and life.`,
    author: `@ovoant`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anthony Fiorito`,
        short_name: `APW`,
        start_url: `/notes`,
        background_color: `#1B2733`,
        theme_color: `#1B2733`,
        display: `minimal-ui`,
        icon: `src/images/electriapp-logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`
  ],
}