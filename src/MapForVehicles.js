import React from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import PropTypes from 'prop-types';
import './style/MapForVehicles.css';

const MapForVehicles = (props) => {
  MapForVehicles.propTypes = {
    position: PropTypes.instanceOf(Array).isRequired,
    busOnTheWay: PropTypes.bool.isRequired,
  };
  const { position, busOnTheWay } = props;
  const casablanca = [33.57311, -7.589843];
  return (
    <Map className="Map" center={casablanca} zoom={12}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
      />
      <CircleMarker
        opacity={busOnTheWay ? '1' : '0.1'}
        center={position}
        color="red"
        radius={3}
      />
    </Map>
  );
};
export default MapForVehicles;
