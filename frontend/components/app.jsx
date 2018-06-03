import React from 'react';
import {
  HashRouter,
  Link,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import { AuthRoute, NotLoggedInRoute } from '../util/route_util';

import LandingPage from './pages/landing_page';
import Messages from './pages/messages';
import Notifications from './pages/notifications';
import PlayerFooterBar from './containers/player_footer_bar_container';
import SongShow from './containers/song_show_container';
import Stream from './containers/stream_container';
import Upload from './pages/upload';
import UserShow from './containers/user_show_container';

// temp //
// temp //

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <NotLoggedInRoute path="/stream" component={Stream} />
      <Route exact path="/users/:userId" component={UserShow} />
      <Route exact path="/users/:userId/:songId" component={SongShow} />
      <NotLoggedInRoute path="/upload" component={Upload} />
      <NotLoggedInRoute path="/notifications" component={Notifications} />
      <NotLoggedInRoute path="/messages" component={Messages} />
    </Switch>
    <Route path="/" component={PlayerFooterBar} />
  </div>
);

export default App;
