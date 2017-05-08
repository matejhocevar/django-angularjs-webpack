var webpack = require('webpack');

var env = process.env.NODE_ENV ? process.env.NODE_ENV.replace(" ", "") : null;    // because command 'set NODE_ENV=...' adds tailing space

var config = {
  context: __dirname + '/resources/assets/js/src/app',
  entry: ['./index.js'],
  output: {
    path: __dirname + '/resources/assets/js/src/app/static',
    filename: 'bundle.js'
  },
  plugins: [],
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
};

if(env == 'production') {
  config.output.path = __dirname + '/webapp/static';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  // config.devtool = 'source-map';   // enable source map for debugging in production
}

console.log('Path: ', config.output.path);

module.exports = config;
