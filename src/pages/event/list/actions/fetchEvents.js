import { eventAPI } from '../../../../rest-api/event/eventAPI';
import { eventActionConstants } from '../../../../common/constants/actionConstants/event';

export const fetchEventsStartAction = () => {
    return (dispatcher) => {
        const promise = eventAPI.fetchEvents();

        promise.then((events) => {
            dispatcher(fetchEventsCompleteAction(events));
        })
            .catch(() => {
                console.error('Something was wrong when fetching events :(');
            });

        return promise;
    };
};

const fetchEventsCompleteAction = (events) => ({
    type: eventActionConstants.FETCH_EVENT_LIST,
    payload: events,
});