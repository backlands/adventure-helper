import React from 'react';
import Input from '../../dumb/Input';

class CharacterDetails extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <Input
            name='name'
            text='Character Name'
            value={this.props.details.name}
            handleChange={this.props.handleChange} />
          <Input
            name='alignment'
            text='Alignment'
            value={this.props.details.alignment}
            handleChange={this.props.handleChange} />
          <Input
            name='deity'
            text='Deity'
            value={this.props.details.deity}
            handleChange={this.props.handleChange} />
          <Input
            name='languages'
            text='Languages'
            value={this.props.details.languages}
            handleChange={this.props.handleChange} />
          <Input
            name='background'
            text='Homeland &nbsp; Background'
            value={this.props.details.background}
            handleChange={this.props.handleChange} />
        </div>
        <div>
          <Input
            name='race'
            text='Race'
            value={this.props.details.race}
            handleChange={this.props.handleChange} />
          <Input
            name='size'
            text='Size'
            value={this.props.details.size}
            handleChange={this.props.handleChange} />
          <Input
            name='gender'
            text='Gender'
            value={this.props.details.gender}
            handleChange={this.props.handleChange} />
          <Input
            name='age'
            text='Age'
            value={this.props.details.age}
            handleChange={this.props.handleChange} />
          <Input
            name='height'
            text='Height'
            value={this.props.details.height}
            handleChange={this.props.handleChange} />
          <Input
            name='weight'
            text='Weight'
            value={this.props.details.weight}
            handleChange={this.props.handleChange} />
          <Input
            name='hair'
            text='Hair'
            value={this.props.details.hair}
            handleChange={this.props.handleChange} />
          <Input
            name='eyes'
            text='Eyes'
            value={this.props.details.eyes}
            handleChange={this.props.handleChange} />
          <Input
            name='skin'
            text='Skin'
            value={this.props.details.skin}
            handleChange={this.props.handleChange} />
          <Input
            name='player'
            text='Player'
            value={this.props.details.player}
            handleChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
