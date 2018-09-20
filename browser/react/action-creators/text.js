import { STORE_TEXT, CLEAR_TEXT } from '../constants';

export const storeText = text => ({ type: STORE_TEXT, text });
export const clearText = () => ({ type: CLEAR_TEXT });
