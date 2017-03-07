import * as React from 'react';
import { connect } from 'react-redux';
import { fetchEventsStartAction } from './actions/fetchEvents';
import { EventListPage } from './page';

const mapStateToProps = (state) => ({
    events: state.event.list,
});

const mapDispatchToProps = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEventsStartAction()),
});

export const EventListPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventListPage);