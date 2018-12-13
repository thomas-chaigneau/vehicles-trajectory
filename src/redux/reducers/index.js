import { combineReducers } from 'redux';
import SpeedFormReducer from './SpeedFormReducer';
import ManagementButtonsReducer from './ManagementButtonsReducer';
import TrajectoryProjectionReducer from './TrajectoryProjectionReducer';

export default combineReducers({
  moves: ManagementButtonsReducer,
  positions: TrajectoryProjectionReducer,
  speed: SpeedFormReducer,
});
