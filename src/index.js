// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

import 'pavilion/dist/pavilion.min.css';

render(
  <Provider store={store}>
    <App monthsAhead={12} />
  </Provider>,
  document.getElementById('root')
);
