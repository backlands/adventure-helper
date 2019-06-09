import React from 'react';
import Row from '../Row';
import Input from '../Input';

class CharacterDetails extends React.PureComponent {
  render() {
    return (
      <div>
        <Row>
          <Input
            name='name'
            className='overlay-label'
            text='Character Name'
            value={this.props.details.name}
            handleChange={this.props.handleChange} />
          <Input
            name='alignment'
            className='overlay-label'
            text='Alignment'
            value={this.props.details.alignment}
            handleChange={this.props.handleChange} />
          <Input
            name='deity'
            className='overlay-label'
            text='Deity'
            value={this.props.details.deity}
            handleChange={this.props.handleChange} />
          <Input
            name='languages'
            className='overlay-label'
            text='Languages'
            value={this.props.details.languages}
            handleChange={this.props.handleChange} />
          <Input
            name='background'
            className='overlay-label'
            text='Homeland &nbsp; Background'
            value={this.props.details.background}
            handleChange={this.props.handleChange} />
        </Row>
        <Row>
          <Input
            name='race'
            className='overlay-label'
            text='Race'
            value={this.props.details.race}
            handleChange={this.props.handleChange} />
          <Input
            name='size'
            className='overlay-label'
            text='Size'
            value={this.props.details.size}
            handleChange={this.props.handleChange} />
          <Input
            name='gender'
            className='overlay-label'
            text='Gender'
            value={this.props.details.gender}
            handleChange={this.props.handleChange} />
          <Input
            name='age'
            className='overlay-label'
            text='Age'
            value={this.props.details.age}
            handleChange={this.props.handleChange} />
          <Input
            name='height'
            className='overlay-label'
            text='Height'
            value={this.props.details.height}
            handleChange={this.props.handleChange} />
          <Input
            name='weight'
            className='overlay-label'
            text='Weight'
            value={this.props.details.weight}
            handleChange={this.props.handleChange} />
          <Input
            name='hair'
            className='overlay-label'
            text='Hair'
            value={this.props.details.hair}
            handleChange={this.props.handleChange} />
          <Input
            name='eyes'
            className='overlay-label'
            text='Eyes'
            value={this.props.details.eyes}
            handleChange={this.props.handleChange} />
          <Input
            name='skin'
            className='overlay-label'
            text='Skin'
            value={this.props.details.skin}
            handleChange={this.props.handleChange} />
          <Input
            name='player'
            className='overlay-label'
            text='Player'
            value={this.props.details.player}
            handleChange={this.props.handleChange} />
        </Row>
      </div>
    );
  }
}

export default CharacterDetails;
