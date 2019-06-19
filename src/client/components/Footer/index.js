import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <div className='Footer'>
    <div className='notices'>
      <span>Copyright © 2019 Adventure Keeper</span>
      <span>Some assets used under the Open Gaming License</span>
      <NavLink exact to='/privacy-policy/'>Privacy Policy</NavLink>
    </div>
    <div className='nameTag'>AdventureHelper</div>
  </div>
);

export default Footer;
