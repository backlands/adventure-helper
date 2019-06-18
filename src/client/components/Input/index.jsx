import React from 'react';
import classNames from 'classnames';
import '../../styles/input.scss';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const inputType = `form-input-${this.props.type || 'text'}`;

    const inputState = classNames(
      this.props.className,
      inputType, {
        'is-focused': this.state.isFocused,
        'not-empty': this.props.value,
      },
    );

    return (
      <div className={inputState}>
        <label htmlFor={this.props.name}>{this.props.text}</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          className={this.props.inputClass}
          id={this.props.id}
          size='unset'
          value={this.props.value === 0 ? '' : this.props.value}
          onChange={this.props.handleChange}
          onFocus={() => { this.setState({ isFocused: true }); }}
          onBlur={() => { this.setState({ isFocused: false }); }}
        />
      </div>
    );
  }
}

export default Input;
