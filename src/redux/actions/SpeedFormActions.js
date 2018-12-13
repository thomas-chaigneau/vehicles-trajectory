import {
  REAL_SPEED,
  MUTIPLY_BY_2,
  MUTIPLY_BY_4,
  MUTIPLY_BY_10,
  STOP_VEHICULE_MOVES,
} from './types';

export const realspeed = () => (dispatch) => {
  dispatch({ type: REAL_SPEED });
  dispatch({ type: STOP_VEHICULE_MOVES });
};

export const multiplyby2 = () => (dispatch) => {
  dispatch({ type: MUTIPLY_BY_2 });
  dispatch({ type: STOP_VEHICULE_MOVES });
};

export const multiplyby4 = () => (dispatch) => {
  dispatch({ type: MUTIPLY_BY_4 });
  dispatch({ type: STOP_VEHICULE_MOVES });
};

export const multiplyby10 = () => (dispatch) => {
  dispatch({ type: MUTIPLY_BY_10 });
  dispatch({ type: STOP_VEHICULE_MOVES });
};
