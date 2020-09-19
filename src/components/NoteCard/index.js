import React, { Component } from 'react'

import './styles.css'

export class NoteCard extends Component {
  render() {
    return (
      <section className="note-card">
        <header>
          <h3>Título</h3>
        </header>
        <p>Descrição</p>
      </section>
    )
  }
}
