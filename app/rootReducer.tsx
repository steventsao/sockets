import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import searchReducer from './reducers/searchReducer';
import fetchReducer from './reducers/fetchReducer';

export default combineReducers({
    searchReducer,
    fetchReducer,
    burgerMenu
});
