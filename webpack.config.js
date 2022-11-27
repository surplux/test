require('dotenv').config({ silent: true });
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('./src/config/config');

const BUILD_DIR = path.resolve(__dirname, 'build/');
const APP_DIR = path.resolve(__dirname, 'src/');
const ENV = process.env.NODE_ENV || 'development';

const config = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ],
  },
  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      'process.env.API_URL': JSON.stringify(env.apiUrl),
    }),
  ],
  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: '/build/',
    contentBase: 'app/',
    historyApiFallback: true,
    open: true,
  },
};

module.exports = config;
