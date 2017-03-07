import * as fetch from 'isomorphic-fetch';

export const CREATE_USER_START = 'CREATE_USER_START';
export function createUserStart(username) {
  return {
    type: CREATE_USER_START,
    payload: username
  };
}

export const CREATE_USER_SUCCESS = 'CREATE_USER_START';
export function createUserSuccess(token) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: token
  };
}

export const CREATE_USER_ERR = 'CREATE_USER_ERR';
export function createUserErr(err) {
  return {
    type: CREATE_USER_ERR,
    payload: err
  };
}

export const FETCH_USER_START = 'FETCH_USER_START';
export function fetchUserStart() {
  return {
    type: FETCH_USER_START
  };
}

export const RECIEVE_USERS = 'RECIEVE_USERS';
export function recieveUsers(data) {
  return {
    type: RECIEVE_USERS,
    payload: data
  };
}

export const FETCH_USER_ERR = 'FETCH_USER_ERR';
export function fetchUserErr(err) {
  return {
    type: FETCH_USER_ERR,
    payload: err
  };
}

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
  };
}

export function fetchViews(channelId) {
  return function returnFetchViews(dispatch) {
    return fetch(`http://www.youtube.com/${channelId}`)
      .then(res => dispatch(receiveViews(channelId, res)));
  };
}
