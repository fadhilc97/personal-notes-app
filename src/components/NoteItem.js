import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({note, onDelete, onArchive, onMove}) {
  const {id, title, body, createdAt, archived} = note;
  
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt}/>
      <NoteItemAction 
        id={id} 
        archived={archived} 
        onDelete={onDelete} 
        onArchive={onArchive}
        onMove={onMove}/>
    </div>
  );
}

export default NoteItem;