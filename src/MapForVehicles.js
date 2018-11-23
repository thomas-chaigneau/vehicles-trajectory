import React from 'react';
// eslint-disable-next-line
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import './style/MapForVehicles.css';

const MapForVehicles = (props) => {
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
