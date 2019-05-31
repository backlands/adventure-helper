import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const Input = ({ name, label, text, type, id, value, handleClick }) => (

  <div className='form-group'>
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className={name}
      id={id}
      value={value}
      onClick={handleClick}
      required
    />
  </div>

);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Input;
