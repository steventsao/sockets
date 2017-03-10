import * as actions from '../actions/actions';

interface IUserReducerState {
    fetching: boolean;
    fetched: boolean;
    token: string;
    error: any;
}

const defaultState = {
    fetching: false,
    fetched: false,
    token: '',
    error: null
};

export default (state: IUserReducerState = defaultState, action): IUserReducerState => {
    switch (action.type) {
        case (actions.CREATE_USER_START):
            return Object.assign({}, state, { fetching: true });
        case (actions.CREATE_USER_SUCCESS):
            return Object.assign({}, state, { token: action.payload, fetching: false, fetched: true });
        case (actions.CREATE_USER_ERR):
            return Object.assign({}, state, { error: action.payload, fetching: false });
        default:
            return state;
    }
};