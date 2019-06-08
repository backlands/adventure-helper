import React from 'react';
import CombatRoll from '../../components/CombatRoll';

class CombatRollContainer extends React.Component {
  constructor(props) {
    super(props);

    this.babs = this.totalBAB();
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

      const bab = this.totalBAB();

      return (
        <CombatRoll
          key={index}
          id={index}
          title={outputTitle}
          bab={bab}
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
      </React.Fragment>
    );
  }
}

export default CombatRollContainer;
