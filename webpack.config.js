const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    // // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:2000',
    // 'webpack/hot/only-dev-server',
    './app/index.jsx',
  ],
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new ExtractTextPlugin("style.css"),
    new webpack.ProvidePlugin({   
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  watch: true,
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.css', '.scss']
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /server/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], 
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
};
