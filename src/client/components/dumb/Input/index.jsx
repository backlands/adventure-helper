import React from 'react';

// eslint-disable-next-line object-curly-newline
const Input = ({ name, text, type = 'text', id = null, value = '', handleChange = null }) => (

  <div className='form-text'>
    <label htmlFor={name}>{text}</label>
    <input
      type={type}
      name={name}
      id={id}
      value={value === 0 ? '' : value}
      onChange={handleChange}
    />
  </div>

);

export default Input;
