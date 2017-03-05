import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import searchReducer from './reducers/searchReducer';

export default combineReducers({
    searchReducer,
    burgerMenu
});
