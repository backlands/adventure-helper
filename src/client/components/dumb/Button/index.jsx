import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const Input = ({ name, type, id, value, handleClick }) => (

  <div className='form-group'>
    <input
      type={type}
      name={name}
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
