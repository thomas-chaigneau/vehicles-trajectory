/* eslint-disable */
import React, { Component } from 'react';
import MapForVehicles from './MapForVehicles';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapForVehicles
          className="MapForVehicles" />
      </div>
    );
  }
}

export default App;
