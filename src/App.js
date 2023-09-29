import React, { useState, useEffect, useMemo } from 'react';

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

  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  return (
    <React.Fragment>
      <h1>Hooks</h1>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>

      <br />

      <strong>Você tem {totalTarefas} tarefas!</strong> <br />

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
