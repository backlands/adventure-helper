import React from 'react';

// eslint-disable-next-line object-curly-newline
const Button = ({ children, id, value, handleClick }) => (

    <button id={id} value={value} onClick={handleClick}>
      {children}
    </button>

);

export default Button;
