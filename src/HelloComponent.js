import * as React from 'react';
// Import css
import css from './styles/style.scss';

export const HelloComponent = () => {
    return (
        <div>
            <div>
                <h2 className="prueba">Welcome to React</h2>
            </div>
            <p>
                To get started, edit <code>src/HelloComponent.js</code> and save to reload.
            </p>
            <p>
                Styles are sass.
            </p>
        </div>
    );
}