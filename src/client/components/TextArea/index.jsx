import React from 'react';

// eslint-disable-next-line object-curly-newline
const Input = ({ name, text, id, value, handleChange }) => (

  <div className='form-textarea'>
    <label htmlFor={name}>{text}</label>
    <textarea
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
    />
  </div>

);

export default Input;
