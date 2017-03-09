import React, { PropTypes } from 'react';
import Die from '../../Die/components/Die';

const propTypes = {
  dice: PropTypes.arrayOf(PropTypes.number),
};

const DieList = (props) => (
  <div>
    {
      props.dice.map((sides, i) => {
        return <Die key={i} sides={sides} />
      })
    }
  </div>
);

DieList.propTypes = propTypes;

export default DieList;
