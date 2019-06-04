import React from 'react';

// eslint-disable-next-line object-curly-newline
const Input = ({ name, label, text, type, id, value, handleChange }) => (

  <div className='form-group'>
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
    />
  </div>

);

export default Input;
