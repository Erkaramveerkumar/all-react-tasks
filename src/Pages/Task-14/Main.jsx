// Main.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom'
// import Dashboard from './components/Dashboard';
import Dashboard from './Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRoute from './ProtectedRoute';
// import LoginPage from './components/LoginPage';
import LoginPage from './Login';
const Main = () => {
    const [isAuthenticated, setIsAuthenticated] = 
                                useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute  />} >
                    <Route path="dashboard" 
                           element={<Dashboard logout
                                     ={logout} />} />
                </Route>

                <Route path="/" 
                       element={<LoginPage login
                                 ={login} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;