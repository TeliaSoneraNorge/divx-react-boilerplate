/* eslint-disable import/no-extraneous-dependencies, no-var */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports.entry = [
  './client/client.js',
  './styles/main.scss',
];
module.exports.output = {
  path: path.join(__dirname, '..', 'server', 'static'),
  filename: 'js/app.bundle.js',
  publicPath: '/static',
};

const babelLoaders = [
  {
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          'latest',
          ['es2015', { modules: false }],
          'react'],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread',
        ],
      },
    },
  },
];

module.exports.rules = [
  {
    test: /\.json$/,
    use: 'json-loader',
    include: [
      path.join(__dirname, '..', 'client'),
    ],
  },
  {
    test: /\.js$/,
    rules: babelLoaders,
    include: [
      path.join(__dirname, '..', 'client'),
    ],
  },
];
module.exports.plugins = [
  new ExtractTextPlugin('css/app.bundle.css'),
];
