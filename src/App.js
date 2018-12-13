import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MapForVehicles from './component/MapForVehicles';
import ManagementButton from './component/ManagementButton';
import './style/App.css';


const App = () => (
  <Provider store={store}>
    <ManagementButton />
    <MapForVehicles />
  </Provider>);

export default App;
