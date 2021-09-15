const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Anthony's Website`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
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
  ],
};
