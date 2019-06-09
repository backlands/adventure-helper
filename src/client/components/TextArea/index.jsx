import React from 'react';
import '../../styles/input.scss';

// eslint-disable-next-line object-curly-newline
const Input = ({ name, text, id, value, handleChange }) => (

  <div className='form-input-textarea'>
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
