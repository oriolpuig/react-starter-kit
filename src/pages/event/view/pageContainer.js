import * as React from 'react';
import { connect } from 'react-redux';
import { fetchEventStartAction } from './actions/fetchEvent';
import { EventViewPage } from './page';

const mapStateToProps = (state, ownProps) => ({
    eventId: Number(ownProps.params.id) || 0,
    event: state.event.view.event,
    eventErrors: state.event.view.eventErrors,
});

const mapDispatchToProps = (dispatch) => ({
    fetchEventById: (id) => dispatch(fetchEventStartAction(id)),
});

export const EventViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventViewPage);
