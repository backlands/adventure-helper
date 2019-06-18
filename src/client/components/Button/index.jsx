import React from 'react';
import './styles.scss';

// eslint-disable-next-line object-curly-newline
const Button = ({ children, id, value, handleClick }) => (

    <button className='Button' id={id} value={value} onClick={handleClick}>
      {children}
    </button>

);

export default Button;
