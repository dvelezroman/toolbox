import { STORE_TEXT, CLEAR_TEXT } from '../constants';

const initialState = "";

export default (state = initialState, action) => {
    switch(action.type) {
        case STORE_TEXT:
            return action.text;
        case CLEAR_TEXT:
            return "";
        default:
            return state;
    }
}