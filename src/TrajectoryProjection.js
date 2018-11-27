import React, { Component } from 'react';
import MapForVehicles from './MapForVehicles';
import file from './data.json';

const VehicleInfo = file.data[0];

class TrajectoryProjection extends Component {
    state = {
      VehicleInfo,
      currentTrajectorieNb: 0,
      startLat: VehicleInfo.trajectories[0].start_lat,
      startLon: VehicleInfo.trajectories[0].start_lon,
      endLat: VehicleInfo.trajectories[0].end_lat,
      endLon: VehicleInfo.trajectories[0].end_lon,
    };

  startVehiculesMove = () => {
    setInterval(() => {
      const { currentTrajectorieNb } = this.state;
      if (currentTrajectorieNb < VehicleInfo.trajectories.length) {
        this.setState({
          currentTrajectorieNb: currentTrajectorieNb + 1,
          startLat: VehicleInfo.trajectories[currentTrajectorieNb].start_lat,
          startLon: VehicleInfo.trajectories[currentTrajectorieNb].start_lon,
          endLat: VehicleInfo.trajectories[currentTrajectorieNb].end_lat,
          endLon: VehicleInfo.trajectories[currentTrajectorieNb].end_lon,
        });
      }
      clearInterval(this.startVehiculesMove);
    }, 900);
  }

  render() {
    return (
      <div>
        <ul>
          <span>Your are looking for vehiclue number:</span>
          <li>{VehicleInfo.id}</li>
          <span>Depature date:</span>
          <li>{VehicleInfo.start_date}</li>
        </ul>
        <button onClick={this.startVehiculesMove} type="button">
          View Trajectory
        </button>
        <MapForVehicles {...this.state} />
      </div>
    );
  }
}

export default TrajectoryProjection;
