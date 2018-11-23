
import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class MapForVehicles extends Component {
  constructor() {
    super();
    this.state = {
      startLat: 33.5879,
      startLon: -7.49994,
      zoom: 13,
    };
  }

  render() {
    const { startLat, startLon, zoom } = this.state;
    const position = [startLat, startLon];
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapForVehicles;