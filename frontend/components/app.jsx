import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import { AuthRoute, NotLoggedInRoute } from '../util/route_util';

import LandingPage from './pages/landing_page';
import Stream from './pages/stream';

// temp //
import UserHeaderBar from './small_components/user_header_bar';
// <NotLoggedInRoute exact path="/" component={LandingPage} />
// <Route path="/headerbar" component={UserHeaderBar} />
// temp //

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <NotLoggedInRoute path="/stream" component={Stream} />
    </Switch>
  </div>
);

export default App;
