exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allNotesJson {
        nodes {
          code
          type
        }
      }
    }
  `);

  results.data.allNotesJson.nodes.forEach((note) => {
    createPage({
      path: `/notes/${note.code.replace(/\s+/g, '')}/${note.type}/`,
      component: require.resolve('./src/components/pages/document.tsx'),
      context: {
        ...note,
      },
    });
  });
};
