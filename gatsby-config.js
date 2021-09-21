const path = require('path');

module.exports = {
  siteMetadata: {
    author: 'Anthony Fiorito',
    description: `Anthony Fiorito's personal website. I like making things and solving problems.`,
    image: '/images/anthonyf.png',
    title: `Anthony's Website`,
    url: `https://anthonyf.io`,
    twitterUsername: '@ovoant',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-134438502-1`, `G-SXKDBWT5VM`],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anthony's Website`,
        short_name: `Anthony's Site`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#667EFF`,
        display: `minimal-ui`,
        icon: `src/assets/logo.svg`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src', 'pages', 'content'),
      },
    },
  ],
};
