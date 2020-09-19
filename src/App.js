import React from 'react';
import { NoteList } from './components/NoteList';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..."></textarea>

        <button>Criar nota</button>
      </form>

      <NoteList />
    </section>
  );
}

export default App;
