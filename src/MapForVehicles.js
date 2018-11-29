import React, { Component } from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import PropTypes from 'prop-types';
import './style/MapForVehicles.css';

class MapForVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrajectorieNb: 0,
      position: props.trajectoriesRefine[0],
      busOnTheWay: false,
    };
    MapForVehicles.propTypes = {
      trajectoriesRefine: PropTypes.instanceOf(Array).isRequired,
      timeIntervals: PropTypes.instanceOf(Array).isRequired,
    };
  }

  // taking into accont that vehicule position
  startVehiculesMove = (time) => {
    this.setState({ busOnTheWay: true });
    setTimeout(() => {
      const { trajectoriesRefine, timeIntervals } = this.props;
      const { currentTrajectorieNb } = this.state;
      if (currentTrajectorieNb < trajectoriesRefine.length) {
        this.setState({
          currentTrajectorieNb: currentTrajectorieNb + 1,
          position: trajectoriesRefine[currentTrajectorieNb],
        }, this.startVehiculesMove(timeIntervals[currentTrajectorieNb]));
      }
    }, time * 10);
  };

  render() {
    const { position, busOnTheWay } = this.state;
    const { timeIntervals } = this.props;
    const casablanca = [33.57311, -7.589843];
    return (
      <div>
        <button onClick={() => this.startVehiculesMove(timeIntervals[0])} type="button">
          View Trajectory
        </button>
        <Map className="Map" center={casablanca} zoom={12}>
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
