import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
// import FifthSon from './components/fifthson';

import Root from './components/root';

// import * as SessionAPI from './util/session_api_util';
import { login, signup, logout } from './actions/session_actions';

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
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // END TEST CODE //

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
