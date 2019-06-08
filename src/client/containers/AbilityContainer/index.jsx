import React from 'react';
import Ability from '../../components/Ability';

class AbilityContianer extends React.Component {
  render() {
    const abilities = this.props.abilities.map((ability, index) => {
      const {
        title, score, item, temp, tempModifier,
      } = ability;

      const baseModifier = Math.floor((score + item - 10) / 2);
      let tempModified = '';

      if (Number(temp) !== 0 && temp !== '') {
        tempModified = tempModifier;
      }

      return (
        <Ability
          key={index}
          id={index}
          title={title}
          score={score}
          item={item}
          baseModifier={baseModifier}
          temp={temp}
          tempModifier={tempModified}
          handleChange={this.props.handleChange}
        />
      );
    });

    return abilities;
  }
}

export default AbilityContianer;
