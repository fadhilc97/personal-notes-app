import React from 'react';
import FormSearchNotes from './FormSearchNotes';

function NoteHeader({onSearchTitleHandler}) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <FormSearchNotes onSearchTitleHandler={onSearchTitleHandler}/>
    </div>
  )
}

export default NoteHeader;