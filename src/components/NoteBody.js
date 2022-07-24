import React from 'react';
import FormCreateNotes from './FormCreateNotes';
import EmptyNoteMessage from './EmptyNoteMessage';
import NoteList from './NoteList';

function NoteBody({notes, addNote, onDelete, onArchive, onMove}) {
  const activeNotes = notes.filter(note => !note.archived);
  const inactiveNotes = notes.filter(note => note.archived);

  return (
    <div className="note-app__body">
      <FormCreateNotes addNote={addNote}/>
      <h2>Catatan Aktif</h2>
      {
        (activeNotes.length > 0) ?
        <NoteList 
          activeNotes={activeNotes} 
          onDelete={onDelete}
          onArchive={onArchive}
          onMove={onMove}
          /> :
        <EmptyNoteMessage />
      }
      <h2>Arsip</h2>
      {
        (inactiveNotes.length > 0) ?
        <NoteList 
          inactiveNotes={inactiveNotes} 
          onDelete={onDelete}
          onArchive={onArchive}
          onMove={onMove}/> :
        <EmptyNoteMessage />
      }
    </div>
  )
}

export default NoteBody;