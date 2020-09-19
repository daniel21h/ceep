import React, { Component } from 'react'
import { NoteCard } from '../NoteCard'

export class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((category, index) => (
          <li key={index}>
            <NoteCard />
          </li>
        ))}
      </ul>
    )
  }
}
