const webpack = require('webpack');

module.exports = {
  entry: './app/index.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
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
