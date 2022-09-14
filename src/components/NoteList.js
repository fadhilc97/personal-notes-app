import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ activeNotes, inactiveNotes, onDelete, onToggleArchive }) {
  return (
    <div className="notes-list">
      {activeNotes
        ? activeNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))
        : null}
      {inactiveNotes
        ? inactiveNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))
        : null}
    </div>
  );
}

export default NoteList;
