import { combineReducers } from 'redux';
import { eventListReducer } from './list';

export const eventReducer = combineReducers({
    list: eventListReducer
});