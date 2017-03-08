import React from 'react'
import '../styles/rollerDisplay.css';

const RollerDisplay = (props) => (
  <div className={`die-result text-center ${props.isRolling ? 'text-danger' : 'text-default'}`}>{props.dieResult}</div>
);

export default RollerDisplay;
