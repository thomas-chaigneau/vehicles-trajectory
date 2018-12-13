import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpeedForm from './SpeedForm';
import {
  startVehiculesMove,
  stopVehiculesMove,
  resetVehiculesMove,
} from '../redux/actions/ManagementButtonsActions';

const ManagementButton = (props) => {
  const { TramStatus } = props;
  return (
    <div>
      <button
        disabled={TramStatus === 'TramOnTheWay'}
        onClick={() => props.startVehiculesMove()}
        type="button"
      >
        View Trajectory
      </button>
      <button
        disabled={TramStatus === 'TramNotOnTheWay'}
        onClick={() => props.stopVehiculesMove()}
        type="button"
      >
        Stop Trajectory
      </button>
      <button
        onClick={() => props.resetVehiculesMove()}
        type="button"
      >
        Reset Trajectory
      </button>
      <SpeedForm />
    </div>
  );
};

const mapStateToProps = state => ({
  startVehiculesMove: state.moves.positions,
  stopVehiculesMove: state.moves.positions,
  resetVehiculesMove: state.moves.positions,
  TramStatus: state.moves.TramStatus,
});

ManagementButton.propTypes = {
  startVehiculesMove: PropTypes.func.isRequired,
  stopVehiculesMove: PropTypes.func.isRequired,
  resetVehiculesMove: PropTypes.func.isRequired,
  TramStatus: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  {
    startVehiculesMove,
    stopVehiculesMove,
    resetVehiculesMove,
  },
)(ManagementButton);
