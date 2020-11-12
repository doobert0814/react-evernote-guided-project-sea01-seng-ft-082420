import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      id: this.props.note.id,
    }
  }

  updateInputValue = event => {
    const { target: {value, name} } = event;
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return (
      
      <form className="note-editor">
        <div className="button-row">
        <input
        onClick={(e) => this.props.handleSaveClick(this.state, e)}
        className="button"
        type="submit"
        value="Save"
        
        />

        <button type="button"
        onClick={(e) => this.props.handleCancelClick(this.state, e)}
        >
          Cancel
        </button>
        <button type="button"
        onClick={(e) => this.props.handleDeleteClick(this.state, e)}>
          Delete
        </button>
        </div>
        <input
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.updateInputValue} />

        <textarea
        name="body"
        value={this.state.body}
        onChange={this.updateInputValue} />

        <div className="button-row">
        <input
        onClick={(e) => this.props.handleSaveClick(this.state, e)}
        className="button"
        type="submit"
        value="Save"
        />

        <button type="button"
        onClick={(e) => this.props.handleCancelClick(this.state, e)}
        >
          Cancel
        </button>
        <button type="button"
        onClick={(e) => this.props.handleDeleteClick(this.state, e)}>
          delete
        </button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
