import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.title = ''
    this.text = ''
  }

  _handleTitleChange(event) {
    event.stopPropagation()
    this.title = event.target.value
  }

  _handleTextChange(event) {
    event.stopPropagation()
    this.text = event.target.value
  }

  _createNote(event) {
    event.preventDefault()
    event.stopPropagation()

    this.props.createNote(this.title, this.text)
  }

  render() {
    return (
      <form onSubmit={this._createNote.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleTitleChange.bind(this)}
        />

        <textarea
          placeholder="Escreva sua nota..."
          onChange={this._handleTextChange.bind(this)}
        />

        <button type="submit">Criar nota</button>
      </form>
    )
  }
}
