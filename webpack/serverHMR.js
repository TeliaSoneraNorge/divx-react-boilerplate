import WebpackPlugin from 'hapi-webpack-plugin';
import Webpack from 'webpack';
import winston from 'winston';
import webpackConfig from './dev';

const compiler = new Webpack(webpackConfig);

const assets = {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
};

const hot = {
  log: winston.info,
};

export default {
  register: WebpackPlugin,
  options: {compiler, assets, hot},
};
