import React from 'react'
import { Link } from 'react-router-dom';
import { ProductTye } from '../types/product'
import { Table, Tag, Space, Button } from 'antd';

import './css/productManger.css'

type ProductManagerProps = {
    products: ProductTye[];
    onRemove: (id: string | undefined) => void
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
    },
    {
        title: 'Img',
        dataIndex: 'img',
        key: 'img',
    }
]

const ProductManager = (props: ProductManagerProps) => {
    const dataSource = props.products.map((item, index) => {
        return {
            key: index + 1,
            name: item.name,
            img: item.img,
            price: item.price
        }
    })
    return (


        // <Table columns={columns} dataSource={dataSource} />

        <div>

            <div className="card">
                <div className="card-header">
                    <h5>Product List</h5>
                    <Link to="/admin/products/add">
                        <button>Add</button>
                    </Link>
                    
                </div>
                
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Photo</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            {props.products.map((item, index) => {
                                return <tr key={index}>
                                    <td>
                                        <strong>{index + 1}</strong>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>
                                        {/* <span className="badge bg-label-danger me-1">{item.img} </span> */}
                                        <img src={item.img}  alt="" width="50px" />
                                    </td>
                                    <td>
                                        <span className="badge bg-label-danger me-1">{item.price} $</span>
                                    </td>
                                    
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="bx bx-dots-vertical-rounded" />
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link to={`/admin/products/${item._id}/edit`}>
                                                    <a className="dropdown-item" id="edit" >
                                                        <i className="bx bx-edit-alt me-1" /> Edit
                                                    </a>
                                                </Link>
                                                <a className="dropdown-item" id="button_remove" 
                                                onClick={() => { props.onRemove(item._id)}}
                                                >
                                                    <i className="bx bx-trash me-1" /> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}

                        </tbody>

                    </table>
                </div>
            </div>





        </div>





    )
}

export default ProductManager