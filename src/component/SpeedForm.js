import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  realspeed,
  multiplyby2,
  multiplyby4,
  multiplyby10,
} from '../redux/actions/SpeedFormActions';

const SpeedForm = props => (
  <div>
    <div>
      <label htmlFor="realspeed">
        <input type="radio" name="speed" id="realspeed" onChange={() => props.realspeed()} />
        Real speed
      </label>
    </div>
    <div>
      <label htmlFor="multiplyby2">
        <input type="radio" name="speed" id="multiplyby2" onChange={() => props.multiplyby2()} />
        accelereted x 2
      </label>
    </div>
    <div>
      <label htmlFor="multiplyby4">
        <input type="radio" name="speed" id="multiplyby4" onChange={() => props.multiplyby4()} />
        accelereted x 4
      </label>
    </div>
    <div>
      <label htmlFor="multiplyby10">
        <input type="radio" name="speed" id="multiplyby10" onChange={() => props.multiplyby10()} />
        accelereted x  10
      </label>
    </div>
  </div>
);


SpeedForm.propTypes = {
  realspeed: PropTypes.func.isRequired,
  multiplyby2: PropTypes.func.isRequired,
  multiplyby4: PropTypes.func.isRequired,
  multiplyby10: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  speedMultiplicator: state.speed.speedMultiplicator,
});

export default connect(
  mapStateToProps,
  {
    realspeed,
    multiplyby2,
    multiplyby4,
    multiplyby10,
  },
)(SpeedForm);
