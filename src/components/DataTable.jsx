import React, { useState, useEffect, useContext } from 'react'
import '../css/DataTable.css';
import { fetchTransactions } from '../Service/api';
import { AuthContext } from '../contexts/AuthContext';
import {Oval} from 'react-loader-spinner'

const DataTable = () => {
    
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false); // State to track loading status
    const { state } = useContext(AuthContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const month=state.selectedMonth;
                const search = state.searchTerm; // Example search query
                const page = 0; // Example page number
                const perPage = 0; // Example number of items per page

                const data = await fetchTransactions(month, search, page, perPage);
                setTransactions(data);  // Update state with fetched data
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [state.selectedMonth,state.searchTerm]);

    return (
        <>
            <div className='data-table'>
            {loading ? (
                <div className="loader-container">
                    <Oval
                        height={80}
                        width={80}
                        color="lightblue"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="blue"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            ) : transactions.length === 0 ? (
                <div className="not-found">
                    <p>No transactions found...</p>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th className='id'>ID</th>
                            <th className='title'>Title</th>
                            <th className='desc'>Description</th>
                            <th className='price'>Price</th>
                            <th className='category'>Category</th>
                            <th className='sold'>Sold</th>
                            <th className='image'>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className='id'>{transaction.id}</td>
                                <td className='title'>{transaction.title}</td>
                                <td className='desc'>{transaction.description}</td>
                                <td className='price'>{transaction.price.toFixed(2)}</td>
                                <td className='category'>{transaction.category}</td>
                                <td className='sold'>{transaction.sold ? "Sold" : "Not Sold"}</td>
                                <td className='image'>
                                    <img src={transaction.image} alt={transaction.title} style={{ width: '95%', height: '85%' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </>
    );
}

export default DataTable
