import React from 'react';
import './styles.scss';

const Column = ({
  children,
  classes = '',
}) => (
  <div className={`Column ${classes}`}>
    {children}
  </div>
);

export default Column;
