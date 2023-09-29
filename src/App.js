import React, { useState, useEffect } from 'react';

function App() {
  const [tarefas, setTarefas] = React.useState([

  ]);

  const [input, setInput] = React.useState('');


  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

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
