module.exports = api => {
  api.cache(true);

  const presets = [
    '@babel/env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};
