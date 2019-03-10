const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'awesome-typescript-loader', 'eslint-loader'],
      },
    ],
  },
  devServer: {
    publicPath: 'http://localhost:3000/dist',
    port: 3000,
    contentBase: path.resolve(__dirname, 'public'),
  },
};
