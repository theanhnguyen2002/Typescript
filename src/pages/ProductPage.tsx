import React from 'react'

import './css/Home.css';


type Props = {}

const ProductPage = (props: Props) => {
    return (
        <div>
            <div className="wrapper rounded bg-white">
                <div className="d-flex align-items-center justify-content-end px-sm-3 pt-3 px-1">
                    <div className="text-muted">Items per page (<b>53 items</b> )</div> <select name="num" id="num" className="px-2 py-1 ml-sm-2 ml-1">
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    </select> <select name="sort" id="sort" className="px-1 py-1 ml-2">
                    <option selected hidden>Sắp xếp theo</option>
                    <option value="cao">Cao đến Thấp</option>
                    <option value="thap">Thấp đến Cao</option>
                    </select>
                </div>
                <hr />
                <div className="row px-sm-2 px-0 pt-3">
                    <div className="col-md-4 offset-md-0 offset-sm-2 offset-1 col-sm-8 col-10 offset-sm-2 offset-1 mb-3">
                        <div className="card">
                            <div className="px-2 red text-uppercase">new</div>
                            <div className="d-flex justify-content-center"> <img id="img" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648573761/home-2016-03-sbux-main_qogawg.gif" className="product"  /> </div> <b className="px-2">
                                <p className="h4">Caffè Mocha</p>
                            </b>
                            <div className="d-flex align-items-center justify-content-start rating border-top border-bottom py-2">
                            <div className="text-muted text-uppercase px-2 border-right">insto2007</div>
                            <div className="px-lg-2 px-1"> <span className="fas fa-star" /> <span className="fas fa-star" /> <span className="fas fa-star" /> <span className="fas fa-star" /> <span className="fas fa-star" /> <a href="#" className="px-lg-2 px-1 reviews">{'{'}3 Reviews{'}'}</a> </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="h4"><span>$</span>10.99</div>
                            <div> <button className="btn btn-dark text-uppercase">Mua </button> </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage