import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './reducers/index';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
console.log(appReducers)
const store=createStore(
  appReducers,
  applyMiddleware(thunk)
)
console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
