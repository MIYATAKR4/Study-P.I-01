import LoginPage from './Pages/Login';
import HomePage from './Pages/HomePage';
import { AuthContext } from './contexts/auth';
import React, { useState } from 'react';



import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";



function AppRoutes() {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login", {email, password});
        setUser({id: '123, email'})

    };

    const logout = () => {
        console.log("logout")
    };

    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, user, login(){}, logout(){}}}>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthContext.Provider>
        </Router>

    );
};

export default AppRoutes