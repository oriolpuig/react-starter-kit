import * as React from 'react';

export const EventListItemComponent = (props) => {
    return (
        <li>
            {props.event.name}
        </li>
    );
};

EventListItemComponent.propTypes = {
    event: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        startDate: React.PropTypes.number.isRequired,
        endDate: React.PropTypes.number.isRequired,
        isActive: React.PropTypes.bool.isRequired,
    }),
};
