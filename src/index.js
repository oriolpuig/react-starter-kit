import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloComponent } from './common/components/Hello';
import css from './style.scss';

// import router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={HelloComponent}>
                <IndexRoute component={HelloComponent}/>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
    router,
    document.getElementById('root')
);