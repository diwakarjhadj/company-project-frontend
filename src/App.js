import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/TransactionDashboard';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App