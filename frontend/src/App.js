import React, { Component } from 'react';
import './App.css';

import Landing from './components/Landing/Landing';

// axios.get('https://data.cityofnewyork.us/resource/24t3-xqyv.json?zip=11214')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   })

class App extends Component {

  state = {
    zipcode: 11214
  }

  handleChange = (e) => {
    this.setState( { zipcode: e.target.value } );
  }

  render() {
    return (
      <React.Fragment>
        <RoutePaths />
      </React.Fragment>
    );
  }
}

export default App;
