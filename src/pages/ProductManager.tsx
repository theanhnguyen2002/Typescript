import React from 'react'
import { Link } from 'react-router-dom';
import { ProductTye } from '../types/product'
import { Table, Tag, Space, Button } from 'antd';
import './css/ProductManager.css'

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
            <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                    <div className="rounded">
                        <div className="table-responsive table-borderless">
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th />
                            </tr>
                            </thead>
                            <tbody className="table-body">
                                {props.products.map((item, index) => {
                                    return <tr className="cell-1" key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            {/* <span className="badge badge-success">Fullfilled</span> */}
                                            <a id="edit" href=""><Link to={`/admin/products/${item.id}/edit`}>Edit</Link></a>
                                            <button id="button_remove">Remove</button>
                                        </td>                                    
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>



        
        
    )
}

export default ProductManager