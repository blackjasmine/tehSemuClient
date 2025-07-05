import React, { useContext, useEffect } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {AuthContext} from "./Context/AuthContext.jsx";
import './App.css';

import Home from "./page/Home.jsx";
import LoginForm from "./page/LoginForm.jsx";
import RegisterForm from "./page/RegisterForm.jsx";
import Dashboard from "./page/Dashboard.jsx";
import NotFound from "./page/NotFound.jsx";



function App() {
  
  const {user} = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
        
      <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/dashboard" />} />
            
      <Route path="/register" element={!user ? <RegisterForm /> : <Navigate to="/dashboard" />} />
            
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
