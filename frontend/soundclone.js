import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';

import fifthSon from 'assets/images/user_icons/fifthson.jpg';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // window.store = store;
  ReactDOM.render(<div><h1>FIFTHSON!</h1><img src={fifthSon}/></div>, document.getElementById('root'));
});
