/* global window */

import { createStore, applyMiddleware, compose } from 'redux';

import injectClientAndGetMiddleware from './middlewares/promiseMiddleware';
import reducer from './reducer';

export default function configureStore(client, preloadedState) {
  const enableDevToolsExtension = typeof window !== 'undefined' && window.devToolsExtension;
  const finalCreateStore = compose(
    applyMiddleware(
      injectClientAndGetMiddleware(client),
    ),
    (enableDevToolsExtension) ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = finalCreateStore(reducer, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
