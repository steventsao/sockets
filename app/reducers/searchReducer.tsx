import * as actions from '../actions/actions';

interface IDefaultState {
    isSearching: boolean;
    userIds: number[];
}

const defaultState = {
    isSearching: false,
    userIds: [],
};

export default (state = defaultState, action): IDefaultState => {
    switch (action.type) {
        case (actions.START_SEARCH):
            return state;
        case (actions.RECEIVE_VIEWS):
            return Object.assign({}, state, { userIds: action.channelId, receivedAt: action.receivedAt });
        default:
            return state;
    }
};