import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusCircle,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/pro-light-svg-icons';

import Input from '../Input';
import Row from '../Row';
import Column from '../Column';

import './styles.scss';

class Unit extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState({ removeMode: !this.state.removeMode });
  }

  render() {
    const {
      id,
      name,
      type,
      initiative = 0,
      hp = 0,
      speed = 0,
      melee = 0,
      ranged = 0,
      ac = 0,
      cmb = 0,
      cmd = 0,
      list = true,
      handleChange = () => {},
      removeConfirm = () => {},
    } = this.props;

    return (
      <div className={classNames('Unit', type, {
        list,
        removeMode: this.state.removeMode,
      })}>
        { list
            && <div className='remover'>
              <FontAwesomeIcon
                icon={faMinusCircle}
                onClick={this.toggleMode}
                size="lg"
                fixedWidth />
              <FontAwesomeIcon
                icon={faCheckCircle}
                onClick={removeConfirm}
                id={id}
                size="lg"
                fixedWidth />
              <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={this.toggleMode}
                size="lg"
                fixedWidth />
            </div>
        }
        <Row>
          <Column classes='is-6'>
            <Input
              type='text'
              name='name'
              text='Name'
              id={id}
              value={name}
              handleChange={handleChange} />
          </Column>
          <Column classes='is-2'>
            <Input
            type='number'
            name='initiative'
            text='Initiative'
            id={id}
            value={initiative}
            handleChange={handleChange} />
          </Column>
          <Column classes='is-2'>
            <Input
            type='number'
            name='hp'
            text='Hitpoints'
            id={id}
            value={hp}
            handleChange={handleChange} />
          </Column>
          <Column classes='is-2'>
            <Input
            type='text'
            name='speed'
            text='Speed'
            id={id}
            value={speed}
            handleChange={handleChange} />
          </Column>
        </Row>
        <Row>
          <Column classes='is-3'>
            <Input
            type='text'
            name='melee'
            text='Melee Bonus'
            id={id}
            value={melee}
            handleChange={handleChange} />
          </Column>
          <Column classes='is-3'>
            <Input
              type='text'
              name='ranged'
              text='Ranged Bonus'
              id={id}
              value={ranged}
              handleChange={handleChange} />
          </Column>
          <Column classes='is-2'>
            <Input
              type='number'
              name='ac'
              text='AC'
              id={id}
              value={ac}
              handleChange={handleChange} />
          </Column>
          <Column classes='is-2'>
            <Input
              type='number'
              name='cmb'
              text='CMB'
              id={id}
              value={cmb}
              handleChange={handleChange} />
          </Column>
          <Column classes='is-2'>
            <Input
              type='number'
              name='cmd'
              text='CMD'
              id={id}
              value={cmd}
              handleChange={handleChange} />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Unit;
