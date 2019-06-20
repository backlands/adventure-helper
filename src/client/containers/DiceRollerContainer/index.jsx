import React from 'react';
import { faDiceD20 } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Column from '../../components/Column';

import './styles.scss';
class DiceRollerContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      rolls: [],
      dice: ['4', '6', '8', '10', '12', '20', '100'],
      custom: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCustomRoll = this.handleCustomRoll.bind(this);
  }

  handleClick(e) {
    const type = `1d${e.target.value} = `;
    const theRoll = Math.floor(Math.random() * e.target.value) + 1;
    const newRolls = [`${type}${theRoll}`, ...this.state.rolls];

    this.setState({ rolls: newRolls.slice(0, 20) });
  }

  handleChange(e) {
    const custom = { ...this.state.custom };
    custom[e.target.name] = e.target.value;

    this.setState({ custom });
  }

  handleCustomRoll() {
    const dice = Object.keys(this.state.custom).map(key => ({
      sides: Number(key), quantity: Number(this.state.custom[key]),
    }));

    const theRolls = [];
    const thrownDice = [];

    dice.forEach((set) => {
      let i = 0;

      thrownDice.push(`${set.quantity}d${set.sides}`);

      while (i < set.quantity) {
        theRolls.push(Math.floor(Math.random() * set.sides) + 1);
        i += 1;
      }
    });

    const total = theRolls.reduce((a, b) => a + b);
    const newRolls = [`${thrownDice.join(' + ')} = ${theRolls.join(' + ')} = ${total}`, ...this.state.rolls];

    this.setState({ rolls: newRolls.slice(0, 20) });
  }

  render() {
    const singleDiceButtons = this.state.dice.map((die, index) => (
      <Button
        key={index}
        className='full matchInput'
        value={die}
        handleClick={this.handleClick}
        >{`Roll a D${die}`}</Button>
    ));

    const multiDiceForm = this.state.dice.map((die, index) => (
      <Row>
        <Input
          key={index}
          text={`Roll a D${die}`}
          className='overlay-label'
          label={`rollingD${die}`}
          type='text'
          name={die}
          value={this.state.custom[die] ? this.state.custom[die] : ''}
          handleChange={this.handleChange}
        />
      </Row>
    ));

    const results = this.state.rolls.map((roll, index) => (
      <span className='aResult' key={index}>{roll}</span>
    ));

    return (
      <React.Fragment>
        <Header title='Dice Roller' icon={faDiceD20} />

        <Row classes='DiceRollerContainer'>
          <Column classes='is-8'>
            <Row classes='sides'>
              <Column classes='is-3'>
                <h4>Quick Roll</h4>
                {singleDiceButtons}
              </Column>

              <Column classes='is-3'>
                <h4>Custom Roll</h4>
                {multiDiceForm}
                <Button
                  className='full'
                  handleClick={this.handleCustomRoll}>
                    Roll them Dice</Button>
              </Column>
            </Row>

          </Column>

          <Column>
            <h2>Roll Results</h2>
            {results}
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}

export default DiceRollerContainer;
