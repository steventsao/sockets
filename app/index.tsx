import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import * as actions from './actions/actions';
import { connect, Provider } from 'react-redux';
import createLogger = require('redux-logger');
import HomeContainer from './containers/HomeContainer';

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
