import React from 'react';
import CombatRoll from '../../../components/CombatRoll';
import CMD from '../../../components/CMD';

class CombatRollContainer extends React.Component {
  constructor(props) {
    super(props);

    this.babs = this.totalBAB();

    const baseDEX = this.props.abilities.DEX.baseModifier;
    const tempDEX = this.props.abilities.DEX.tempModifier;
    this.dexBonus = tempDEX !== '' ? tempDEX : baseDEX;

    const baseSTR = this.props.abilities.STR.baseModifier;
    const tempSTR = this.props.abilities.STR.tempModifier;
    this.strBonus = tempSTR !== '' ? tempSTR : baseSTR;
  }

  totalBAB() {
    const babArray = this.props.classes
      .filter(aClass => aClass.bab !== undefined)
      .map(aClass => (
        aClass.bab.match(/[0-9]+/g)
      ));


    const result = babArray
      .sort((a, b) => (a.length - b.length))
      .reduce((r, a) => (
        a.map((b, i) => (
          (Number(r[i]) || 0) + Number(b)
        ), [])
      ));

    return result;
  }

  render() {
    const checks = this.props.checks.map((check, index) => {
      const {
        type, ability, size, misc, temp,
      } = check;

      const baseAbility = this.props.abilities[ability].baseModifier;
      const tempAbility = this.props.abilities[ability].tempModifier;
      const bonus = tempAbility !== '' ? tempAbility : baseAbility;

      const outputTitle = type.charAt(0).toUpperCase() + type.slice(1);

      return (
        <CombatRoll
          key={index}
          id={index}
          title={outputTitle}
          bab={this.babs}
          ability={bonus}
          size={size}
          misc={misc}
          temp={temp}
          handleChange={this.props.handleChange}
        />
      );
    });

    return (
      <React.Fragment>
        {checks}
        <CMD
          bab={this.babs[0]}
          abilities={this.strBonus + this.dexBonus}
          size={this.props.cmd.size}
          temp={this.props.cmd.temp}
          handleChange={this.props.cmdHandleChange} />
      </React.Fragment>
    );
  }
}

export default CombatRollContainer;
