/* eslint-disable no-console */
/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const devConfig = require('./webpack.dev.config.js');
const target = process.env.npm_lifecycle_event;

const common = {
  output: {
    path: path.join(__dirname, '/src/main/resources/static'),
    filename: '[name].js'
  },
  entry: './src/main/resources/static/index.js',
  resolve: {
    extensions: ['', '.js', '.css'],
    alias: {
      'styles': __dirname + '/static/styles',
      'images': __dirname + '/static/images'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader'
        })
      },
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]&mimeType=image/[ext]&limit=100000'
      }
    ]
  },
};

const prodConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new ExtractTextPlugin('[name].css')
  ]
};

var config;
if(target === 'prod') {
  console.log('real build');
  config = webpackMerge(common, prodConfig);
} else {
  console.log('dev build');
  config = webpackMerge(common, devConfig);
}

module.exports = config;