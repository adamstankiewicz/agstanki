var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
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
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      minimize: true,
      comments: false,
      compress: {
        warnings: false
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
      { from: './app/app.js', to: 'app.js' },
      { from: './app/assets/images/favicon', toType: 'dir', to: './assets/images/favicon' },
      { from: './app/assets/images/boomerangs', toType: 'dir', to: './assets/images/boomerangs' },
    ]),
    new CleanWebpackPlugin(['build']),
  ]
};
