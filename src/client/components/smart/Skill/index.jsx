import React from 'react';
import Input from '../../dumb/Input';
import Checkbox from '../../dumb/Checkbox';

class Skill extends React.PureComponent {
  render() {
    const trainedBonus = (this.props.classSkill && this.props.ranks) ? 2 : 0;

    const total = Number(this.props.ranks)
      + Number(this.props.abilityBonus)
      + Number(trainedBonus)
      + Number(this.props.misc);

    return (
      <div>
        <div className='left'>
          <Checkbox
            type='checkbox'
            name='classSkill'
            id={this.props.id}
            checked={this.props.classSkill}
            handleChange={this.props.handleChange} />
          <span>{this.props.title}</span>
          <span>{this.props.attribute}</span>
        </div>
        <div className='right'>
          <Input
            name='total'
            readOnly
            value={total} />
          <Input
            name='ranks'
            id={this.props.id}
            value={this.props.ranks}
            handleChange={this.props.handleChange} />
          <Input
            name='bonus'
            readOnly
            value={this.props.abilityBonus} />
          <Input
            name='trained'
            readOnly
            value={trainedBonus} />
          <Input
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
