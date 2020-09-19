import React, { Component } from 'react'

import './styles.css'
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
      <form className="form" onSubmit={this._createNote.bind(this)}>
        <h1>Ceep</h1>
        <span>Seu editor de notas para treinar ReactJS</span>

        <input
          className="form-input"
          type="text"
          placeholder="Título"
          onChange={this._handleTitleChange.bind(this)}
        />

        <textarea
          placeholder="Escreva sua nota..."
          onChange={this._handleTextChange.bind(this)}
        />

        <button className="form-submit" type="submit">Criar nota</button>
      </form>
    )
  }
}
