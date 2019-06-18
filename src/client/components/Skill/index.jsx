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
        <Column classes='shrink'>
          <Checkbox
            type='checkbox'
            name='classSkill'
            id={this.props.id}
            checked={this.props.classSkill}
            handleChange={this.props.handleChange} />
        </Column>
        <Column classes='is-3'><span>{this.props.title}</span></Column>
        <Column classes='is-1'><span>{this.props.ability}</span></Column>
        <Column>
          <Input
            type='number'
            name='total'
            text='Total'
            readOnly
            value={total} />
        </Column>
        <Column>
          <Input
            type='number'
            name='ranks'
            text='Ranks'
            id={this.props.id}
            value={this.props.ranks}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='number'
            name='bonus'
            text='Ability'
            readOnly
            value={this.props.abilityBonus} />
        </Column>
        <Column>
          <Input
            type='number'
            name='trained'
            text='Trained'
            readOnly
            value={trainedBonus} />
        </Column>
        <Column>
          <Input
            type='number'
            name='misc'
            text='Misc'
            id={this.props.id}
            value={this.props.misc}
            handleChange={this.props.handleChange} />
        </Column>
      </Row>
    );
  }
}

export default Skill;
