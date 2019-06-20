import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/pro-light-svg-icons';

import '../../styles/input.scss';

// eslint-disable-next-line object-curly-newline
const Checkbox = ({ name, checked = false, id, handleChange = null }) => {
  const icon = checked ? faCheckSquare : faSquare;


  return (
    <div className='form-input-checkbox'>
      <FontAwesomeIcon
        icon={icon}
        fixedWidth
        onClick={handleChange} />
      <input
        type='checkbox'
        name={name}
        id={id}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default Checkbox;
