import React, { Component } from 'react';
import { NoteList } from './components/NoteList';
import { Form } from './components/Form';

import './styles/index.css'
import './styles/reset.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    const note = { title, text }
    const newNotesArray = [...this.state.notes, note]

    const newState = {
      notes: newNotesArray
    }

    this.setState(newState)
  }

  render() {
    return (
      <section className="content">
        <Form createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
