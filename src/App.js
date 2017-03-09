import React, { Component } from 'react';
import DieCreator from './DieCreator/components/DieCreator';
import DieList from './DieList/components/DieList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dice: [20],
    };

    this.addDie = this.addDie.bind(this);
  }

  addDie(sides) {
    const newDieList = this.state.dice.concat([]);

    newDieList.push(sides);

    this.setState({
      dice: newDieList,
    });
  }

  render() {
    return (
      <div>
        <DieCreator addDie={this.addDie} />
        <DieList dice={this.state.dice} />
      </div>
    );
  }
}

export default App;
