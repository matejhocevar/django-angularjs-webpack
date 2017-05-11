var path = require('path')
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var env = process.env.NODE_ENV ? process.env.NODE_ENV.replace(" ", "") : null;    // because command 'set NODE_ENV=...' adds tailing space

var config = {};

if(env == 'production') {
    config = {
      context: __dirname + '/frontend',
      entry: ['./index.app.js'],
      output: {
        path: __dirname + '/frontend/static',
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[hash].js'
      },
      plugins: [
        new CleanWebpackPlugin(['js', 'css', 'index.html'], {
          root: __dirname + '/frontend/static',
          verbose: true,
          dry: false,
          exclude: ['assets']
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          sourceMap: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
          filename: __dirname + '/frontend/css/[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
          filename: __dirname + '/frontend/index.html',
          template: 'base.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
          },
          // necessary to consistently work with multiple chunks via CommonsChunkPlugin
          chunksSortMode: 'dependency'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: function (module, count) {
            // any required modules inside node_modules are extracted to vendor
            return (
              module.resource &&
              /\.js$/.test(module.resource) &&
              module.resource.indexOf(
                path.join(__dirname, '../node_modules')
              ) === 0
            )
          }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest',
          chunks: ['vendor']
        }),
      ],
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
  config.output.path = __dirname + '/webapp/static';
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  );
  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: __dirname + '/frontend/static',
        to: __dirname + '/webapp/static',
        ignore: ['.*']
      },
      {
        from: __dirname + '/frontend/index.html',
        to: __dirname + '/webapp/templates/webapp/index.html'
      }
    ]),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(js|css)$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
  // config.devtool = 'source-map';   // enable source map for debugging in production
}
else {

}

console.log('Path: ', config.output.path);

module.exports = config;
