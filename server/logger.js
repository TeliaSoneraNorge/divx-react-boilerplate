import winston from 'winston';
import moment from 'moment';

/**
 * Logging configuration
 */
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  colorize: true,
  prettyPrint: true,
  timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss'),
});
