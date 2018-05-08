import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';


document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // window.store = store;
  ReactDOM.render(<div><h1>FIFTHSON!</h1><img src="{window.staticAssets.fifthSon}"/></div>, document.getElementById('root'));
});
