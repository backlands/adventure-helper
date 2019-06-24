import React from 'react';
import className from 'classnames';

import './styles.scss';

const Wall = ({ id, vertical = false, active = false, door = false }) => {
  const classes = className(
    'Wall',
    {
      active,
      door,
      vertical,
    },
  );

  return (
    <div className={classes}></div>
  );
};

export default Wall;
