import React from 'react';

function NoteItemAction({id, archived, onDelete, onArchive, onMove}) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
      {
        (!archived) ?
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button> :
        <button className="note-item__archive-button" onClick={() => onMove(id)}>Pindahkan</button>
      }
    </div>
  );
}

export default NoteItemAction;