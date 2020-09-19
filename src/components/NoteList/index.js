import React, { Component } from 'react'
import { NoteCard } from '../NoteCard'

import './styles.css'
export class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => (
          <li className="note-list-item" key={index}>
            <NoteCard title={note.title} text={note.text} />
          </li>
        ))}
      </ul>
    )
  }
}
