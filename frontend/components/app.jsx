import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import { AuthRoute, NotLoggedInRoute } from '../util/route_util';

import LandingPage from './pages/landing_page';
import Stream from './stream';

// temp //
const Login = () => <div>login</div>;
const Signup = () => <div>signup</div>;
// <NotLoggedInRoute exact path="/" component={LandingPage} />
// temp //

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <Route path="/stream" component={Stream} />
    </Switch>
  </div>
);

export default App;
