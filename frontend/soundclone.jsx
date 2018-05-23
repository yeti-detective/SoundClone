import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
// import FifthSon from './components/fifthson';

import Root from './components/root';

// import * as SessionAPI from './util/session_api_util';
import { login, signup, logout } from './actions/session_actions';
import { getUser, getUsers, removeUserFromState } from './actions/users_actions';
import { getSong, getSongs, removeSongFromQueue, clearSongQueue } from './actions/songs_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    store = configureStore({entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
  });
  delete window.currentUser;
} else {
  store = configureStore();
}
  // TEST CODE //
  if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getUsers = getUsers;
    window.getUser = getUser;
    window.getSong = getSong;
    window.getSongs = getSongs;
    window.removeUserFromState = removeUserFromState;
    window.removeSongFromQueue = removeSongFromQueue;
    window.clearSongQueue = clearSongQueue;
  }
  // END TEST CODE //

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
