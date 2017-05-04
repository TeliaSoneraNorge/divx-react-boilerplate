import * as exampleController from './exampleRoute';
import serverStaticFiles from './staticRoute';
import renderView from './viewsRoute';

const endpoints = [

  // CLIENTS
  { method: 'GET', path: '/api/examples', config: exampleController.getExampleData },
  { method: 'GET', path: '/api/examples/{id}', config: exampleController.getExampleDataById },

  // SERVE STATIC FILES
  { method: 'GET', path: '/static/{file*}', config: serverStaticFiles },

  // REACT CLIENT
  { method: 'GET', path: '/{path*}', config: renderView },
];

export default endpoints;
