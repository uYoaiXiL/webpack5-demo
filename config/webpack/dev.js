const webpack = require('webpack');
const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const paths = require('../paths');

const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    compress: true,
    contentBase: paths.build,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3007,
    clientLogLevel: 'silent',
    proxy: {
      ...require(paths.proxy),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new WebpackBar({
      name: 'RUNNING',
      color: '#52c41a',
    }),
  ],
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
});
