import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import * as actions from './actions/actions';
import { connect, Provider } from 'react-redux';
import createLogger = require('redux-logger');
import HomeContainer from './containers/HomeContainer';
import { AppContainer } from 'react-hot-loader';

declare var module: { hot: any };

const defaultState = {
  isSearching: false,
  userIds: [],
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case (actions.START_SEARCH):
      return state;
    case (actions.RECEIVE_VIEWS):
      return Object.assign({}, state, { userIds: action.channelId, receivedAt: action.receivedAt });
    default:
      return state;
  }
};

const logger = createLogger();
const store = createStore(mainReducer, applyMiddleware(logger));


window.onload = () => {
  render(
    <Provider store={store}>
      <HomeContainer />
    </Provider>,
    document.getElementById('root')
  );
};


if (module.hot) {
  module.hot.accept('./containers/HomeContainer', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/HomeContainer').default;

    // And render it into the root element again
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById('root')
    );
  })
}