import React from 'react';
import classNames from 'classnames';
import '../../styles/input.scss';

class TextArea extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const classes = classNames(
      'form-input-textarea',
      this.props.className, {
        'is-focused': this.state.isFocused,
        'not-empty': this.props.value !== '',
      },
    );

    return (
      <div className={classes}>
        <label htmlFor={this.props.name}>{this.props.text}</label>
        <textarea
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.handleChange}
          onFocus={() => { this.setState({ isFocused: true }); }}
          onBlur={() => { this.setState({ isFocused: false }); }}
        />
      </div>
    );
  }
};

export default TextArea;
