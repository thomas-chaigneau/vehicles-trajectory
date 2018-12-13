import {
  START_VEHICULE_MOVES,
  STOP_VEHICULE_MOVES,
  RESET_VEHICULE_MOVES,
  CONTINUE_VEHICULE_MOVES,
} from '../actions/types';


const INITIAL_STATE = {
  TramStatus: 'TramNotOnTheWay',
  currentTrajectorieNb: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_VEHICULE_MOVES:
      return {
        ...state,
        TramStatus: 'TramOnTheWay',
        currentTrajectorieNb: state.currentTrajectorieNb + 1,
      };
    case CONTINUE_VEHICULE_MOVES:
      return {
        ...state,
        currentTrajectorieNb: state.currentTrajectorieNb + 1,
      };
    case STOP_VEHICULE_MOVES:
      return {
        ...state,
        TramStatus: 'TramNotOnTheWay',
      };
    case RESET_VEHICULE_MOVES:
      return {
        ...state,
        TramStatus: 'TramNotOnTheWay',
        currentTrajectorieNb: 0,
      };
    default:
      return state;
  }
};
