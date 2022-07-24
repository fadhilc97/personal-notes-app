import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItemContent({title, body, createdAt}) {
  return (
    <div className="note-item__content">
      <h4 className="note-item__title">{title}</h4>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;