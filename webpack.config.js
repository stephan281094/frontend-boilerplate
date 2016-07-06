var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss/,
        loader: 'style!css!postcss!'
      }
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer'),
      require('precss'),
      require('postcss-partial-import')({
        addDependencyTo: webpack
      })
    ]
  }
}
