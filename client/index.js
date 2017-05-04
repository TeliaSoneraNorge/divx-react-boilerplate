/* global window, document */
/* eslint-disable import/first, import/no-extraneous-dependencies */

import React from 'react';
import { render } from 'react-dom';
import request from 'superagent';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import configureStore from './redux/configureStore';

const store = configureStore(request, {});

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>
  , rootEl);

if (module.hot) {
  module.hot.accept('./Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Root').default; // eslint-disable-line global-require

    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      rootEl,
    );
  });
}
