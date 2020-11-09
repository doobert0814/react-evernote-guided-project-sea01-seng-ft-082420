import React, { Component } from 'react';
import Filter from './Filter';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
         <button 
        onClick={(e) => this.props.createNote(this.state, e)}>
        New
        </button>
        <Filter />
        <NoteList 
        thingToPassToNoteList={this.props.notesToPassToSidebarItem}
        handleNoteClickForContent={this.props.handleNoteClickForContent}
        />
        <button 
        onClick={(e) => this.props.createNote(this.state, e)}>
        New
        </button>
      </div>
    );
  }
}

export default Sidebar;
