import React, { Component } from 'react';
import MapForVehicles from './MapForVehicles';
import file from './data.json';

const VehicleInfo = file.data[1];

/**
 * distance between two GPS points
 * taking into account that the Earth is not flat.
 */
const getDistance = (lat1, lon1, lat2, lon2) => {
  const degToRad = deg => deg * (Math.PI / 180);
  const R = 6371 * 1000; // Radius of the earth in meters
  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
  + Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2))
  * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in meters
  return distance;
};

class TrajectoryProjection extends Component {
  state = {
    trajectoriesRefine: [],
    timeIntervals: [],
    distanceIntervals: [],
  };

  componentWillMount() {
    const { trajectoriesRefine, timeIntervals, distanceIntervals } = this.state;
    VehicleInfo.trajectories.forEach((roadPortion) => {
      const LatDif = roadPortion.end_lat - roadPortion.start_lat;
      const LonDif = roadPortion.end_lon - roadPortion.start_lon;
      const distanceInterval = getDistance(
        roadPortion.start_lon,
        roadPortion.start_lat,
        roadPortion.end_lon,
        roadPortion.end_lat,
      );

      // we cut each roadPortion lines into smaller ones.
      // The number of smaller portions depends of the line size.
      // we adapt the timelapse to these new portions
      const distanceDivider = Math.round(distanceInterval / 10);
      for (let j = 0; j < distanceDivider; j += 1) {
        const latRefine = roadPortion.start_lat + (j) * LatDif / distanceDivider;
        const lonRefine = roadPortion.start_lon + (j) * LonDif / distanceDivider;
        const timeInterval = (roadPortion.end_datetime - roadPortion.start_datetime)
                             / distanceDivider;

        trajectoriesRefine.push([latRefine, lonRefine]);
        timeIntervals.push(timeInterval);
        distanceIntervals.push(distanceInterval);
      }
    });

    this.setState({
      trajectoriesRefine,
      timeIntervals,
      distanceIntervals,
    });
  }

  render() {
    return (
      <div>
        <ul>
          <span>Your are looking for vehicle number:</span>
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
