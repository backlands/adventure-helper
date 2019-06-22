import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as faOutline } from '@fortawesome/pro-light-svg-icons';
import { faSquare as faFilled } from '@fortawesome/pro-solid-svg-icons';

import '../../styles/input.scss';

// eslint-disable-next-line object-curly-newline
const Checkbox = ({ name, checked = false, id, handleChange = null }) => {
  const icon = checked ? faFilled : faOutline;


  return (
    <div className='form-input-checkbox'>
      <FontAwesomeIcon
        icon={icon}
        fixedWidth
        onClick={handleChange}
        size='lg' />
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
