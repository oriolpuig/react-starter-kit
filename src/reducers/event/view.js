import { eventActionConstants } from '../../common/constants/actionConstants/event';

export const eventViewReducer = (state = [], action) => {
    switch (action.type) {
        case eventActionConstants.FETCH_EVENT_ENTITY:
            return { ...state, event: action.payload };
        default:
            return state;
    }
};
