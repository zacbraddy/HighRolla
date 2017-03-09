import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const propTypes = {
  isRolling: PropTypes.bool,
};

const RollButton = (props) => (
  <Button className="center-block" bsSize="large" bsStyle="success" onClick={props.doRoll} disabled={props.isRolling}>Roll!</Button>
);

RollButton.propTypes = propTypes;

export default RollButton;
