import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Blank from './pages/Blank';
import Landing from './pages/Landing';
import EnsureAuthenticated from './pages/EnsureAuthenticated';
import accountRoutes from './pages/account/routes';
import Products from './components/products/Products';
import NoMatch from './pages/NoMatch';

import history from './history';

export default () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/lz" component={Landing} />
        <Route path="/" component={Home} exact />
        <Route path="/account" component={accountRoutes} />
        <Route path="/privacy-rights" component={Blank} />
        <EnsureAuthenticated>
          <Route path="/products" component={Products} />
        </EnsureAuthenticated>
        <Route component={NoMatch} />
      </Switch>
    </App>
  </Router>
);
