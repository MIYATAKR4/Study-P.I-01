import React, { useState } from 'react';
import ToDoList from './ToDoList';
import { AiOutlineLogin } from 'react-icons/ai';


function AbaMenu(){

    const [toDoList, setToDoList] = useState();
    const [cron, setCron] = useState();



function HandleClickToDoList(){
    setToDoList(!toDoList);
    setCron(false);


}

function HandleClickCron(){
    setToDoList(false);
    setCron(!cron);

}

return (
    <div>
        <nav className="menu">
            <ul>
              <li><a href="#meuConteudo" onClick={HandleClickToDoList}>meu conteudo</a></li>
              <li><a href="#cronograma" onClick={HandleClickCron}>cronograma</a></li>
              <li className='symbol' ><a href="#login"><AiOutlineLogin/></a></li>
            </ul>
        </nav>

        <div>
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