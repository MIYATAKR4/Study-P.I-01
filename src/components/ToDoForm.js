import React, { useState } from 'react';

function ToDoForm(props) {
  const [tarefa, defineTarefa] = useState('');

  const criarTarefa = (event) => {
    defineTarefa(event.target.value);
  }

  const inserirTarefa = (event) => {
    event.preventDefault();
    props.adicionarTarefa(tarefa);
    defineTarefa('');
  }

  return (
    <div class="tarefas">
      <form onSubmit={inserirTarefa}>
        <input type="text" class="form" placeholder="Digite uma tarefa..." value={tarefa} onChange={criarTarefa} />
        <button className="adicionarTarefa" type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default ToDoForm;

