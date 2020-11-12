import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
const API = 'http://localhost:3000/api/v1/notes'

class App extends Component {

  constructor() {
    super();
      this.state = {
        notes: [],
        selectedNote: null,
        showEdit: false,
        noteFilter: '',
      };
    }

  componentDidMount () {
    fetch(API)
      .then( resp => resp.json())
      .then( notes => this.setState({ notes: notes }))
    }
    handleNoteClickForContent = (note) => {
    
      this.setState({ 
        showEdit: false,
        selectedNote: note
      })
    }
  
    handleEditClick = (note) => {
      this.setState({
        showEdit: true
      })
    }
  
    handleCancelClick = () => {
      this.setState({
        showEdit: false
      })
    }
  
    handleSearch = (value) => {
        this.setState({
          noteFilter: value
        })
      }
  
    filteredNotes = () => {
      return this.state.notes.filter( note => note.title.includes(this.state.noteFilter) )
    }
  
    handleSaveClick = (selectedNote, e) => {
      e.preventDefault();
  
      return fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(selectedNote)
      }).then(res => res.json())
        .then(note => {
          let updatedNotes = this.state.notes.map( n => n.id === note.id ? note : n)
          this.setState({ notes: updatedNotes })
          this.setState({
            showEdit: false
          })
        })
    }

    handleChange =(e) => {
      this.setState({selectValue: e.target.value})
    }

    handleDeleteClick = (selectedNote, e) => {
      e.preventDefault();
        fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`,{
          method: 'DELETE', 
        }).then(res => res.json())
          .then(note => {
            let updatedNotes = this.state.notes.filter( n => {
              return n.id !== note.noteId})
            this.setState({ notes: updatedNotes })
            this.setState({
              showEdit: false
            })
        })
    }
  
    createNote = () => {
      let defaultNewNote = {
        body: 'placeholder',
        title: 'default',
        user: {
          id: 1,
          name: 'Scot'
        }
      }
      this.postNewNote(API, defaultNewNote)
        .then( newNote => this.setState({
          notes: [...this.state.notes, newNote]
        }))
    }
  
    postNewNote = (API, data) => {
      return fetch(API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
        body: JSON.stringify(data)
      }).then(res => res.json())
    }
  
    render() {
      return (
        <div className="app">
          <Header />
          <NoteContainer
            handleChange={this.handleChange}
            theThingWeArePassing={this.filteredNotes()}
            handleNoteClickForContent={this.handleNoteClickForContent}
            selectedNotePassingToContainer={this.state.selectedNote}
            handleEditClick={this.handleEditClick}
            showEdit={this.state.showEdit}
            handleSaveClick={this.handleSaveClick}
            handleDeleteClick={this.handleDeleteClick}
            updateInputValue={this.updateInputValue}
            handleCancelClick={this.handleCancelClick}
            createNote={this.createNote}
            handleSearch={this.handleSearch}
            deleteNote={this.deleteNote}
          />
        </div>
      );
    }
  }

  export default App