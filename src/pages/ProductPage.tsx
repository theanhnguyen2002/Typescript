import React from 'react'
import { ProductTye } from '../types/product'

import './css/Home.css';
import './css/productPage.css';



// type Props = {}
type Props = {
    products: ProductTye[];
    // onRemove: (id: string | undefined) => void
}

const ProductPage = (props: Props) => {
    return (
        <div>

            <div className="container_productPage">
                <div className="row">
                    <div className="col-md-12">
                        <h2>List <b>Products</b></h2>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
                            
                            {/* Wrapper for carousel items */}
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        {props.products.map((item, index) => {
                                            return <div className="col-sm-3" key={index}>
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src={item.img} className="img-responsive" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4>{item.name}</h4>
                                                        <div className="star-rating">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                            </ul>
                                                        </div>
                                                        <p className="item-price">  <b>{item.price} $</b></p>
                                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        })}

                                    </div>
                                </div>
                                
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            


            

        </div>
    )
}

export default ProductPage