import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloComponent } from './common/components/Hello';
import css from './style.scss';

ReactDOM.render(
    <HelloComponent />,
    document.getElementById('root')
);