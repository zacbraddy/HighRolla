import React, { Component, PropTypes } from 'react';
import { Button, ControlLabel, FormControl } from 'react-bootstrap';
import '../styles/DieCreator.css';

const propTypes = {
  addDie: PropTypes.func,
}

class DieCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDieSides: 1,
      sidesValid: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddDieButtonClick = this.handleAddDieButtonClick.bind(this);
  }

  handleChange(ev) {
    if (ev.target.value > 0) {
      this.setState({
        newDieSides: ev.target.value,
        sidesValid: true,
      });
    } else if(ev.target.value.length === 0) {
      this.setState({
        newDieSides: ev.target.value,
        sidesValid: false,
      });
    }
  }

  handleAddDieButtonClick() {
    this.props.addDie(this.state.newDieSides);
  }

  render() {
    return (
      <div className="new-die-input center-block">
        <ControlLabel htmlFor="new-die"/>
        <FormControl
          type="number"
          id="new-die"
          value={this.state.newDieSides}
          onChange={this.handleChange}
        />
        <Button
          className="center-block new-die-add-button"
          disabled={!this.state.sidesValid}
          bsStyle="success"
          onClick={this.handleAddDieButtonClick}
        >
          Add new Die
        </Button>
      </div>
    );
  }
}

DieCreator.propTypes = propTypes;

export default DieCreator;
