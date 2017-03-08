import React from 'react';
import Die from '../../Die/components/Die';

const DieList = (props) => (
  <div>
    {
      props.dice.map((sides, i) => {
        return <Die key={i} sides={sides} />
      })
    }
  </div>
);

export default DieList;
