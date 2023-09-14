import React, { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = React.useState([
    'Pagar a conta de luz',
    'Estudar React hooks',
  ]);

  const [input, setInput] = React.useState('');

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <React.Fragment>
      <h1>Hooks</h1>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Corrigido aqui
      />

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </React.Fragment>
  );
}

export default App;
