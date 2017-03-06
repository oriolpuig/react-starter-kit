import * as React from 'react';
import { HelloComponent } from '../common/components/Hello';

export class App extends React.Component {
  render() {
    return (
      <div>
        <HelloComponent />
        {this.props.children}
      </div>
    );
  }
}
