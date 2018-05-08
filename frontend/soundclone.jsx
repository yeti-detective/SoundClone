import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import FifthSon from './components/fifthson';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // window.store = store;
  ReactDOM.render(<FifthSon />, document.getElementById('root'));
});
