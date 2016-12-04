import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const START_SEARCH = 'START_SEARCH';
export function startSearch(userName) {
  return {
    type: START_SEARCH,
    userName,
  };
}

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export function receiveSearch(userIds) {
  return {
    type: RECEIVE_SEARCH,
    userIds,
  };
}

export const REQUEST_VIEWS = 'REQUEST_VIEWS';
function requestViews(channelId) {
  return {
    type: REQUEST_VIEWS,
    channelId,
  };
}

export const RECEIVE_VIEWS = 'RECEIVE_VIEWS';
export function receiveViews(channelId, views) {
  return {
    type: RECEIVE_VIEWS,
    views,
    channelId,
    receivedAt: Date.now(),
  };
}

export const CLEAR_SEARCH = 'CLEAR_SEARCH';
function clearSearch() {
  return {
    type: CLEAR_SEARCH,
  }
}

export function fetchViews(channelId) {
  return function returnFetchViews(dispatch) {
    return fetch(`http://www.youtube.com/${channelId}`)
      .then(res => dispatch(receiveViews(channelId, res)));
  };
}
