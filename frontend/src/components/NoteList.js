import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.thingToPassToNoteList.reverse().map(note => 
      <NoteItem note={note} key={note.id} handleClick={props.handleNoteClickForContent} />)}
    </ul>
  );
}

export default NoteList;
