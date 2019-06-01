import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const Button = ({ children, id, value, handleClick }) => (

    <button id={id} value={value} onClick={handleClick}>
      {children}
    </button>

);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
