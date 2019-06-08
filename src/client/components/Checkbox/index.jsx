import React from 'react';

// eslint-disable-next-line object-curly-newline
const Checkbox = ({ name, checked = false, id, handleChange = null }) => (

  <div className='form-checkbox'>
    <input
      type='checkbox'
      name={name}
      id={id}
      checked={checked}
      onChange={handleChange}
    />
  </div>

);

export default Checkbox;
