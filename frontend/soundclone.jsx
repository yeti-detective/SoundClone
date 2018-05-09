import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import FifthSon from './components/fifthson';
import * as SessionAPI from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  // window.signup = SessionAPI.signup;
  // window.login = SessionAPI.login;
  // window.logout = SessionAPI.logout;
  ReactDOM.render(<FifthSon />, document.getElementById('root'));
});
