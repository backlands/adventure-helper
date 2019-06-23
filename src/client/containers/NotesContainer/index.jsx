// Import React!
import React from 'react';
import { faPencil } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import NoteEditorContainer from './NoteEditorContainer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Modal from '../../components/Modal';
import Save from '../../components/Save';

import './styles.scss';

class NoteSheetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.storageID = 'NOTES';

    this.loadedState = JSON.parse(localStorage.getItem(this.storageID));
    this.baseState = { activeNote: null, notes: [] };

    this.state = this.loadedState || this.baseState;

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  componentWillUnmount() {
    this.saveHandler();
  }

  handleClick(e) {
    const activeNote = Number(e.target.id);
    this.setState({ activeNote });
  }

  handleChange(e) {
    const notes = [...this.state.notes];
    const { activeNote } = this.state;

    if (activeNote !== null) {
      notes[activeNote].title = e.target.value;
      this.setState({ notes, activeNote });
    } else {
      this.handleNewNote(null, e.target.value);
    }
  }

  handleEditorChange(value) {
    const notes = [...this.state.notes];
    const { activeNote } = this.state;

    if (activeNote !== null) {
      notes[activeNote].content = value;
      this.setState({ notes, activeNote });
    }
  }

  handleNewNote(e, title = '') {
    const notes = [...this.state.notes];
    const activeNote = notes.length;

    notes.push({ title, content: '' });

    this.setState({ notes, activeNote });
  }

  handleDeleteNote() {
    const notes = [...this.state.notes];

    notes.splice(this.state.activeNote, 1);

    this.setState({ notes, activeNote: null, deleting: false });
  }

  saveHandler() {
    localStorage.setItem(this.storageID, JSON.stringify(this.state));
  }

  resetHandler() {
    localStorage.removeItem(this.storageID);

    this.setState({ ...this.baseState });
  }

  render() {
    const notes = this.state.notes.map((note, index) => (
      <Button
        key={index}
        className={this.state.activeNote === index ? 'active' : ''}
        id={index}
        handleClick={this.handleClick}>{note.title || 'Untitled Note'}</Button>
    ));

    const active = this.state.activeNote !== null;
    const { activeNote } = this.state;

    const deleteButton = active
      ? <Button className='delete' handleClick={() => (
        this.setState({ deleting: true })
      )}>Delete Note</Button>
      : null;

    const deleteModal = this.state.deleting
      ? <Modal
        confirm='Delete'
        onConfirm={this.handleDeleteNote}
        onCancel={() => (this.setState({ deleting: false }))}>
        Are you sure you would like to delete your <strong>{
          this.state.notes[activeNote].title
        }</strong> note? This action cannot be reversed and the entire note will be lost.
      </Modal>
      : null;

    return (
    <React.Fragment>
      <Save saveHandler={this.saveHandler} resetHandler={this.resetHandler} />

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
        <Row classes='wrap'>
          <Column classes='note'>
            <NoteEditorContainer
              value={this.state.notes[activeNote] ? this.state.notes[activeNote].content : ''}
              handleChange={this.handleEditorChange} />
          </Column>
          <Column classes='picker is-3'>
            {notes}

            <Button
              className='createNew'
              handleClick={this.handleNewNote}>Create New Note</Button>

            {deleteButton}
            {deleteModal}
          </Column>
        </Row>
      </div>
    </React.Fragment>
    );
  }
}

export default NoteSheetContainer;
