import * as React from 'react';
import { Link } from 'react-router';
import { routeConstants } from '../../../../../common/constants/route';

export const EventListItemComponent = (props) => {
    return (
        <li>
            <Link to={`${routeConstants.event.view}/${props.event.id}`}>
                {props.event.name}
            </Link>
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
    }),
};
