import React from 'react';
import Input from '../Input';

class Skill extends React.PureComponent {
  render() {
    return (
      <div>
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
          name='favouredBonus'
          id={this.props.id}
          value={this.props.stats.favouredBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='fortitudeBonus'
          id={this.props.id}
          value={this.props.stats.fortitudeBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='reflexBonus'
          id={this.props.id}
          value={this.props.stats.reflexBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='willBonus'
          id={this.props.id}
          value={this.props.stats.willBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='number'
          name='levels'
          id={this.props.id}
          value={this.props.stats.levels}
          handleChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Skill;
