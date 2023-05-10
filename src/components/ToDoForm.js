import React, { useState } from 'react';
import '../App.css';

function ToDoForm(props) {
  const [tarefa, defineTarefa] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [horasDisponiveis, setHorasDisponiveis] = useState(0);
  const [tarefas, setTarefas] = useState([]); 
 /*  const [concluida, setConcluida] = useState(false); */

  const criarTarefa = (event) => {
    defineTarefa(event.target.value);
  }

  const selecionarDificuldade = (event) => {
    setDificuldade(event.target.value);
  }

  const selecionarHorasDisponiveis = (event) => {
    setHorasDisponiveis(event.target.value);
  }

  const toggle = (index) => {
    const newTarefas = [...tarefas];
    newTarefas[index].concluida = !newTarefas[index].concluida;
    setTarefas(newTarefas);  }

  const inserirTarefa = (event) => {
    event.preventDefault();
    const novaTarefa = { 
      tarefa: tarefa, 
      dificuldade: dificuldade, 
      horasDisponiveis: horasDisponiveis,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]); 
    defineTarefa('');
    setDificuldade('');
    setHorasDisponiveis(0); 
  }


  return (
    <div className="tarefas">
      <form onSubmit={inserirTarefa}>
        <div>
          <input 
          type="text"
          className="form" 
          placeholder="Digite uma tarefa..." 
          value={tarefa} 
          onChange={criarTarefa} />

          <select 
          className="diff" value={dificuldade} onChange={selecionarDificuldade}>
            <option value="">Selecione a dificuldade</option>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
          </select>
          <input className="hours" type="number" value={horasDisponiveis} onChange={selecionarHorasDisponiveis} />
          <button className="adicionarTarefa" type="submit">Adicionar</button>
        </div>

      </form>
      
      <div className= "listaTarefas">
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Dificuldade</th>
              <th>Horas disponíveis</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((tarefa, index) => (
              <tr key={index}>
                <td>{tarefa.tarefa}</td>
                <td>{tarefa.dificuldade}</td>
                <td>{tarefa.horasDisponiveis}</td>
                <td>
                  <label className="custom-checkbox">
                    <input type="checkbox" checked={tarefa.concluida} onChange={() => toggle(index)} />
                  </label>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>


            
    </div>
  );
}

export default ToDoForm;


