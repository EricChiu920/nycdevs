import React, { Component } from 'react';
import './App.css';

import Landing from './components/Landing/Landing';
import axios from 'axios';

axios.get('https://data.cityofnewyork.us/resource/24t3-xqyv.json?zip=11214')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Landing />
      </React.Fragment>
    );
  }
}

export default App;
