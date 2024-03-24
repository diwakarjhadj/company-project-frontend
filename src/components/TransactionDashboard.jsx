import React from 'react';
import '../css/TransactionDashboard.css';
import SearchTable from './SearchTable';
const TransactionDashboard = () => {
  return (
    <div className='container'>
      <div className='transaction'>
        <div className='transaction-data'>
          <div className='transaction-box'>
            Transaction Dashboard
          </div>
        </div>
          <div className='main-search-text'>
            <SearchTable />
          </div>
      </div>
    </div>
  )
}

export default TransactionDashboard;