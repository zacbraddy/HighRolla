import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import RollerDisplay from './RollerDisplay/components/RollerDisplay';
import RollButton from './RollButton/components/RollButton';
import './App.css';

class App extends Component {
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
      dieResult: Math.floor(((Math.random() * 20) + 1)),
    });

    this.numberOfRolls--;

    this.rollTimer = setTimeout(() => {
      this.getNewDieResult()
    }, this.rollSpeed);
  }

  render() {
    return (
      <Panel header={false} bsClass="zac-container center-block panel">
        <RollerDisplay isRolling={this.state.isRolling} dieResult={this.state.dieResult} />
        <RollButton isRolling={this.state.isRolling} doRoll={this.doRoll} />
      </Panel>
    );
  }
}

export default App;
