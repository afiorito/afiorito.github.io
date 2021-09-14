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
  ],
};
