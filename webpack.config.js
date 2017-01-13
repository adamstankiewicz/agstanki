var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.jsx'),
    path.resolve(__dirname, 'app/assets/styles/main.scss'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(jpg|png|gif)$/, include: path.resolve(__dirname, 'app'), loader: 'file-loader?name=assets/images/[name].[ext]' },
      { test: /\.(pdf)$/, include: path.resolve(__dirname, 'app'), loader: 'file-loader?name=assets/files/[name].[ext]' },
      { test: /\.(bib)$/, include: path.resolve(__dirname, 'app'), loader: 'raw-loader?name=assets/files/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?name=assets/fonts/[name].[ext]&limit=10000&minetype=application/font-woff'},
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=assets/fonts/[name].[ext]'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: () => {
    return [
      autoprefixer,
    ];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new CopyWebpackPlugin([
      { from: './app/assets/images/favicon', toType: 'dir', to: './assets/images/favicon' },
      { from: './app/assets/images/boomerangs', toType: 'dir', to: './assets/images/boomerangs' },
    ]),
    new CleanWebpackPlugin(['build']),
  ],
  node: {
    fs: 'empty'
  }
};
