import React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

class NoteSheet extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: this.props.value ? this.props.value : '' };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.value ? nextProps.value : '' });
  }

  render() {
    return (
      <ReactQuill
        theme='snow'
        value={this.state.text}
        onChange={this.props.handleChange} />
    );
  }
}

export default NoteSheet;
