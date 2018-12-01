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
      speed: 1000,
    };
    MapForVehicles.propTypes = {
      trajectories: PropTypes.instanceOf(Array).isRequired,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  startVehiculesMove = () => {
    const { speed } = this.state;
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
    }, speed);
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

  handleChange(event) {
    this.setState({
      busOnTheWay: false,
      speed: event.target.value,
    });
  }

  render() {
    const { position, busOnTheWay, speed } = this.state;
    const casablanca = [33.57311, -7.589843];
    return (
      <div>
        <button onClick={() => this.startVehiculesMove()} disabled={busOnTheWay} type="button">
          View Trajectory
        </button>

        <button onClick={() => this.stopVehiculesMove()} type="button">
          Stop Trajectory
        </button>

        <button onClick={() => this.resetVehiculesMove()} type="button">
          Reset Trajectory
        </button>

        <form>
          <select id="speed" value={speed} onChange={this.handleChange}>
            <option value="1000">Vitesse réelle</option>
            <option value="100">Lime</option>
            <option value="10">Coconut</option>
            <option value="5">Mango</option>
          </select>
        </form>

        <Map className="Map" center={casablanca} zoom={12}>
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
