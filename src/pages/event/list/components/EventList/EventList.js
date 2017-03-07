import * as React from 'react';
import { EventListItemComponent } from '../EventListItem';

export class EventListComponent extends React.Component {

    renderList(events) {
        return (
            <ul >
                {events.map((e, index) => <EventListItemComponent event={e} key={$`event-list-item-` + index} />)}
            </ul >
        );
    }

    render() {
        const { events } = this.props;
        return (
            <div>
                {events.length > 0 ? this.renderList(events) : 'No data'}
            </div>
        );
    }
}

EventListComponent.propTypes = {
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
