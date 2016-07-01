var path = require('path')

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
      require('precss')
    ]
  }
}
