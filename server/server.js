import Hapi from 'hapi';
import hapiSwagger from 'hapi-swagger';
import vision from 'vision';
import inert from 'inert';
import winston from 'winston';
import Pack from '../package.json';
import endpoints from './routes/routes';

/**
 *  local vars
 */
const server = new Hapi.Server();
/* $lab:coverage:off$ */
const PORT = process.env.PORT || 3000;
/* $lab:coverage:on$ */
const docOptions = {
  info: {
    title: 'DivX React Server Boilerplate',
    version: Pack.version,
  },
};

/**
 *  server configuration
 */
server.connection({
  port: PORT,
});

// definition of plugins
const plugins = [

  // documentation generation
  vision,
  inert,
  {
    register: hapiSwagger,
    options: docOptions,
  },
];

if (process.env.NODE_ENV !== 'production') {
  const webpackPlugin = require('../webpack/serverHMR.js').default;
  plugins.push(webpackPlugin);
}

// registration of plugins
server.register(plugins, (err) => {
/* $lab:coverage:off$ */
  if (err) { winston.error('Failed to load a plugin: ', err); }
/* $lab:coverage:on$ */
});

server.route(endpoints);

/**
 *  server as a module
 */
export default server;
