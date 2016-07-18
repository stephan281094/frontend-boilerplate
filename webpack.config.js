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
  postcss: function (webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('autoprefixer'),
      require('precss')
    ]
  }
}
