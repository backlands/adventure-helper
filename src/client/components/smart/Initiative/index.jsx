import React from 'react';
import Input from '../../dumb/Input';

class Skill extends React.PureComponent {
  render() {
    const total = this.props.ability + this.props.bonus;
    return (
      <div>
        <Input
          type='number'
          name='total'
          readOnly
          value={total} />
        <Input
          type='number'
          name='ability'
          readOnly
          value={this.props.ability} />
        <Input
          type='number'
          name='initiativeBonus'
          id={this.props.id}
          value={this.props.bonus}
          handleChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Skill;
