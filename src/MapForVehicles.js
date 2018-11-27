/* eslint-disable */
import React, { Component } from 'react';
import { Map, TileLayer, CircleMarker, Polyline, Circle } from 'react-leaflet';
import './style/MapForVehicles.css';

const trajectories = [
  {
    "delay": 0,
    "end_lat": 33.58758,
    "end_lon": -7.50056,
    "occupancy": 42,
    "start_lat": 33.5879,
    "start_lon": -7.49994,
    "end_datetime": 1527807670,
    "occupancy_rate": 0.07,
    "start_datetime": 1527807662
  },
  {
    "delay": 0,
    "end_lat": 33.58734,
    "end_lon": -7.50092,
    "occupancy": 42,
    "start_lat": 33.58758,
    "start_lon": -7.50056,
    "end_datetime": 1527807675,
    "occupancy_rate": 0.07,
    "start_datetime": 1527807670
  }]

class MapForVehicles extends Component {
  constructor() {
    super();
    this.state = {
      tablebetween2point:[],
    };
  }

  componentWillReceiveProps() {
      const { startLat, startLon, endLat, endLon } = this.props;
      const toAddlat = (endLat - startLat) / 10;
      const toAddlon = (endLon - startLon) / 10;
      let tablebetween2point = [[startLat, startLon]];
      for (let i = 0; i < 10; i++) {
        let nextLat = tablebetween2point[i][0] + toAddlat
        let nextLon = tablebetween2point[i][1] + toAddlon
        tablebetween2point.push([nextLat, nextLon])
      }
      this.setState({
        tablebetween2point: tablebetween2point,
      });
  }

  render() {
    const { startLat, startLon, endLat, endLon } = this.props;
    const position = [startLat, startLon];
    const { tablebetween2point } = this.state;
    console.log('positions', tablebetween2point);
    return (
      <Map className="Map" center={tablebetween2point[0]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        />
       <CircleMarker center={position} color="red" radius={10} />

        { tablebetween2point.map((element, id) => <Circle key={id} center={element} radius={1} />)}

      </Map>
    );
  }
}

export default MapForVehicles;

















// class MapForVehicles extends Component {
//   constructor() {
//     super();
//     this.state = {
//       positions: [[33.5879, -7.49994], [33.58758, -7.50056]],
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       const { positions } = this.state;
//       const lastMarker = positions[positions.length - 1];
//       const newMarker = lastMarker.map(coord => coord += -0.001);

//       this.setState((prevState) => {
//         const newSample = [...prevState.positions];
//         positions.push(newMarker);
//         return { sample: newSample };
//       });
//     }, 1000);
//   }

//   render() {
//     const { positions } = this.state;
//     console.log('positions', positions);
//     return (
//       <Map className="Map" center={positions[0]} zoom={13}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
//         />
//         { positions.map(element => <Circle center={element} radius={10} />)}
//       </Map>
//     );
//   }
// }

// export default MapForVehicles;

// const MapForVehicles = (props) => {
//   MapForVehicles.propTypes = {
//     startLat: PropTypes.number.isRequired,
//     startLon: PropTypes.number.isRequired,
//     endLat: PropTypes.number.isRequired,
//     endLon: PropTypes.number.isRequired,
//   };

//   const { startLat, startLon, endLat, endLon } = props;
//   const position = [startLat, startLon];
//   const startPoint = [startLat, startLon];
//   const endPoint = [endLat, endLon];
//   const latlngs = [startPoint, endPoint];

//   return (
//     <Map className="Map" center={position} zoom={13}>
//       <TileLayer
//         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
//       />
//       <CircleMarker center={position} color="red" radius={10} />
//       <Polyline color="blue" positions={L.AnimatedMarker(latlngs)}>
//         <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
//       </Polyline>
//     </Map>
//   );
// };

// export default MapForVehicles;









// const MapForVehicles = (props) => {
//   MapForVehicles.propTypes = {
//     startLat: PropTypes.number.isRequired,
//     startLon: PropTypes.number.isRequired,
//     endLat: PropTypes.number.isRequired,
//     endLon: PropTypes.number.isRequired,
//   };

//   const { startLat, startLon, endLat, endLon } = props;
//   const position = [startLat, startLon];
//   const startPoint = [startLat, startLon];
//   const endPoint = [endLat, endLon];
//   const latlngs = [startPoint, endPoint];

//   return (
//     <Map className="Map" center={position} zoom={13}>
//       <TileLayer
//         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
//       />
//       <CircleMarker center={position} color="red" radius={10} />
//       <Polyline color="blue" positions={L.AnimatedMarker(latlngs)}>
//         <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
//       </Polyline>
//     </Map>
//   );
// };

// export default MapForVehicles;
