
import React, { Component } from 'react';
import MapForVehicles from './MapForVehicles';
// import './style/TrajectoryProjection.css';
import file from './data.json';

class TrajectoryProjection extends Component {
  constructor() {
    super();
    this.state = {
      VehicleInfo: file.data[0],
      startLat: file.data[0].trajectories[0].start_lat,
      startLon: file.data[0].trajectories[0].start_lon,
      timer: 0,
    };
  }

  moveMarker = () => {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
        startLat: file.data[0].trajectories[this.state.timer].start_lat,
        startLon: file.data[0].trajectories[this.state.timer].start_lon,
      });
    }, 500);
  }

  render() {
    const { VehicleInfo } = this.state;
    return (
      <div>
        <ul>
          <span>Your are looking for vehiclue number:</span>
          <li>{VehicleInfo.id}</li>
          <span>Depature time:</span>
          <li>trajectory</li>
        </ul>

        <button onClick={this.moveMarker} type="button">View Trajectory</button>
        <MapForVehicles {...this.state} />
      </div>
    );
  }
}

export default TrajectoryProjection;


// {
//   "data": [
//     {
//       "id": 123858,
//       "route_id": 3,
//       "start_date": "2018-05-31",
//       "end_date": "2018-06-01",
//       "trajectories": [
//         {
//           "delay": 0,
//           "end_lat": 33.58758,
//           "end_lon": -7.50056,
//           "occupancy": 42,
//           "start_lat": 33.5879,
//           "start_lon": -7.49994,
//           "end_datetime": 1527807670,
//           "occupancy_rate": 0.07,
//           "start_datetime": 1527807662
//         },
//         {
//           "delay": 0,
//           "end_lat": 33.58734,
//           "end_lon": -7.50092,
//           "occupancy": 42,
//           "start_lat": 33.58758,
//           "start_lon": -7.50056,
//           "end_datetime": 1527807675,
//           "occupancy_rate": 0.07,
//           "start_datetime": 1527807670
//         },
//         {
//           "delay": 0,
//           "end_lat": 33.58694,
//           "end_lon": -7.5015,
//           "occupancy": 42,
//           "start_lat": 33.58734,
//           "start_lon": -7.50092,
//           "end_datetime": 1527807684,
//           "occupancy_rate": 0.07,
//           "start_datetime": 1527807675
//         },
//         {
//           "delay": 0,
//           "end_lat": 33.58676,
//           "end_lon": -7.50175,
//           "occupancy": 42,
//           "start_lat": 33.58694,
//           "start_lon": -7.5015,
//           "end_datetime": 1527807687,
//           "occupancy_rate": 0.07,
//           "start_datetime": 1527807684
//         },
//         {
//           "delay": 0,
//           "end_lat": 33.58635,
//           "end_lon": -7.5024,
//           "occupancy": 42,
//           "start_lat": 33.58676,
//           "start_lon": -7.50175,
//           "end_datetime": 1527807697,
//           "occupancy_rate": 0.07,
//           "start_datetime": 1527807687
//         },
