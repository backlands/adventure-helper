import React from 'react';
import className from 'classnames';

import './styles.scss';

const Floor = ({ id, active = false, token = false }) => {
  const classes = className(
    'Floor',
    {
      active,
    },
  );

  return (
    <div className={classes}>{token}</div>
  );
};

export default Floor;
