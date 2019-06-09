import React from 'react';
import './styles.scss';

const Row = ({
  children,
  classes = '',
}) => (
  <div className={`Row ${classes}`}>
    {children}
  </div>
);

export default Row;
