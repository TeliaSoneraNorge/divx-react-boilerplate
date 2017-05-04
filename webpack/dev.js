/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./base');

const rules = [
  {
    test: /\.(scss|css)$/,
    use: ExtractTextPlugin.extract({
      use: ['css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap'],
    }),
    include: path.resolve(__dirname, '../styles'),
  },
].concat(base.rules);

const plugins = [
  new webpack.LoaderOptionsPlugin({
    debug: true,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true')),
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
].concat(base.plugins);

const config = {
  cache: true,
  entry: ['webpack-hot-middleware/client', 'react-hot-loader/patch'].concat(base.entry),
  output: base.output,
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins,
};

module.exports = config;
