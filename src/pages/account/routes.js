import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import EnsureAuthenticated from '../EnsureAuthenticated';
import SignUp from './SignUp';
import Login from './Login';

export default () => (
  <Switch>
    <Route path="/account/signup" component={SignUp} />
    <Route path="/account/login" component={Login} />
    <Route path="/account/register" component={Login} />
    {/* <EnsureAuthenticated>
      <Route path="/account/settings" component={Settings} />
    </EnsureAuthenticated> */}
  </Switch>
);
