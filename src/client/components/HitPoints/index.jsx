import React from 'react';
import Input from '../Input';
import Row from '../Row';
import Column from '../Column';
import TextArea from '../TextArea';

class CharacterDetails extends React.PureComponent {
  render() {
    return (
      <div>
        <Row>
          <Column>
            <h3>Hit Points</h3>
          </Column>
          <Column>
            <Input
              name='total'
              text='Total HP'
              value={this.props.total}
              handleChange={this.props.handleChange} />
          </Column>
          <Column>
            <Input
              name='damageReduction'
              text='Damage Reduction'
              value={this.props.damageReduction}
              handleChange={this.props.handleChange} />
          </Column>
        </Row>
        <Row>
          <Column>
            <TextArea
              name='wounds'
              text='Wounds / Current Hit Points'
              value={this.props.wounds}
              handleChange={this.props.handleChange} />
          </Column>
          <Column classes='is-4'>
            <TextArea
              name='nonlethal'
              text='Nonlethal Damage'
              value={this.props.nonlethal}
              handleChange={this.props.handleChange} />
          </Column>
        </Row>
      </div>
    );
  }
}

export default CharacterDetails;
