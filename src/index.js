import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './components/App';

import reducer from './system/reduce';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


