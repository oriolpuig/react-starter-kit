import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import { routeConstants } from './common/constants/route';
import { App } from './pages/App';
import { EventListPageContainer } from './pages/event/list/pageContainer';

export const AppRoutes = (
    <Route path={routeConstants.default} component={App}>
        <IndexRoute component={EventListPageContainer} />
        <Route path={routeConstants.event.list} component={EventListPageContainer} />
    </Route>
);