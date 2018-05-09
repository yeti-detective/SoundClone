import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import { AuthRoute, NotLoggedInRoute } from '../util/route_util';

import LandingPage from './landing_page';
import Stream from './stream';

// temp //
const Login = () => <div>login</div>;
const Signup = () => <div>signup</div>;
// <NotLoggedInRoute exact path="/" component={LandingPage} />
// temp //

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/stream" component={Stream} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={Signup} />
    </Switch>
  </div>
);

export default App;
