import React from 'react';
import { faDiceD20 } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

// eslint-disable-next-line object-curly-newline
const Loader = ({ className }) => (

  <div className={`Loader ${className || ''}`}>
    <FontAwesomeIcon icon={faDiceD20} size='4x' spin />
    <span>Loading...</span>
  </div>

);

export default Loader;
