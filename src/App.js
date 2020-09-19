import React from 'react';
import { NoteList } from './components/NoteList';
import { Form } from './components/Form';

function App() {
  return (
    <section>
      <Form />
      <NoteList />
    </section>
  );
}

export default App;
