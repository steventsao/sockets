"use strict";
const fetch = require("isomorphic-fetch");
exports.START_SEARCH = 'START_SEARCH';
function startSearch(userName) {
    return {
        type: exports.START_SEARCH,
        userName,
    };
}
exports.startSearch = startSearch;
exports.RECEIVE_SEARCH = 'RECEIVE_SEARCH';
function receiveSearch(userIds) {
    return {
        type: exports.RECEIVE_SEARCH,
        userIds,
    };
}
exports.receiveSearch = receiveSearch;
exports.REQUEST_VIEWS = 'REQUEST_VIEWS';
function requestViews(channelId) {
    return {
        type: exports.REQUEST_VIEWS,
        channelId,
    };
}
exports.RECEIVE_VIEWS = 'RECEIVE_VIEWS';
function receiveViews(channelId, views) {
    return {
        type: exports.RECEIVE_VIEWS,
        views,
        channelId,
        receivedAt: Date.now(),
    };
}
exports.receiveViews = receiveViews;
exports.CLEAR_SEARCH = 'CLEAR_SEARCH';
function clearSearch() {
    return {
        type: exports.CLEAR_SEARCH,
    };
}
function fetchViews(channelId) {
    return function returnFetchViews(dispatch) {
        return fetch(`http://www.youtube.com/${channelId}`)
            .then(res => dispatch(receiveViews(channelId, res)));
    };
}
exports.fetchViews = fetchViews;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFHN0IsUUFBQSxZQUFZLEdBQUcsY0FBYyxDQUFDO0FBQzNDLHFCQUE0QixRQUFRO0lBQ2xDLE1BQU0sQ0FBQztRQUNMLElBQUksRUFBRSxvQkFBWTtRQUNsQixRQUFRO0tBQ1QsQ0FBQztBQUNKLENBQUM7QUFMRCxrQ0FLQztBQUVZLFFBQUEsY0FBYyxHQUFHLGdCQUFnQixDQUFDO0FBQy9DLHVCQUE4QixPQUFPO0lBQ25DLE1BQU0sQ0FBQztRQUNMLElBQUksRUFBRSxzQkFBYztRQUNwQixPQUFPO0tBQ1IsQ0FBQztBQUNKLENBQUM7QUFMRCxzQ0FLQztBQUVZLFFBQUEsYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUM3QyxzQkFBc0IsU0FBUztJQUM3QixNQUFNLENBQUM7UUFDTCxJQUFJLEVBQUUscUJBQWE7UUFDbkIsU0FBUztLQUNWLENBQUM7QUFDSixDQUFDO0FBRVksUUFBQSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQzdDLHNCQUE2QixTQUFTLEVBQUUsS0FBSztJQUMzQyxNQUFNLENBQUM7UUFDTCxJQUFJLEVBQUUscUJBQWE7UUFDbkIsS0FBSztRQUNMLFNBQVM7UUFDVCxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtLQUN2QixDQUFDO0FBQ0osQ0FBQztBQVBELG9DQU9DO0FBRVksUUFBQSxZQUFZLEdBQUcsY0FBYyxDQUFDO0FBQzNDO0lBQ0UsTUFBTSxDQUFDO1FBQ0wsSUFBSSxFQUFFLG9CQUFZO0tBQ25CLENBQUE7QUFDSCxDQUFDO0FBRUQsb0JBQTJCLFNBQVM7SUFDbEMsTUFBTSxDQUFDLDBCQUEwQixRQUFRO1FBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLFNBQVMsRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztBQUNKLENBQUM7QUFMRCxnQ0FLQyJ9