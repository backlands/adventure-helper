import React from 'react';
import './styles.scss';

// eslint-disable-next-line object-curly-newline
const Button = ({ className, children, id, value, handleClick }) => (

    <button className={`Button ${className || ''}`} id={id} value={value} onClick={handleClick}>
      {children}
    </button>

);

export default Button;
