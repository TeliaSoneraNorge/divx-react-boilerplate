/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./base');

const rules = [
  {
    test: /\.(scss|css)$/,
    use: ExtractTextPlugin.extract({
      use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
    }),
    include: path.resolve(__dirname, '../styles'),
  },
].concat(base.rules);

const plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    },
  }),
].concat(base.plugins);

const config = {
  entry: base.entry,
  output: base.output,
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins,
};

module.exports = config;
