
import React, { Component } from 'react';
import MapForVehicles from './MapForVehicles';
// import './style/TrajectoryProjection.css';
import file from './data.json';

const VehicleInfo = file.data[0];

class TrajectoryProjection extends Component {
  constructor() {
    super();
    this.state = {
      VehicleInfo,
      startLat: VehicleInfo.trajectories[0].start_lat,
      startLon: VehicleInfo.trajectories[0].start_lon,
      timer: 0,
    };
  }

  moveMarker = () => {
    setInterval(() => {
      const { timer } = this.state;
      if (timer < VehicleInfo.trajectories.length) {
        this.setState({
          timer: timer + 1,
          startLat: file.data[0].trajectories[timer].start_lat,
          startLon: file.data[0].trajectories[timer].start_lon,
        });
        // console.log(VehicleInfo.trajectories[VehicleInfo.trajectories.length - 1].start_datetime - VehicleInfo.trajectories[timer].start_datetime);
        return clearInterval(this.moveMarker);
      }
    }, 50);
  }

  render() {
    return (
      <div>
        <ul>
          <span>Your are looking for vehiclue number:</span>
          <li>{VehicleInfo.id}</li>
          <span>Depature time:</span>
          <li>{VehicleInfo.start_date}</li>
        </ul>

        <button onClick={this.moveMarker} type="button">View Trajectory</button>
        <MapForVehicles {...this.state} />
      </div>
    );
  }
}

export default TrajectoryProjection;
