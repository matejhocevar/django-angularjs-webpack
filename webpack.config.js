module.exports = {
  context: __dirname + '/resources/assets/js/src/app',
  entry: ['./index.js'],
  output: {
    path: __dirname + '/resources/assets/js/src/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw-loader'},
      // {test: /\.css/, loader: 'style-loader!css-loader'},
      {test: /\.scss/, loader: 'style-loader!css-loader!sass-loader'},
      // {test: /\.styl/, loader: 'style-loader!css-loader!stylus-loader'},
      // {test: /\.less/, loader: 'style-loader!css-loader!less-loader'}
    ]
  }
};
