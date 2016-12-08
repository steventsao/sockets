const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  watch: true,
  resolve: ['', '.js', 'tsx', 'ts', 'jsx'],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      }
    ],
  },
};
