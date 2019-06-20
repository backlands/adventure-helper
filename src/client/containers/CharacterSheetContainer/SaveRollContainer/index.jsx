import React from 'react';
import SaveRoll from '../../../components/SaveRoll';

class SaveRollContainer extends React.Component {
  totalBaseSave(type) {
    let totalSave = 0;

    this.props.classes.forEach((aClass) => {
      totalSave += aClass[type] ? aClass[type] : 0;
    });


    return totalSave;
  }

  render() {
    const saves = this.props.saves.map((save, index) => {
      const {
        type, ability, enhance, misc, temp,
      } = save;

      const baseAbility = this.props.abilities[ability].baseModifier;
      const tempAbility = this.props.abilities[ability].tempModifier;
      const bonus = tempAbility !== '' ? tempAbility : baseAbility;

      const outputTitle = type.charAt(0).toUpperCase() + type.slice(1);

      return (
        <SaveRoll
          key={index}
          id={index}
          title={`${outputTitle} Save`}
          base={this.totalBaseSave(type)}
          ability={bonus}
          enhance={enhance}
          misc={misc}
          temp={temp}
          handleChange={this.props.handleChange}
        />
      );
    });

    return (
      <React.Fragment>
        {saves}
      </React.Fragment>
    );
  }
}

export default SaveRollContainer;
