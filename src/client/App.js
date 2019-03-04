import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import Navigation from './components/shared/navigation';

class App extends Component {
  render() {
    const { route } = this.props;
    return (
      <div className="app">
        <Navigation />
        <div className="wrapper">
          {renderRoutes(route.routes)}
        </div>
      </div>
    );
  }
}

export default App;
