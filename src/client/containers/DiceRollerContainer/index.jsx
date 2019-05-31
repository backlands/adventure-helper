import React from 'react';
import Input from '../../components/dumb/Input';

class DiceRollerContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dice: ['4', '6', '8', '10', '12', '20', '100'],
      rolls: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const type = `1d${e.target.value} = `;
    const theRoll = Math.floor(Math.random() * e.target.value) + 1;
    const newRolls = [`${type}${theRoll}`, ...this.state.rolls];

    this.setState({ rolls: newRolls.slice(0, 20) });
  }

  render() {
    const diceButtons = this.state.dice.map((die, index) => (
      <Input
        key={index}
        text={`Roll a D${die}`}
        label={`Roll a D${die}`}
        type='button'
        name={`d${die}`}
        value={die}
        handleClick={this.handleClick}
      />
    ));

    const results = this.state.rolls.map((roll, index) => (
      <p key={index}>{roll}</p>
    ));

    return (
      <form id='dice-rollers'>
        <h2>Dice Roller</h2>
        {diceButtons}

        {results}
      </form>
    );
  }
}

export default DiceRollerContainer;
