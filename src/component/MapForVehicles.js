import React from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import PropTypes from 'prop-types';
import { startVehiculesMove, stopVehiculesMove, resetVehiculesMove } from '../redux/actions/ManagementButtonsActions';
import '../style/MapForVehicles.css';

const MapForVehicles = (props) => {
  const {
    trajectories,
    positionNb,
    TramStatus,
  } = props;
  const casablanca = [33.57311, -7.589843];
  return (
    <Map className="Map" center={casablanca} zoom={12}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
      />
      <CircleMarker
        opacity={TramStatus === 'TramOnTheWay' ? '1' : '0.1'}
        center={trajectories[positionNb]}
        color="red"
        radius={3}
      />
    </Map>
  );
};

const mapStateToProps = state => ({
  trajectories: state.positions.positions,
  positionNb: state.moves.currentTrajectorieNb,
  TramStatus: state.moves.TramStatus,
});

MapForVehicles.propTypes = {
  trajectories: PropTypes.instanceOf(Array).isRequired,
  positionNb: PropTypes.number.isRequired,
  TramStatus: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  {
    resetVehiculesMove,
    startVehiculesMove,
    stopVehiculesMove,
  },
)(MapForVehicles);
