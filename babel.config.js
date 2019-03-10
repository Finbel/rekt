module.exports = api => {
  api.cache(true);

  const plugins = [];
  const presets = ['@babel/preset-env', '@babel/preset-typescript'];
  return {
    plugins,
    presets,
  };
};
