import React from 'react';
import ToDoList from './ToDoList';
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";


function AbaMenu(){

    const [home, sethome] = useState();
    const [toDoList, setToDoList] = useState();
    const [cron, setcron] = useState();


function HandleClickHome(){
    setToDoList(false);
    setcron(false);
    sethome(!home);

}

function HandleClickToDoList(){
    setToDoList(!toDoList);
    setcron(false);
    sethome(false);

}

function HandleClickCron(){
    setToDoList(false);
    setcron(!cron);
    sethome(false);

}

return (
    <div>
        <nav class="menu">
            <ul>
              <li><a href="#inicio" onClick={HandleClickHome}>inicio</a></li>
              <li><a href="#meuConteudo" onClick={HandleClickToDoList}>meu conteudo</a></li>
              <li><a href="#cronograma" onClick={HandleClickCron}>cronograma</a></li>
              <li><a href="#login"><AiOutlineLogin/></a></li>
            </ul>
        </nav>

        <div>
            {home == true && "boa"}
            {!home && <div></div>}

            <div class="containerList">
            {toDoList == true && <ToDoList />}
            {!toDoList && <div></div>}
            </div>
            

            {cron == true && "boa"}
            {!cron && <div></div>}

        </div>

    </div>
)
}

export default AbaMenu;