import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ note, onDelete, onToggleArchive }) {
  const { id, title, body, createdAt, archived } = note;

  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        onToggleArchive={onToggleArchive}
      />
    </div>
  );
}

export default NoteItem;
