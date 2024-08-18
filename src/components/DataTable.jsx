import React, { useState, useEffect } from 'react'
import '../css/DataTable.css';
import { fetchTransactions } from '../Service/api';

const DataTable = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTransactions();
                setTransactions(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        }
        fetchData();
    }, []);

    const getFirstTenWords = (description) => {
        const words = description.split(' ');
        return words.slice(0, 55).join(' ');
    }


    return (
        <>
            <div className='data-table'>
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
                        {transactions?.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className='id'>{transaction.id}</td>
                                <td className='title'>{transaction.title}</td>
                                <td className='desc'>{transaction.description}</td>
                                <td className='price'>{transaction.price}</td>
                                <td className='category'>{transaction.category}</td>
                                <td className='sold'>{transaction.sold ? "Sold" : "Not Sold"}</td>
                                <td className='image'>
                                    <img src={transaction.image} alt={transaction.title} style={{ width: '95%', height: '85%' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div></div>
            </div>
        </>
    );
}

export default DataTable
