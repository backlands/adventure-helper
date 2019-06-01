import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
