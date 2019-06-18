import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faDiceD20, faHelmetBattle, faPencil, faCaretLeft,
} from '@fortawesome/pro-light-svg-icons';

import './styles.scss';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { minimize: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const minimize = !this.state.minimize;

    this.setState({
      minimize,
    });
  }

  render() {
    const minimize = classNames(
      'Navbar',
      {
        expanded: !this.state.minimize,
      },
    );

    return (
      <div className={minimize}>
        <ul>
          <li>
            <NavLink to="/"><span>Home</span> <FontAwesomeIcon icon={faHome} fixedWidth size='2x' /></NavLink>
          </li>
          <li>
            <NavLink to="/dice-roller/"><span>Dice Roller</span> <FontAwesomeIcon icon={faDiceD20} fixedWidth size='2x' /></NavLink>
          </li>
          <li>
            <NavLink to="/note-sheet/"><span>Note Sheet</span> <FontAwesomeIcon icon={faPencil} fixedWidth size='2x' /></NavLink>
          </li>
          <li>
            <NavLink to="/character-sheet/"><span>Character Sheet</span> <FontAwesomeIcon icon={faHelmetBattle} fixedWidth size='2x' /></NavLink>
          </li>
        </ul>

        <a
          className='minimizeToggle'
          onClick={this.handleClick} >
          <FontAwesomeIcon icon={faCaretLeft} fixedWidth size='3x' />
          <span>Minimize</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
