const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: [
    // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:2000',
    'webpack/hot/only-dev-server',
    './app/index.tsx',
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/public'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
  watch: true,
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /server/,
        loader: 'awesome-typescript-loader',
      }
    ],
  },
};
