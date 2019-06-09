import React from 'react';
import Row from '../Row';
import Input from '../Input';

class Skill extends React.PureComponent {
  render() {
    return (
      <Row>
        <Input
          type='number'
          name='hitdice'
          id={this.props.id}
          value={this.props.stats.hitdice}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='className'
          id={this.props.id}
          value={this.props.stats.className}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='bab'
          id={this.props.id}
          value={this.props.stats.bab}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='skillPoints'
          id={this.props.id}
          value={this.props.stats.skillPoints}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='favoured'
          id={this.props.id}
          value={this.props.stats.favoured}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='fortitude'
          id={this.props.id}
          value={this.props.stats.fortitude}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='reflex'
          id={this.props.id}
          value={this.props.stats.reflex}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='will'
          id={this.props.id}
          value={this.props.stats.will}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='levels'
          id={this.props.id}
          value={this.props.stats.levels}
          handleChange={this.props.handleChange} />
      </Row>
    );
  }
}

export default Skill;
