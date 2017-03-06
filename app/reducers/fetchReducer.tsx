import * as actions from '../actions/actions';
import * as Redux from 'redux';

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
            return state;
        case (actions.RECIEVE_USERS):
            return Object.assign({}, state, { users: action.payload });
        case (actions.FETCH_USER_ERR):
            return state;
        default:
            return state;
    }
};