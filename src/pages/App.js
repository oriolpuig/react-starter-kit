import * as React from 'react';
import { Hello } from '../common/components/Hello';
import { Header } from '../common/components/Header';
import { Footer } from '../common/components/Footer';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hello />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
