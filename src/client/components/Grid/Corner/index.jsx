import React from 'react';
import className from 'classnames';

import './styles.scss';

const Corner = ({ id, active = false }) => {
  const classes = className(
    'Corner',
    {
      active,
    },
  );

  return (
    <div className={classes}></div>
  );
};

export default Corner;
