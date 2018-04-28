import React, { Component } from 'react';
import './App.css';

import Landing from './components/Landing/Landing';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Hello, world!</h1>
        <Landing />
      </React.Fragment>
    );
  }
}

export default App;
