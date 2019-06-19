import React from 'react';

import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ title, icon }) => (
  <div className='Header'>
    <h1>{title} <FontAwesomeIcon icon={icon} /></h1>
  </div>
);

export default Header;
