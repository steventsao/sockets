const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  watch: true,
  resolve: ['', 'webpack.js', 'tsx', 'ts','js'],
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
