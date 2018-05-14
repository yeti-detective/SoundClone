import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import { AuthRoute, NotLoggedInRoute } from '../util/route_util';

import LandingPage from './pages/landing_page';
import Stream from './containers/stream_container';
import UserShow from './containers/user_show_container';
import SongShow from './containers/song_show_container';
import PlayerFooterBar from './containers/player_footer_bar_container';
import Upload from './pages/upload';

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
      <Route exact path="/users/:userId" component={UserShow} />
      <Route exact path="/users/:userId/:songId" component={SongShow} />
      <AuthRoute path="/upload" component={Upload} />
    </Switch>
    <Route path="/" component={PlayerFooterBar} />
  </div>
);

export default App;
