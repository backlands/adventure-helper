// Import React!
import React from 'react';
import NoteSheet from '../../components/smart/NoteSheet';
import NotePicker from '../../components/smart/NotePicker';
import Button from '../../components/dumb/Button';
import Input from '../../components/dumb/Input';

class NoteSheetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: null,
      notes: [
        {
          title: 'Rich Text Editor for Taking Notes',
          content: '<p>Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
        },
        {
          title: 'City of Sandpoint',
          content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>',
        },
        {
          title: 'Facing the Big Bad Evil Guy',
          content: '<p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>',
        },
        {
          title: 'Going for the Dam',
          content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu</p>',
        },
        {
          title: 'The Final Weeks of Magnimar',
          content: '<p>Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
        },
      ],
    };

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
      <NoteSheet
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
