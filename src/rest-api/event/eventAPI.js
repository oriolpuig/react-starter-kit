import { eventsMockData } from './eventMockData';

// Fake API using es6 Promises polyfill (with babel-preset-env).
// In future, we can replace by real one.
class EventAPI {
    events;

    constructor() {
        this.events = eventsMockData;
    }

    fetchEvents() {
        return Promise.resolve(this.events);
    }

    fetchEventById(id) {
        const event = this.events.find(e => e.id === id);
        return Promise.resolve(event);
    }
}

export const eventAPI = new EventAPI();