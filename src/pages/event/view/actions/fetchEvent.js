import { eventAPI } from '../../../../rest-api/event/eventAPI';
import { eventActionConstants } from '../../../../common/constants/actionConstants/event';

export const fetchEventStartAction = (id) => {
    return (dispatcher) => {
        const promise = eventAPI.fetchEventById(id);

        promise.then((event) => {
            dispatcher(fetchEventCompleteAction(event));
        })
            .catch(() => {
                console.error('Something was wrong when fetching event :(');
            });
    };
};

const fetchEventCompleteAction = (event) => ({
    type: eventActionConstants.FETCH_EVENT_ENTITY,
    payload: event,
});