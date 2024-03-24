import React from 'react'

const DataTable = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.sold}</td>
                            <td>
                                <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </table>
        </div>
    )
}

export default DataTable