import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils/index';

import '../styles/style.css';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      notes: getInitialData(),
      filteredNotes: null
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onMoveNoteHandler = this.onMoveNoteHandler.bind(this);
    this.onSearchTitleHandler = this.onSearchTitleHandler.bind(this);
  }

  onAddNoteHandler({title, body}) {
    this.setState(prevState => {
      return {
        notes: [...prevState.notes, {
          id: +new Date(),
          title: title,
          body: body,
          archived: false,
          createdAt: new Date().toISOString()
        }]
      };
    });
  }

  onDeleteNoteHandler(id) {
    this.setState(prevState => {
      return {
        notes: prevState.notes.filter(note => note.id !== id)
      };
    });
  }

  onArchiveNoteHandler(id) {
    this.setArchiveNote(id, true);
  }

  onMoveNoteHandler(id) {
    this.setArchiveNote(id, false);
  }

  onSearchTitleHandler(keyword) {
    let results = this.state.notes;
    if (keyword !== '') {
      results = results.filter(note => note.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1);
    }
    this.setState(() => {
      return {
        filteredNotes: results,
        keyword
      };
    });
  }

  setArchiveNote(id, isArchive) {
    const notes = this.state.notes;
    const noteObject = notes.filter(note => note.id === id)[0];
    const noteIndex = notes.indexOf(noteObject);

    notes[noteIndex].archived = isArchive;
    this.setState(() => {
      return {
        notes
      };
    });
  }

  render() {
    return (
      <div>
        <NoteHeader onSearchTitleHandler={this.onSearchTitleHandler}/>
        <NoteBody 
          notes={(this.state.keyword !== '') ? this.state.filteredNotes : this.state.notes} 
          addNote={this.onAddNoteHandler} 
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
          onMove={this.onMoveNoteHandler}/>
      </div>
    )
  }
}

export default NoteApp;