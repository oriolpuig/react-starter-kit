import React, { Component, PropTypes } from 'react';
import { EventListComponent } from './components/EventList';

export class EventListPage extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const { events } = this.props;
        return (
            <div>
                <h2>Event list</h2>
                <EventListComponent events={events} key={'event-list'} />
            </div>
        );
    }
}

EventListPage.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            startDate: PropTypes.number.isRequired,
            endDate: PropTypes.number.isRequired,
        })
    ).isRequired,
    fetchEvents: PropTypes.func.isRequired,
};
