import React from 'react';
import { render } from 'react-dom';
import SearchBox from './components/SearchBox.jsx';
import { createStore } from 'redux';
import * as actions from './actions/actions.js';

const defaultState = {
  isSearching: false,
  userIds: [],
}

const mainReducer = (state = defaultState, action) => {
  if (action.type === actions.START_SEARCH) {
    return Object.assign({}, state, { isSearching: true });
  } else {
    return state;
  }
}

const store = createStore(mainReducer, defaultState);

const Home = () => (
  <div>
    <SearchBox startSearch={actions.startSearch} dispatch={store.dispatch}/>
  </div>
);

window.onload = () => {
  render(
    <Home />,
    document.getElementById('root')
  );
};
