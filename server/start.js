import winston from 'winston';
import './logger';
import server from './server';

/**
 *  server start
 */
server.start((err) => {
  if (err) {
    winston.error('Failed to start server: ', err);
  }

  winston.info(`Server started at: ${server.info.uri}`);
});
