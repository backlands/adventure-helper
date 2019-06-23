import React from 'react';
import CombatRoll from '../../../components/CombatRoll';
import CMD from '../../../components/CMD';

class CombatRollContainer extends React.PureComponent {
  totalBAB() {
    const babArray = this.props.classes
      .filter(aClass => aClass.bab !== undefined)
      .map((aClass) => {
        let row = aClass.bab.match(/[0-9]+/g);

        if (row !== null) { row = row.map(Number); }

        return row;
      });

    const result = babArray
      .sort((a, b) => (a.length - b.length))
      .reduce((r, a) => (
        a.map((b, i) => (
          (Number(r[i]) || 0) + Number(b)
        ), [])
      ));

    return result !== null ? result : [0];
  }

  render() {
    const babs = this.totalBAB();

    const checks = this.props.checks.map((check, index) => {
      const {
        type, ability, size = 0, misc = 0, temp = 0,
      } = check;

      const baseAbility = this.props.abilities[ability].baseModifier || 0;
      const tempAbility = this.props.abilities[ability].tempModifier || 0;
      const bonus = tempAbility !== undefined ? tempAbility : baseAbility;

      const outputTitle = type.charAt(0).toUpperCase() + type.slice(1);

      return (
        <CombatRoll
          key={index}
          id={index}
          title={outputTitle}
          bab={babs}
          ability={bonus}
          size={size}
          misc={misc}
          temp={temp}
          handleChange={this.props.handleChange}
        />
      );
    });


    const baseDEX = this.props.abilities.DEX.baseModifier || 0;
    const tempDEX = this.props.abilities.DEX.tempModifier || 0;
    const dexBonus = tempDEX !== 0 ? tempDEX : baseDEX;

    const baseSTR = this.props.abilities.STR.baseModifier || 0;
    const tempSTR = this.props.abilities.STR.tempModifier || 0;
    const strBonus = tempSTR !== 0 ? tempSTR : baseSTR;

    const cmdBonus = strBonus + dexBonus;

    return (
      <React.Fragment>
        {checks}
        <CMD
          bab={babs[0] || 0}
          abilities={cmdBonus}
          size={this.props.cmd.size}
          temp={this.props.cmd.temp}
          handleChange={this.props.cmdHandleChange} />
      </React.Fragment>
    );
  }
}

export default CombatRollContainer;
