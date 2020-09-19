import React, { Component } from 'react';
import { NoteList } from './components/NoteList';
import { Form } from './components/Form';

import './index.css'

class App extends Component {
  createNote(title, text) {

  }

  render() {
    return (
      <section>
        <Form createNote={this.createNote} />
        <NoteList />
      </section>
    );
  }
}

export default App;
