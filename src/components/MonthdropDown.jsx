import React, { useContext } from 'react';
import '../css/MonthdropDown.css';
import { AuthContext } from '../contexts/AuthContext';
const MonthdropDown = () => {
    // const { selectedMonth, setSelectedMonth }=useContext(AuthContext);
    const {state,setSelectedMonth}=useContext(AuthContext);
    const handleMonthChange = (event) => {
        const monthValue = event.target.value;

        setSelectedMonth(monthValue);
    };
    return (
        <>
            <div className='month-dropdown'>
                <select id="month" value={state.selectedMonth} onChange={handleMonthChange}>
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
        </>
    )
}

export default MonthdropDown