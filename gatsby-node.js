const generateNoteSlug = require('./src/utils/generateNoteSlug');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allNotesJson {
        edges {
          node {
            code
            type
          }
        }
      }
    }
  `);

  results.data.allNotesJson.edges.forEach(edge => {
    createPage({
      path: generateNoteSlug(edge.node),
      component: require.resolve('./src/components/DocumentDetail.jsx'),
      context: {
        ...edge.node,
      },
    });
  });
};
