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
// temp //
console.log(UserHeaderBar)
const App = () => (
  <div>
    <Switch>
      <Route path="/headerbar" component={UserHeaderBar} />
      <AuthRoute exact path="/" component={LandingPage} />
      <Route path="/stream" component={Stream} />
    </Switch>
  </div>
);

export default App;
