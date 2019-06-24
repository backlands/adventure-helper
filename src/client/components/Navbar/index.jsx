import React from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faDiceD20, faHelmetBattle, faPencil, faCaretLeft, faQuestion, faTh,
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
      this.props.className,
      {
        expanded: !this.state.minimize,
      },
    );

    const toggler = this.props.hideToggle
      ? null
      : (
        <li className='minimizeToggle noCard pushEnd'>
          <a onClick={this.handleClick} >
            <FontAwesomeIcon icon={faCaretLeft} fixedWidth size='3x' />
            <span>Minimize</span>
          </a>
        </li>
      );

    return (

      <div className={minimize}>
        <ul>
          <li className='homeLink noCard'>
            <NavLink exact to="/">
              <FontAwesomeIcon icon={faHome} fixedWidth size='2x' />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/dice-roller/">
              <FontAwesomeIcon icon={faDiceD20} fixedWidth size='2x' />
              <span>Dice Roller</span>
              {/* eslint-disable-next-line max-len */}
              <p>A little tool for rolling dice as needed. Also supports specifying a set of dice to roll together and receive the individual rolls and the total.</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/note-sheet/">
              <FontAwesomeIcon icon={faPencil} fixedWidth size='2x' />
              <span>Note Sheet</span>
              {/* eslint-disable-next-line max-len */}
              <p>Keep track of NPC's, events, quests, and more campaign details across multiple nameable notes. When playing a campaign no detail is to small and you need to keep track!</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/character-sheet/">
              <FontAwesomeIcon icon={faHelmetBattle} fixedWidth size='2x' />
              <span>Character Sheet</span>
              {/* eslint-disable-next-line max-len */}
              <p>Quickly map out your characters abilities, skills, classes, and other stats with auto-calculations done for you. Currently supports Pathfinder 1E by Paizo.</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/graph-paper/">
              <FontAwesomeIcon icon={faTh} fixedWidth size='2x' />
              <span>Graph Paper</span>
              {/* eslint-disable-next-line max-len */}
              <p>Map out your dungeons on the fly in an interactive way. No guarantees that it works well at this point, or at all. This is experimental at best.</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/help/">
              <FontAwesomeIcon icon={faQuestion} fixedWidth size='2x' />
              <span>Help &amp; Info</span>
              {/* eslint-disable-next-line max-len */}
            </NavLink>
          </li>
          {toggler}
        </ul>
      </div>
    );
  }
}

export default Navbar;
