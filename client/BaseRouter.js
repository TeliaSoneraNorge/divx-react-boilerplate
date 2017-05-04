import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import ExamplePage from './pages/ExamplePage';
import ExamplesPage from './pages/ExamplesPage';
import PageNotFound from './pages/PageNotFound';

const BaseRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={IndexPage}
      />
      <Route
        exact
        path="/examples"
        component={ExamplesPage}
      />
      <Route
        exact
        path="/examples/:id"
        component={ExamplePage}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default BaseRouter;
