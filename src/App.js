import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/TransactionDashboard';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App