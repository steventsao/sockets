import * as actions from '../actions/actions';

const defaultState = {
    isSearching: false,
    userIds: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case (actions.START_SEARCH):
            return state;
        case (actions.RECEIVE_VIEWS):
            return Object.assign({}, state, { userIds: action.channelId, receivedAt: action.receivedAt });
        default:
            return state;
    }
};