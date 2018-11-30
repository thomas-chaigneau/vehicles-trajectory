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
      busOnTheWay: false,
    };
    MapForVehicles.propTypes = {
      trajectories: PropTypes.instanceOf(Array).isRequired,
    };
  }

  startVehiculesMove = () => {
    this.setState({ busOnTheWay: true });
    const ride = setInterval(() => {
      const { trajectories } = this.props;
      const { currentTrajectorieNb, busOnTheWay } = this.state;
      if (currentTrajectorieNb < trajectories.length && busOnTheWay) {
        this.setState({
          currentTrajectorieNb: currentTrajectorieNb + 1,
          position: trajectories[currentTrajectorieNb],
        });
      } else { clearInterval(ride); }
    }, 3);
  };

  stopVehiculesMove = () => {
    this.setState({ busOnTheWay: false });
  };

  resetVehiculesMove = () => {
    const { trajectories } = this.props;
    this.setState({
      busOnTheWay: false,
      currentTrajectorieNb: 0,
      position: trajectories[0],
    });
  };

  render() {
    const { position, busOnTheWay } = this.state;
    const casablanca = [33.57311, -7.589843];
    return (
      <div>
        <button onClick={() => this.startVehiculesMove()} type="button" disabled={busOnTheWay}>
          View Trajectory
        </button>

        <button onClick={() => this.stopVehiculesMove()} type="button">
          Stop Trajectory
        </button>

        <button onClick={() => this.resetVehiculesMove()} type="button">
          Reset Trajectory
        </button>

        <Map className="Map" center={casablanca} zoom={1}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
          />
          <CircleMarker
            opacity={busOnTheWay ? '1' : '0.1'}
            center={position || [90, 0]}
            color="red"
            radius={3}
          />
        </Map>
      </div>
    );
  }
}

export default MapForVehicles;
