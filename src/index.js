import * as React from 'react';
import * as ReactDOM from 'react-dom';
import css from './style.scss';

// import router
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { AppRoutes } from './routes';

const router = (
    <Provider store={store}>
        <Router history={history} routes={AppRoutes} />
    </Provider>
);

ReactDOM.render(
    router,
    document.getElementById('root')
);
