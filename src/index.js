import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from "redux-promise";
import rootReducer from './reducers';
import './index.css';
import App from './App';

//setting up store with middleware and redux dev tools viewers
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxPromise),
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);