import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

class CharacterDetails extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <h2>Hit Points</h2>
          <Input
            name='total'
            text='Total HP'
            value={this.props.total}
            handleChange={this.props.handleChange} />
          <Input
            name='damageReduction'
            text='Damage Reduction'
            value={this.props.damageReduction}
            handleChange={this.props.handleChange} />
        </div>
        <div>
          <TextArea
            name='wounds'
            text='Wounds / Current Hit Points'
            value={this.props.wounds}
            handleChange={this.props.handleChange} />
          <TextArea
            name='nonlethal'
            text='Nonlethal Damage'
            value={this.props.nonlethal}
            handleChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
