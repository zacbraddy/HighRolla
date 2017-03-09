import React, { PropTypes } from 'react'
import '../styles/rollerDisplay.css';

const propTypes = {
  isRolling: PropTypes.bool,
  dieResult: PropTypes.number,
};

const RollerDisplay = (props) => (
  <div className={`die-result text-center ${props.isRolling ? 'text-danger' : 'text-default'}`}>{props.dieResult}</div>
);

RollerDisplay.propTypes = propTypes;

export default RollerDisplay;
