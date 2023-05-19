import React from "react"; 
import AbaMenu from "../../components/AbaMenu";
import { FcNightLandscape } from "react-icons/fc";


function HomePage() {
    return (

        <header className="App-header">
        <h1 className='title'><FcNightLandscape className="icon"/>Study+</h1>

        <AbaMenu />

      </header>
      
    );
};

export default HomePage