import React, { Component, PropTypes } from 'react';
import { EventListComponent } from './components/EventList';

export class EventListPage extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const { events } = this.props;
        return (
            <div className="container">
                <div className="row"><h2 className="col-md-12">Event list</h2></div>
                <div className="row">
                    <EventListComponent className="col-md-12" events={events} key={'event-list'} />
                </div>
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
