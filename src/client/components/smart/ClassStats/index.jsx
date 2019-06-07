import React from 'react';
import Input from '../../dumb/Input';

class Skill extends React.PureComponent {
  render() {
    return (
      <div>
        <Input
          type='number'
          name='hitdice'
          id={this.props.id}
          value={this.props.hitdice}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='className'
          id={this.props.id}
          value={this.props.className}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='bab'
          id={this.props.id}
          value={this.props.bab}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='skillPoints'
          id={this.props.id}
          value={this.props.skillPoints}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='favouredBonus'
          id={this.props.id}
          value={this.props.favouredBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='fortitudeBonus'
          id={this.props.id}
          value={this.props.fortitudeBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='reflexBonus'
          id={this.props.id}
          value={this.props.reflexBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='willBonus'
          id={this.props.id}
          value={this.props.willBonus}
          handleChange={this.props.handleChange} />
        <Input
          type='text'
          name='levels'
          id={this.props.id}
          value={this.props.levels}
          handleChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Skill;
