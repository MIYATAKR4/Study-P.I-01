import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

//video ajuda: https://youtu.be/5KqP3Vx8Y4s

function LoginPage() {

    const { authenticated, login } = useContext
    (AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email}, {password});


        login(email, password); // integração com o context/api
    };



    return (
 <div>
    <div className="welcome"><h1>Bem vindo ao STUDY+</h1></div>

    <div className="login-container">
        
        <div className="login" id="login">
            <h1 className="titlo">Login</h1>
            <form className="forms" onSubmit={handleSubmit}>
                <div className="field"> 
                    <label className="email" htmlFor="email">e-mail</label>
                    <input type="email" name="email" id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="senha" htmlFor="password">senha</label>
                    <input type="password" name="password" id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    );
};

export default LoginPage