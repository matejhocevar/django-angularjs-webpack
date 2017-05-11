var path = require('path')
var utils = require('./utils')
var config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './frontend/src/index.app.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
      {test: /\.css/, loader: 'style-loader!css-loader', exclude: /node_modules/},
      {test: /\.scss/, loader: 'style-loader!css-loader!sass-loader', exclude: /node_modules/},
      // {test: /\.styl/, loader: 'style-loader!css-loader!stylus-loader'},
      // {test: /\.less/, loader: 'style-loader!css-loader!less-loader'}
    ]
  }
}
