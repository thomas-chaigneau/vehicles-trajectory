import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapForVehicles from './MapForVehicles';
import './style/MapForVehicles.css';

class ManagementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrajectorieNb: 0,
      position: props.trajectories[0] || [90, 0],
      busOnTheWay: false,
      speed: 1000,
    };
    ManagementButton.propTypes = {
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
    const { busOnTheWay, speed } = this.state;
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
            <option value="1000">Real speed</option>
            <option value="100">accelereted x 10 </option>
            <option value="10">accelereted x 100</option>
            <option value="5">accelereted x 200</option>
          </select>
        </form>
        <MapForVehicles {...this.state} />
      </div>
    );
  }
}

export default ManagementButton;
