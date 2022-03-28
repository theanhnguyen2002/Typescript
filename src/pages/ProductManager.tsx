import React from 'react'
import { Link } from 'react-router-dom';
import { ProductTye } from '../types/product'
import { Table, Tag, Space } from 'antd';

type ProductManagerProps = {
    products: ProductTye[];
    onRemove: (id: number) => void
}
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    }
]

const ProductManager = (props: ProductManagerProps) => {
    const dataSource = props.products.map((item, index) => {
        return {
            key: index + 1,
            name: item.name,
            price: item.price
        }
    })
    return (


        // <Table columns={columns} dataSource={dataSource} />
        <div>
            <div>ProductList</div>

            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th> <Link to="add">Add</Link></th>
                </thead>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/admin/products/${item.id}/edit`}>Edit</Link>
                                <button>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        
    )
}

export default ProductManager