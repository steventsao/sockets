import * as actions from '../actions/actions';

const defaultState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case (actions.FETCH_USER_START):
            return state;
        case (actions.RECIEVE_USERS):
            let newState = Object.assign({}, state)
            newState.users = action.payload
            return newState;
        case (actions.FETCH_USER_ERR):
            return state;
        default:
            return state;
    }
};