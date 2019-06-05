import React from 'react';
import Input from '../../dumb/Input';

class Ability extends React.PureComponent {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <Input
          name='score'
          id={this.props.id}
          value={this.props.score}
          handleChange={this.props.handleChange} />
        <Input
          name='item'
          id={this.props.id}
          value={this.props.item}
          handleChange={this.props.handleChange} />
        <Input
          name='baseModifier'
          id={this.props.id}
          readOnly
          value={this.props.baseModifier} />
        <Input
          name='temp'
          id={this.props.id}
          value={this.props.temp}
          handleChange={this.props.handleChange} />
        <Input
          name='tempModifier'
          id={this.props.id}
          readOnly
          value={this.props.tempModifier} />
      </div>
    );
  }
}

export default Ability;
