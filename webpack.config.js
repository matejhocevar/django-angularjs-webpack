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
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  }
};
