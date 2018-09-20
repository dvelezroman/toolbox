import { combineReducers } from 'redux';
import textReducer from './text-reducer';

export default combineReducers({
    text: textReducer,
})
