import React, { Component } from 'react'

export class Form extends Component {
  constructor() {
    super()
    this.title = ''
  }

  handleTitleChange(event) {
    this.title = event.target.value
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Título"
          onChange={this.handleTitleChange.bind(this)}
        />

        <textarea placeholder="Escreva sua nota..."></textarea>

        <button type="submit">Criar nota</button>
      </form>
    )
  }
}
