import {
  START_VEHICULE_MOVES,
  CONTINUE_VEHICULE_MOVES,
  STOP_VEHICULE_MOVES,
  RESET_VEHICULE_MOVES,
  NEXT_TRAM,
} from './types';
import store from '../store';

export const startVehiculesMove = () => (dispatch) => {
  const { speedMultiplicator } = store.getState().speed;
  dispatch({ type: START_VEHICULE_MOVES });
  const intervalId = setInterval(() => {
    const { TramStatus, currentTrajectorieNb } = store.getState().moves;
    const { positions } = store.getState().positions;
    if (currentTrajectorieNb === positions.length - 1 || TramStatus !== 'TramOnTheWay') {
      return clearInterval(intervalId);
    }
    return dispatch({ type: CONTINUE_VEHICULE_MOVES });
  }, 40 * speedMultiplicator);
};

export const stopVehiculesMove = () => (dispatch) => {
  dispatch({
    type: STOP_VEHICULE_MOVES,
  });
};

export const resetVehiculesMove = () => (dispatch) => {
  dispatch({
    type: RESET_VEHICULE_MOVES,
  });
};

export const nextTram = () => (dispatch) => {
  dispatch({
    type: NEXT_TRAM,
  });
};
