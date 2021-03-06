import * as actions from '../actions/actions';

interface IFetchReducerState {
    fetching: boolean;
    fetched: boolean;
    users: any[];
    error: any;
}

const defaultState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

export default (state: IFetchReducerState = defaultState, action): IFetchReducerState => {
    switch (action.type) {
        case (actions.FETCH_USER_START):
            return Object.assign({}, state, { fetching: true });
        case (actions.RECIEVE_USERS):
            return Object.assign({}, state, { users: action.payload });
        case (actions.FETCH_USER_ERR):
            return Object.assign({}, state, { error: action.payload, fetching: false });
        default:
            return state;
    }
};