import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export const EventComponent = (props) => {
    const { event } = props;
    return (
        <div>
            <h2><a href={event.url} target="_blank">{event.name}</a></h2>
            <hr />
            <label>Start Date: {moment(event.startDate).utc().format('DD-MM-YYYY HH:mm')}</label>
            <br />
            <label>End Date: {moment(event.endDate).utc().format('DD-MM-YYYY HH:mm')}</label>
        </div>
    );
}

EventComponent.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        startDate: PropTypes.number.isRequired,
        endDate: PropTypes.number.isRequired,
    }).isRequired,
};
