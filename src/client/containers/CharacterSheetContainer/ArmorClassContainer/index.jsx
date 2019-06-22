import React from 'react';
import ArmorClass from '../../../components/ArmorClass';

class ArmorClassContainer extends React.Component {
  render() {
    const base = this.props.dexterity.baseModifier;
    const temp = this.props.dexterity.tempModifier;
    const bonus = temp !== '' ? temp : base;

    return (
      <React.Fragment>
        <ArmorClass
          title='AC'
          type='regular'
          ability={bonus}
          values={this.props.armor}
          handleChange={this.props.handleChange} />
        <ArmorClass
          title='Flat'
          type='flat'
          values={this.props.armor}
          handleChange={this.props.handleChange} />
        <ArmorClass
          title='Touch'
          type='touch'
          ability={bonus}
          values={this.props.armor}
          handleChange={this.props.handleChange} />
      </React.Fragment>
    );
  }
}

export default ArmorClassContainer;
