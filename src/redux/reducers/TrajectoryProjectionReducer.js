import { CHOOSE_VEHICULE } from '../actions/types';
import file from '../../data.json';

const VehicleInfo = file.data;

const positions = [];

VehicleInfo[0].trajectories.forEach((roadPortion) => {
  const LatDif = roadPortion.end_lat - roadPortion.start_lat;
  const LonDif = roadPortion.end_lon - roadPortion.start_lon;
  const timeInterval = (roadPortion.end_datetime - roadPortion.start_datetime);
  for (let j = 0; j < timeInterval; j += 1) {
    const latRefine = roadPortion.start_lat + (j) * LatDif / timeInterval;
    const lonRefine = roadPortion.start_lon + (j) * LonDif / timeInterval;
    positions.push([latRefine, lonRefine]);
  }
});


const initialState = {
  positions,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_VEHICULE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
