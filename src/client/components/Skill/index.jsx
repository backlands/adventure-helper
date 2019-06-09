import React from 'react';
import Checkbox from '../Checkbox';
import Column from '../Column';
import Input from '../Input';
import Row from '../Row';

class Skill extends React.PureComponent {
  render() {
    const trainedBonus = (this.props.classSkill && this.props.ranks) ? 2 : 0;

    const total = Number(this.props.ranks)
      + Number(this.props.abilityBonus)
      + Number(trainedBonus)
      + Number(this.props.misc);

    return (
      <Row>
        <Column className='left'>
          <Checkbox
            type='checkbox'
            name='classSkill'
            id={this.props.id}
            checked={this.props.classSkill}
            handleChange={this.props.handleChange} />
          <span>{this.props.title}</span>
          <span>{this.props.ability}</span>
        </Column>
        <Column className='right'>
          <Row>
            <Input
              type='number'
              name='total'
              readOnly
              value={total} />
            <Input
              type='number'
              name='ranks'
              id={this.props.id}
              value={this.props.ranks}
              handleChange={this.props.handleChange} />
            <Input
              type='number'
              name='bonus'
              readOnly
              value={this.props.abilityBonus} />
            <Input
              type='number'
              name='trained'
              readOnly
              value={trainedBonus} />
            <Input
              type='number'
              name='misc'
              id={this.props.id}
              value={this.props.misc}
              handleChange={this.props.handleChange} />
          </Row>
        </Column>
      </Row>
    );
  }
}

export default Skill;
