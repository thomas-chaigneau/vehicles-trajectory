
import React, { Component } from 'react';
// eslint-disable-next-line
import { Map, TileLayer, CircleMarker } from 'react-leaflet';
import './style/MapForVehicles.css';

class MapForVehicles extends Component {
  constructor() {
    super();
    this.state = {
      // startLat: 33.5879,
      // startLon: -7.49994,
      zoom: 15,
    };
  }

  render() {
    const { zoom } = this.state;
    const { startLat, startLon } = this.props;
    const position = [startLat, startLon];
    return (
      <Map className="Map" center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        />
        <CircleMarker center={position} color="red" radius={10} />
      </Map>
    );
  }
}

export default MapForVehicles;
