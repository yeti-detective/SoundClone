import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

// temp //
const Login = () => <div>login</div>;
const Signup = () => <div>signup</div>;
// temp //

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={Signup} />
    </Switch>
  </div>
);

export default App;
