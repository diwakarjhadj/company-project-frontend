import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // const [selectedMonth, setSelectedMonth] = useState({ month: ''});
  const [state,setState]=useState({
    selectedMonth: '',
    searchTerm: ''
  });
  const setSelectedMonth=(month)=>{
    setState((prevState)=>({
      ...prevState,
      selectedMonth:month
    }));
  };
  const setSearchTerm=(term)=>{
    setState((prevState)=>({
      ...prevState,
      searchTerm: term
    }));
  }
  return (
    <AuthContext.Provider value={{ state,setSelectedMonth,setSearchTerm }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
