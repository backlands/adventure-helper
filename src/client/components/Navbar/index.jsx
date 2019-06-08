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
    <li>
      <NavLink to="/note-sheet/">Note Sheet</NavLink>
    </li>
    <li>
      <NavLink to="/character-sheet/">Character Sheet</NavLink>
    </li>
  </ul>
</nav>
);

export default Navbar;
