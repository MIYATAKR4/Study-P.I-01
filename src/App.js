import React from 'react';
import AbaMenu from './components/AbaMenu';
import './App.css';
import { FcNightLandscape } from "react-icons/fc";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1 className='title'><FcNightLandscape class="icon"/>Study+</h1>

        <AbaMenu />
        
      </header>
    </div>


  );
}

export default App;
