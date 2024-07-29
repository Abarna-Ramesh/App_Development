

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/home/Home';
import LoginPage from './components/login/LoginPage';
import EDashboard from './components/eDashboard/EDashboard';
import Register from './components/register/Register';
import AdminLogin from './components/loginpage/Loginpage2';
import AdminDashboard from './admindashboard/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<EDashboard />} />
        <Route path="/alogin" element={<AdminLogin />} />
        <Route path="/adash" element={<AdminDashboard />} />
 
      </Routes>
    </Router>
  );
}

export default App;
