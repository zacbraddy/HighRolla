import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import RollerDisplay from '../../RollerDisplay/components/RollerDisplay';
import RollButton from '../../RollButton/components/RollButton';
import '../styles/die.css';

const propTypes = {
  sides: PropTypes.number,
};

class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieResult: 1,
      isRolling: false,
    };

    this.rollTimer = null;
    this.numberOfRolls = 0;
    this.rollSpeed = 100;

    this.doRoll = this.doRoll.bind(this);
  }

  componentDidMount() {
    this.doRoll();
  }

  doRoll() {
    if (!this.state.isRolling) {
      this.numberOfRolls = 10;
      this.setState({
        isRolling: true,
      });

      this.rollTimer = setTimeout(() => {
        this.getNewDieResult()
      }, this.rollSpeed);
    }
  }

  getNewDieResult() {
    if (this.numberOfRolls === 0) {
      this.rollTimer = null;
      this.setState({
        isRolling: false,
      });
      return;
    }

    this.setState({
      dieResult: Math.floor(((Math.random() * this.props.sides) + 1)),
    });

    this.numberOfRolls--;

    this.rollTimer = setTimeout(() => {
      this.getNewDieResult()
    }, this.rollSpeed);
  }

  render() {
    return (
      <Panel header={`1d${this.props.sides}`} className="zac-container center-block">
        <RollerDisplay isRolling={this.state.isRolling} dieResult={this.state.dieResult} />
        <RollButton isRolling={this.state.isRolling} doRoll={this.doRoll} />
      </Panel>
    );
  }
}

Die.PropTypes = propTypes;

export default Die;
