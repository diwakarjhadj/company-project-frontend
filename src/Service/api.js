import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchTransactions = async (month, search, page, perPage) => {
    try {
        const response = await axios.get(`${url}/transactions`, {
            params: {
                month: month,
                search: search,
                page: page,
                perPage: perPage
            }
        });

        // Assuming you want to return the data from the API call

        return response.data;

    } catch (error) {
        // Handle error
        console.error('Error fetching transactions:', error);
        // You might want to return null or throw the error depending on your error handling strategy
        return null;
    }
}
