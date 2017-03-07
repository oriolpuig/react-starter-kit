import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { eventReducer } from './event';

export const rootReducer = combineReducers({
    routing: routerReducer,
    event: eventReducer
});
