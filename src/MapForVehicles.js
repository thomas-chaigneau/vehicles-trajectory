import React from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import PropTypes from 'prop-types';
import './style/MapForVehicles.css';

const MapForVehicles = (props) => {
  MapForVehicles.propTypes = {
    startLat: PropTypes.number.isRequired,
    startLon: PropTypes.number.isRequired,
  };

  const { startLat, startLon } = props;
  const position = [startLat, startLon];
  return (
    <Map className="Map" center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
      />
      <CircleMarker center={position} color="red" radius={10} />
    </Map>
  );
};

export default MapForVehicles;
