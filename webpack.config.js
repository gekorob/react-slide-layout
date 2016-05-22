var path = require('path');
var webpack = require('webpack');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PATHS = {
  build: path.join(__dirname, 'build'),
  public: path.join(__dirname, 'public')
};

module.exports = {
  entry: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./src/index.js"
  ],
  output: {
    path: PATHS.public,
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style-loader',
            'css-loader!postcss-loader!sass-loader'
        )
      }
    ]
  },
  devServer:{
    contentBase: PATHS.public,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  }};