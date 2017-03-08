import React from 'react'
import { Button } from 'react-bootstrap'

const RollButton = (props) => (
  <Button className="center-block" bsSize="large" bsStyle="success" onClick={props.doRoll} disabled={props.isRolling}>Roll!</Button>
);

export default RollButton;
