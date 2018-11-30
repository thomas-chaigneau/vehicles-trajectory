import React, { Component } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import PropTypes from 'prop-types';
import './style/MapForVehicles.css';

class MapForVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrajectorieNb: 0,
      position: props.trajectories[0],
      // distance: props.distanceIntervals[0],
      busOnTheWay: false,
    };
    MapForVehicles.propTypes = {
      trajectories: PropTypes.instanceOf(Array).isRequired,
    };
  }

  startVehiculesMove = () => {
    this.setState({ busOnTheWay: true });
    setInterval(() => {
      const { trajectories } = this.props;
      const { currentTrajectorieNb } = this.state;
      if (currentTrajectorieNb < trajectories.length) {
        this.setState({
          currentTrajectorieNb: currentTrajectorieNb + 1,
          position: trajectories[currentTrajectorieNb],
        });
      }
    }, 10);
  };

  render() {
    const { position, busOnTheWay } = this.state;
    const casablanca = [33.57311, -7.589843];
    console.log('position', position);
    if (!position) {
      return (
        <div>
          <button onClick={() => this.startVehiculesMove()} type="button">
              View Trajectory
          </button>
          <p>Loading</p>
        </div>
      );
    }
    return (
      <div>
        <button onClick={() => this.startVehiculesMove()} type="button">
          View Trajectory
        </button>
        <Map className="Map" center={casablanca} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
          />
          <CircleMarker opacity={busOnTheWay ? '1' : '0.1'} center={position} color="red" radius={3} />
        </Map>
      </div>
    );
  }
}

export default MapForVehicles;
