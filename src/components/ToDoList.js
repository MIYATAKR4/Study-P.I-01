import React, { useState } from 'react'
import ToDoForm from "./ToDoForm.js";

function ToDoList() {
  const [tarefas, defineTarefa] = useState([]);

  const adicionarTarefa = (tarefa) => {
    defineTarefa([...tarefas, { tarefa }]);
  }
  return (
    <div>
      <ToDoForm adicionarTarefa={adicionarTarefa} />
      <ul>
        {tarefas.map((tarefas, index) => (
         <li key={index}>{tarefas.tarefa}</li>
         
          
        ))}
      </ul>
    </div>
  );
}



export default ToDoList;
