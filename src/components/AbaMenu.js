import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToDoList from './ToDoList';
import { AiOutlineLogin } from 'react-icons/ai';

function AbaMenu() {
  const [activeTab, setActiveTab] = useState('todolist');
  const [loginVisible, setLoginVisible] = useState(false);
  const navigate = useNavigate();


  function handleClickCron() {
    setActiveTab(activeTab === 'todolist' ? 'cronograma' : 'todolist');
  }


  function handleLogout() {
    // Lógica para executar o logout (por exemplo, limpar o token de autenticação)
    // Redirecionar para a página de login
    navigate('/login');
  }

  return (
    <div>
      <nav className="menu">
        <ul>
        <li>
            <a href="#cronograma" onClick={handleClickCron}>
                {activeTab === 'todolist' ? 'cronograma' : 'voltar'}
            </a>
         </li>

         <li className="symbol">
            <div
              className="login-icon"
              onMouseEnter={() => setLoginVisible(true)}
              onMouseLeave={() => setLoginVisible(false)}
            >
              <AiOutlineLogin />
              {loginVisible && (
                <div className="logout-box">
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div>
      {activeTab === 'todolist' ? <ToDoList /> : 'cronograma aqui'}
      </div>
    </div>
  );
}

export default AbaMenu;
