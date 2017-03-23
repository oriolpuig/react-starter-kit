import * as React from 'react';
import { EventListItemComponent } from '../EventListItem';

export class EventListComponent extends React.Component {

    renderList(events) {
        return (
            <ul className="list-group">
                {events.map((e, index) => <EventListItemComponent className="list-group-item" event={e} key={$`event-list-item-` + index} />)}
            </ul >
        );
    }

    render() {
        const { events, className } = this.props;
        return (
            <div className={className}>
                {events.length > 0 ? this.renderList(events) : 'No data'}
            </div>
        );
    }
}

EventListComponent.propTypes = {
    className: React.PropTypes.string,
    events: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
            startDate: React.PropTypes.number.isRequired,
            endDate: React.PropTypes.number.isRequired,
        })
    ).isRequired
};
