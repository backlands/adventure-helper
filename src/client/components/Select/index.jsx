import React, { useState } from 'react';
import classNames from 'classnames';

import './styles.scss';

// eslint-disable-next-line object-curly-newline
const Select = ({ className, children, id, value }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={
      classNames(
        'Select',
        className, {
          'is-expanded': expanded,
        },
      )
    } id={id} value={value} onClick={() => setExpanded(!expanded)}>
      <div className="Selected">Pathfinder 1E</div>
      <div className='options'>
        {children}
        <div className="Option" id='0'>Dungeons & Dragons 5E</div>
        <div className="Option selected" id='1'>Pathfinder 1E</div>
        <div className="Option" id='2'>Pathfinder 2E</div>
        <div className="Option" id='3'>Starfinder</div>
      </div>
    </div>
  );
};

export default Select;
