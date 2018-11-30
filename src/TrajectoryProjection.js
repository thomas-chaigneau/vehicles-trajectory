import React, { Component } from 'react';
import MapForVehicles from './MapForVehicles';
import file from './data.json';

const VehicleInfo = file.data[0];

class TrajectoryProjection extends Component {
  state = {
    trajectories: [],
  };

  componentDidMount() {
    const { trajectories } = this.state;
    VehicleInfo.trajectories.forEach((roadPortion) => {
      const LatDif = roadPortion.end_lat - roadPortion.start_lat;
      const LonDif = roadPortion.end_lon - roadPortion.start_lon;
      const timeInterval = (roadPortion.end_datetime - roadPortion.start_datetime);

      for (let j = 0; j < timeInterval; j += 1) {
        const latRefine = roadPortion.start_lat + (j) * LatDif / timeInterval;
        const lonRefine = roadPortion.start_lon + (j) * LonDif / timeInterval;
        trajectories.push([latRefine, lonRefine]);
      }
    });
    this.setState({
      trajectories,
    });
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
        <MapForVehicles {...this.state} />
      </div>
    );
  }
}

export default TrajectoryProjection;
