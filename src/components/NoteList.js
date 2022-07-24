import React from 'react';
import NoteItem from './NoteItem';

function NoteList({activeNotes, inactiveNotes, onDelete, onArchive, onMove}) {
  return (
    <div className="notes-list">
      {activeNotes ? activeNotes.map(note => (
        <NoteItem 
          key={note.id} 
          note={note} 
          onDelete={onDelete}
          onArchive={onArchive}
          onMove={onMove}/>
      )) : null}
      {inactiveNotes ? inactiveNotes.map(note => (
        <NoteItem 
          key={note.id} 
          note={note} 
          onDelete={onDelete}
          onArchive={onArchive}
          onMove={onMove} />
      )) : null}
    </div>
  );
}

export default NoteList;