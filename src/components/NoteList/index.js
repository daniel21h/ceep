import React, { Component } from 'react'

export class NoteList extends Component {
  render() {
    return (
      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Descrição</p>
          </section>
        </li>
      </ul>
    )
  }
}
