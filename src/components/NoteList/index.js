import React, { Component } from 'react'
import { NoteCard } from '../NoteCard'

export class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map(category => (
          <li>
            <div>{category}</div>
            <NoteCard />
          </li>
        ))}
      </ul>
    )
  }
}
