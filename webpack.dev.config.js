// eslint-disable-next-line no-undef
const webpack = require('webpack');

// eslint-disable-next-line no-undef
module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true,
    publicPath : '/',
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '**': 'http://localhost:8080'
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin() //prints more readable module names in the browser console on HMR updates
  ]
};
