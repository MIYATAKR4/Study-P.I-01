import React, { useState } from 'react';
import ToDoList from './ToDoList';
import InsightChart from './InsightChart';
import { AiOutlineLogin } from 'react-icons/ai';


function AbaMenu(){

    const [chart, setChart] = useState();
    const [toDoList, setToDoList] = useState();
    const [cron, setCron] = useState();
    const [tarefas] = useState([]);


function HandleClickChart(){
    setToDoList(false);
    setCron(false);
    setChart(!chart);

}

function HandleClickToDoList(){
    setToDoList(!toDoList);
    setCron(false);
    setChart(false);

}

function HandleClickCron(){
    setToDoList(false);
    setCron(!cron);
    setChart(false);

}

return (
    <div>
        <nav className="menu">
            <ul>
              <li><a href="#inicio" onClick={HandleClickChart}>inicio</a></li>
              <li><a href="#meuConteudo" onClick={HandleClickToDoList}>meu conteudo</a></li>
              <li><a href="#cronograma" onClick={HandleClickCron}>cronograma</a></li>
              <li><a href="#login"><AiOutlineLogin/></a></li>
            </ul>
        </nav>

        <div>
            {chart === true && <InsightChart tarefas={tarefas} />}
            {!chart && <div></div>}

            <div>
            {toDoList === true && <ToDoList />}
            {!toDoList && <div></div>}
            </div>
            

            {cron === true && "boa"}
            {!cron && <div></div>}

        </div>


    </div>
)
}

export default AbaMenu;