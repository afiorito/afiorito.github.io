module.exports = link => {
  const components = link.split('/');

  return /^[a-z0-9\-.]+/.exec(components[components.length - 1])[0];
};
