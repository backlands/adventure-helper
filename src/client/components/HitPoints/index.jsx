import React from 'react';
import Input from '../Input';
import Row from '../Row';
import TextArea from '../TextArea';

class CharacterDetails extends React.PureComponent {
  render() {
    return (
      <div>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
      </div>
    );
  }
}

export default CharacterDetails;
