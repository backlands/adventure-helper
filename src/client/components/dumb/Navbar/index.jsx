import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/dice-roller/">Dice Roller</NavLink>
    </li>
  </ul>
</nav>
);

export default Navbar;
