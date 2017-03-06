import { eventActionConstants } from '../../common/constants/actionConstants/event';

export const eventListReducer = (state = [], action) => {
    switch (action.type) {
        case eventActionConstants.FETCH_EVENT_LIST:
            return [...action.payload];
        default:
            return state;
    }
};