
import fetch from 'isomorphic-fetch'

export const REQUEST_VIEWS = 'REQUEST_VIEWS'
function requestViews(channelId) {
  return {
    type: REQUEST_VIEWS,
    channelId,
  }
}

export const RECEIVE_VIEWS = 'RECEIVE_VIEWS'
function receiveViews(channelId, views {
  return {
    type: RECEIVE_VIEWS,
    views,
    channelId,
    receivedAt: Date.now(),
  }
}

export function fetchViews(channelId) {
  return function(dispatch) {
    return fetch(`http://www.youtube.com/${channelId}`)
      .then(res => dispatch(receiveViews(channelId, res)))
  }
}