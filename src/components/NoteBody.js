import React from "react";
import FormCreateNotes from "./FormCreateNotes";
import EmptyNoteMessage from "./EmptyNoteMessage";
import NoteList from "./NoteList";

function NoteBody({ notes, addNote, onDelete, onToggleArchive }) {
  console.log(notes);
  let activeNotes = null;
  let inactiveNotes = null;
  if (notes) {
    activeNotes = notes.filter((note) => !note.archived);
    inactiveNotes = notes.filter((note) => note.archived);
  }

  return (
    <div className="note-app__body">
      <FormCreateNotes addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {activeNotes ? (
        <NoteList
          activeNotes={activeNotes}
          onDelete={onDelete}
          onToggleArchive={onToggleArchive}
        />
      ) : (
        <EmptyNoteMessage />
      )}
      <h2>Arsip</h2>
      {inactiveNotes ? (
        <NoteList
          inactiveNotes={inactiveNotes}
          onDelete={onDelete}
          onToggleArchive={onToggleArchive}
        />
      ) : (
        <EmptyNoteMessage />
      )}
    </div>
  );
}

export default NoteBody;
