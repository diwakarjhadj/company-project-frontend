import React from 'react';
import '../css/SearchTable.css';
import MonthdropDown from './MonthdropDown';
const SearchTable = () => {
  return (
    <div className='search-box-text'>
        <div className='search-input'>
            <input type="text" placeholder='Search Transaction' />
            <div className='main-dropdown'>
                <MonthdropDown/>
            </div>
        </div>
    </div>
  )
}

export default SearchTable