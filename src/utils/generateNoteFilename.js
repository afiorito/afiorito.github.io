module.exports = link => {
  const components = link.split('/');

  return /^[a-z_.]+/.exec(components[components.length - 1])[0];
};
