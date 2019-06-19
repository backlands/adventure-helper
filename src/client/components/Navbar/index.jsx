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
            <NavLink exact to="/"><FontAwesomeIcon icon={faHome} fixedWidth size='2x' /><span>Home</span></NavLink>
          </li>
          <li>
            <NavLink exact to="/dice-roller/"><FontAwesomeIcon icon={faDiceD20} fixedWidth size='2x' /><span>Dice Roller</span></NavLink>
          </li>
          <li>
            <NavLink exact to="/note-sheet/"><FontAwesomeIcon icon={faPencil} fixedWidth size='2x' /><span>Note Sheet</span></NavLink>
          </li>
          <li>
            <NavLink exact to="/character-sheet/"><FontAwesomeIcon icon={faHelmetBattle} fixedWidth size='2x' /><span>Character Sheet</span></NavLink>
          </li>
          <li className='minimizeToggle'>
            <a onClick={this.handleClick} >
              <FontAwesomeIcon icon={faCaretLeft} fixedWidth size='3x' />
              <span>Minimize</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
