import React from "react";

function NoteItemAction({ id, archived, onDelete, onToggleArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onToggleArchive(id)}
      >
        {!archived ? "Arsipkan" : "Pindahkan"}
      </button>
      {/* {!archived ? (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Arsipkan
        </button>
      ) : (
        <button
          className="note-item__archive-button"
          onClick={() => onMove(id)}
        >
          Pindahkan
        </button>
      )} */}
    </div>
  );
}

export default NoteItemAction;
