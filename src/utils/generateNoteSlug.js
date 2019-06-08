module.exports = note => {
  return `/notes/${note.code.replace(/\s+/g, '')}/${note.type}`;
};
