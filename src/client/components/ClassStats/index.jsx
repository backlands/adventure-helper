import React from 'react';
import Row from '../Row';
import Column from '../Column';
import Input from '../Input';

class Skill extends React.PureComponent {
  render() {
    return (
      <Row>
        <Column>
          <Input
            type='number'
            name='hitdice'
            text='HD'
            id={this.props.id}
            value={this.props.stats.hitdice}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='text'
            name='className'
            text='Class'
            id={this.props.id}
            value={this.props.stats.className}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='text'
            name='bab'
            text='BAB'
            id={this.props.id}
            value={this.props.stats.bab}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='number'
            name='skillPoints'
            text='Skills'
            id={this.props.id}
            value={this.props.stats.skillPoints}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='number'
            name='favoured'
            text='Favoured'
            id={this.props.id}
            value={this.props.stats.favoured}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='number'
            name='fortitude'
            text='Fort.'
            id={this.props.id}
            value={this.props.stats.fortitude}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='number'
            name='reflex'
            text='Reflex'
            id={this.props.id}
            value={this.props.stats.reflex}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='number'
            name='will'
            text='Will'
            id={this.props.id}
            value={this.props.stats.will}
            handleChange={this.props.handleChange} />
        </Column>
        <Column>
          <Input
            type='number'
            name='levels'
            text='Levels'
            id={this.props.id}
            value={this.props.stats.levels}
            handleChange={this.props.handleChange} />
        </Column>
      </Row>
    );
  }
}

export default Skill;
