// Import React!
import React from 'react';
import noteData from './state.json';
import NoteEditorContainer from '../NoteEditorContainer';
import NotePicker from '../../components/NotePicker';
import Button from '../../components/Button';
import Input from '../../components/Input';

class NoteSheetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = noteData;

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  handleClick(e) {
    this.setState({ activeNote: e.target.id });
  }

  handleChange(e) {
    const notes = [...this.state.notes];
    const { activeNote } = this.state;

    if (activeNote) {
      notes[this.state.activeNote].title = e.target.value;
      this.setState({ notes, activeNote });
    } else {
      this.handleNewNote(null, e.target.value);
    }
  }

  handleEditorChange(value) {
    const notes = [...this.state.notes];
    const { activeNote } = this.state;

    if (activeNote) {
      notes[this.state.activeNote].content = value;
      this.setState({ notes, activeNote });
    }
  }

  handleNewNote(e, title = 'New Note') {
    const notes = [...this.state.notes];
    const activeNote = notes.length;

    notes.push({ title, content: '' });

    this.setState({ notes, activeNote });
  }

  handleDeleteNote() {
    const notes = [...this.state.notes];

    // eslint-disable-next-line
    if (confirm('Do you want to delete your current note?')) {
      notes.pop(this.activeNote);
    }

    this.setState({ notes, activeNote: null });
  }

  render() {
    const notes = this.state.notes.map((note, index) => (
      <Button
        key={index}
        id={index}
        handleClick={this.handleClick}>{note.title}</Button>
    ));

    const active = this.state.activeNote;

    const deleteButton = active
      ? <Button handleClick={this.handleDeleteNote}>Delete Note</Button>
      : null;

    return (
    <React.Fragment>
      <Input
        value={this.state.notes[active] ? this.state.notes[active].title : ''}
        label='note-title'
        text='Title: '
        type='text'
        name='note-title'
        defaultValue=''
        handleChange={this.handleChange}
        />
      <NoteEditorContainer
        value={this.state.notes[active] ? this.state.notes[active].content : ''}handleChange={this.handleEditorChange} />
      <NotePicker>
        {notes}
      </NotePicker>
      <Button
        handleClick={this.handleNewNote}>Create New Note</Button>
      {deleteButton}
    </React.Fragment>
    );
  }
}

export default NoteSheetContainer;
