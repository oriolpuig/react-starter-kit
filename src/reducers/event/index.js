import { combineReducers } from 'redux';
import { eventListReducer } from './list';
import { eventViewReducer } from './view';

export const eventReducer = combineReducers({
    list: eventListReducer,
    view: eventViewReducer,
});