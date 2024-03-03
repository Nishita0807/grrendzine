// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import EmployeeListPage from './Components/EmployeeListPage';
import NotFoundPage from './Components/NotFound';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials, navigate) => {
    // Implement your login validation logic here
    // For simplicity, let's assume the login is successful if the email and password match a predefined value
    const { email, password } = credentials;
    if (email === 'admin.xyz@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      navigate('/home'); // Redirect after successful login
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/employees" element={isLoggedIn ? <EmployeeListPage /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
