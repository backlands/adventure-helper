import React from 'react';
import Input from '../../dumb/Input';

class Skill extends React.PureComponent {
  render() {
    const {
      armor,
      shield,
      dodge,
      size,
      natural,
      deflection,
      misc,
    } = this.props.values;

    let total = '';
    const base = 10;
    const gear = armor + shield;
    const always = size + deflection + misc;

    switch (this.props.type) {
      case 'regular':
        total = (base + gear + this.props.ability + dodge + natural + always);
        break;
      case 'flat':
        total = (base + gear + natural + always);
        break;
      case 'touch':
        total = (base + this.props.ability + dodge + always);
        break;
      default:
        break;
    }

    return (
      <div>
        {this.props.title}
        <Input
          type='number'
          name={this.props.type}
          readOnly
          value={total} />
        <span>=</span>
        <span>10</span>
        <span>+</span>
        {this.props.type !== 'touch' ? (
          <Input
          type='number'
          name='armor'
          id={this.props.id}
          value={this.props.values.armor}
          handleChange={this.props.handleChange} />
        ) : ('N/A')}
        <span>+</span>
        {this.props.type !== 'touch' ? (
          <Input
          type='number'
          name='shield'
          id={this.props.id}
          value={this.props.values.shield}
          handleChange={this.props.handleChange} />
        ) : ('N/A')}
        <span>+</span>
        {this.props.type !== 'flat' ? (
          <Input
          type='number'
          name='ability'
          readOnly
          value={this.props.ability} />
        ) : ('N/A')}
        <span>+</span>
        {this.props.type !== 'flat' ? (
          <Input
          type='number'
          name='dodge'
          id={this.props.id}
          value={this.props.values.dodge}
          handleChange={this.props.handleChange} />
        ) : ('N/A')}
        <span>+</span>
        <Input
          type='number'
          name='size'
          id={this.props.id}
          value={this.props.values.size}
          handleChange={this.props.handleChange} />
        <span>+</span>
        {this.props.type !== 'touch' ? (
          <Input
          type='number'
          name='natural'
          id={this.props.id}
          value={this.props.values.natural}
          handleChange={this.props.handleChange} />
        ) : ('N/A')}
        <span>+</span>
        <Input
          type='number'
          name='deflection'
          id={this.props.id}
          value={this.props.values.deflection}
          handleChange={this.props.handleChange} />
        <span>+</span>
        <Input
          type='number'
          name='misc'
          id={this.props.id}
          value={this.props.values.misc}
          handleChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Skill;
