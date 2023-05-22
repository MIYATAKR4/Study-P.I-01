import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart, registerables  } from 'chart.js';
import '../App.css';
import { FcEmptyTrash } from "react-icons/fc";

/* import axios from 'axios'; */


/* INICIO GERENCIADOR DE TAREFAS */

function ToDoForm(props) {
  const [tarefa, defineTarefa] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [horasDisponiveis, setHorasDisponiveis] = useState(0);
  const [tarefas, setTarefas] = useState([]); 
  const [chartData, setChartData] = useState({})
  const chartRef = useRef(null);
  

  const criarTarefa = (event) => {
    defineTarefa(event.target.value);
  };

  const selecionarDificuldade = (event) => {
    setDificuldade(event.target.value);
  };

  const selecionarHorasDisponiveis = (event) => {
    setHorasDisponiveis(event.target.value);
  };

  const excluirTarefa = (index) => {
    const newTarefas = [...tarefas];
    newTarefas.splice(index, 1);
    setTarefas(newTarefas);
  };

  const toggle = (index) => {
    const newTarefas = [...tarefas];
    newTarefas[index].concluida = !newTarefas[index].concluida;
    setTarefas(newTarefas);
  };

    /* // endpoints
    const tarefaId = tarefas[index]._id;
    axios
      .put(`/tasks/${tarefaId}`, { concluida: tarefas[index].concluida })
      .then(() => {
        setTarefas([...tarefas]);
      })
      .catch((error) => {
        console.error(error);
      });
  */
 

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
  };

    /* // endpoints
    axios
      .post('/tasks', novaTarefa)
      .then(() => {
        setTarefas([...tarefas, novaTarefa]);
        defineTarefa('');
        setDificuldade('');
        setHorasDisponiveis(0);
        //exibe mensagem de sucesso p usuario
        alert('Tarefa criada com sucesso :v');
      })
      .catch((error) => {
        if (error.response) {
          // erro de resposta do servidor = status diferente de 2xx
          console.error(error.response.data);
          console.error(error.response.status);
        } else if (error.request) {
          // erro de requisiçao = sem resposta do servidor
          console.error(error.request);
        } else {
          // outros erros
          console.error(error);
        }
        // exibe  mensagem de erro p usuario
        alert('Erro ao criar a tarefa :/');
      });*/
 
  /* FIM GERENCIADOR DE TAREFAS */

  /* INICIO GRÁFICO DE TAREFAS */
  const gerarGrafico = useCallback(() => {
    const tarefasCompletas = tarefas.filter(tarefa => tarefa.concluida).length ;
    const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida).length ;

    setChartData({
      labels: ['Concluídas', 'Pendentes'],
      datasets: [
        {
          label: 'Tarefas',
          data: [tarefasCompletas, tarefasPendentes],
          backgroundColor: ['#6e5e94', '#a095e6'],
        },
      ],
    });
  }, [tarefas]);

  /*pra ser executado sempre que o valor de tarefas for alterado*/
  useEffect(() => {
    gerarGrafico() 
  }, [tarefas, gerarGrafico] );
  
  /*pra ser executado sempre que o valor de chartData for alterado*/
  useEffect(() => {

    if (chartRef.current) {
    /* Se o gráfico anterior existir, destrua-o */
      chartRef.current.destroy();
    }
    
    const ctx = document.getElementById('myChart').getContext('2d');
    Chart.register(...registerables); 
      const newChartInstance = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        });

        

    /* saveref */
    chartRef.current = newChartInstance;

    return () => {
        /* destroi ao desmontar comp */
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  /* FIM GRÁFICO DE TAREFAS */

  return (
    <div className="tarefas">
         {/* INICIO ELEMENTO 1 = TAREFAS */}
         <div className='input-lista'>
            <form onSubmit={inserirTarefa}>
                <div className='input'>
                  
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

                  <input 
                  className="hours" 
                  type="number" 
                  title="Selecione as horas disponíveis para estudo nas setas"
                  value={horasDisponiveis} 
                  onChange={selecionarHorasDisponiveis} />

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
                                <input type="checkbox" checked={tarefa.concluida} onChange={() => toggle(index)} title="Marcar como concluída"/>
                              </label>
                            </td>
                            <td>
                              <div className="excluirTarefa">
                              <button onClick={() => excluirTarefa(index)} title="Excluir tarefa">
                                <i><FcEmptyTrash  /> </i>
                              </button>
                              </div>
                            </td>
                          </tr>
                        ))
                        }
                      </tbody>
                    </table>
                  </div>
            </div>
          {/* FIM ELEMENTO 1 = TAREFAS */}

          <div className='grafico'>
          {/* INICIO ELEMENTO 2 = GRAFICO */}
            <canvas id="myChart">
            </canvas>
           </div>
            {/* FIM ELEMENTO 2 = GRAFICO */}


        </div> 

  );
};

export default ToDoForm;


