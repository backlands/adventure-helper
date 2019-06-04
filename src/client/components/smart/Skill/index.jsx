import React from 'react';
import Input from '../../dumb/Input';

class Skill extends React.Component {
  render() {
    const trained = (this.props.classSkill && this.props.ranks) ? 2 : 0;
    const total = Number(this.props.ranks)
      + Number(this.props.abilityBonus)
      + Number(trained)
      + Number(this.props.misc);

    return (
      <div>
        <div className='left'>
          <Input
            type='checkbox'
            name='classSkill'
            id={this.props.id}
            value={trained}
            handleChange={this.props.handleChange} />
          <span>{this.props.title}</span>
          <span>{this.props.attribute}</span>
        </div>
        <div className='right'>
          <Input
            type='text'
            disabled
            value={total}
            name='total' />
          <Input
            type='text'
            name='ranks'
            id={this.props.id}
            value={this.props.ranks}
            handleChange={this.props.handleChange} />
          <Input
            type='text'
            disabled
            value={this.props.abilityBonus}
            name='bonus' />
          <Input
            type='text'
            disabled
            value={trained}
            name='trained' />
          <Input
            type='text'
            name='misc'
            id={this.props.id}
            value={this.props.misc}
            handleChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}

export default Skill;
