import React from 'react';
import { NavLink } from 'react-router-dom';

import logoImage from '../../assets/logo.png';

import './styles.scss';

const Footer = () => (
  <div className='Footer'>
    <div className='notices'>
      <span>Copyright © 2019 AdventureHelper</span>
      <span>Some assets used under the <NavLink exact to='/ogl/'>Open Gaming License</NavLink></span>
      <NavLink exact to='/privacy-policy/'>Privacy Policy</NavLink>
    </div>
    <div className='logoArea'>
      <span>AdventureHelper</span>
      <img src={logoImage} alt='AdventureHelper Logo' />
    </div>
  </div>
);

export default Footer;
