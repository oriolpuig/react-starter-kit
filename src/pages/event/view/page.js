import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { routeConstants } from '../../../common/constants/route';
import { EventComponent } from './components/Event';

export class EventViewPage extends Component {
    componentDidMount() {
        this.props.fetchEventById(this.props.eventId);
    }

    render() {
        const { event } = this.props;
        return (
            <div>
                <Link to={`${routeConstants.event.list}`}>
                    Event list
                </Link>
                {event ? <EventComponent event={event} key={`event-${event.id}`} /> : null}
            </div>
        );
    }
}

EventViewPage.propTypes = {
    eventId: PropTypes.number.isRequired,
    event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        startDate: PropTypes.number.isRequired,
        endDate: PropTypes.number.isRequired,
    }),
    fetchEventById: PropTypes.func.isRequired
};
