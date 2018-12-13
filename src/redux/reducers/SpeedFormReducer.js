import {
  REAL_SPEED,
  MUTIPLY_BY_2,
  MUTIPLY_BY_4,
  MUTIPLY_BY_10,
} from '../actions/types';


const INITIAL_STATE = {
  speedMultiplicator: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REAL_SPEED:
      return {
        ...state,
        speedMultiplicator: 1,
      };
    case MUTIPLY_BY_2:
      return {
        ...state,
        speedMultiplicator: 1 / 2,
      };
    case MUTIPLY_BY_4:
      return {
        ...state,
        speedMultiplicator: 1 / 4,
      };
    case MUTIPLY_BY_10:
      return {
        ...state,
        speedMultiplicator: 1 / 10,
      };
    default:
      return state;
  }
};
