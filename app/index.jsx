import { AppContainer } from 'react-hot-loader';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import * as React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import './styles/styles';
import IO from 'socket.io-client'
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import rootReducer from './rootReducer';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));

window.onload = () => {
  var socket = IO();
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./containers/HomeContainer', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/HomeContainer').default;

    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById('root')
    );
  });
}