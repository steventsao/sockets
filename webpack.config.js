module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  watch: true,
  resolve: ['', '.tsx?', '.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
