import React, { useState } from 'react';
import '../css/MonthdropDown.css';
import DataTable from './DataTable';
const MonthdropDown = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };
    return (
        <>
            <div className='month-dropdown'>
                <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                    <option value="">Select a Month</option>
                    <option className='months' value="January">Jan</option>
                    <option className='months' value="February">Feb</option>
                    <option className='months' value="March">Mar</option>
                    <option className='months' value="April">Apr</option>
                    <option className='months' value="May">May</option>
                    <option className='months' value="June">Jun</option>
                    <option className='months' value="July">Jul</option>
                    <option className='months' value="August">Aug</option>
                    <option className='months' value="September">Sep</option>
                    <option className='months' value="October">Oct</option>
                    <option className='months' value="November">Nov</option>
                    <option className='months' value="December">Dec</option>
                </select>
            </div>
            <div className='main-table'>
                <DataTable/>
            </div>
        </>
    )
}

export default MonthdropDown