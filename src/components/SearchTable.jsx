import React, { useContext } from 'react';
import '../css/SearchTable.css';
import MonthdropDown from './MonthdropDown';
import DataTable from './DataTable';
import { AuthContext } from '../contexts/AuthContext';
const SearchTable = () => {
  const {state,setSearchTerm}=useContext(AuthContext);
  const handleSearchChange=(event)=>{
    setSearchTerm(event.target.value);
  }
  return (
    <>
      <div className='search-box-text'>
        <div className='search-input'>
          <input type="text" placeholder='Search Transaction' value={state.searchTerm} onChange={handleSearchChange} />
          <div className='main-dropdown'>
            <MonthdropDown />
          </div>
        </div>
      </div>
      <div className='main-data-table'>
        <DataTable />
      </div>
    </>
  )
}

export default SearchTable;
