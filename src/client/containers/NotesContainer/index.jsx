// Import React!
import React from 'react';
import { faPencil } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import noteData from './state.json';
import NoteEditorContainer from '../NoteEditorContainer';
import NotePicker from '../../components/NotePicker';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Column from '../../components/Column';

import './styles.scss';

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
    const activeNote = Number(e.target.id);
    this.setState({ activeNote });
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
        className={this.state.activeNote === index ? 'active' : ''}
        id={index}
        handleClick={this.handleClick}>{note.title}</Button>
    ));

    const active = this.state.activeNote !== null;
    const activeNote = this.state.activeNote;

    const deleteButton = active
      ? <Button className='delete' handleClick={this.handleDeleteNote}>Delete Note</Button>
      : null;

    return (
    <React.Fragment>
      <Header title='Note Sheet' icon={faPencil} />

      <div className='NotesContainer'>
        <Input
          value={this.state.notes[activeNote] ? this.state.notes[activeNote].title : ''}
          label='note-title'
          type='text'
          placeholder='Set note title...'
          name='note-title'
          defaultValue=''
          handleChange={this.handleChange}
          />
        <Row>
          <Column classes='note'>
            <NoteEditorContainer
              value={this.state.notes[activeNote] ? this.state.notes[activeNote].content : ''}
              handleChange={this.handleEditorChange} />
          </Column>
          <Column classes='picker is-3'>
            <NotePicker>
              {notes}
            </NotePicker>
            <Button
              className='createNew'
              handleClick={this.handleNewNote}>Create New Note</Button>
            {deleteButton}
          </Column>
        </Row>
      </div>
    </React.Fragment>
    );
  }
}

export default NoteSheetContainer;
