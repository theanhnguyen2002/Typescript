import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "./Header.css";

import "./../css/ionicons.min.css";
import "./../css/style.css";
import "./../js/jquery.min.js";
// import "./../js/popper.js";
import "./../js/bootstrap.min.js";
import "./../js/main.js";



type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648496099/1024px-Starbucks_Corporation_Logo_2011.svg_lkbznl.png" alt="" width="160px" height="50px" />
                </div>
                <nav className="navMenu">

                    <a><NavLink to="/">Home</NavLink></a>
                    <a><NavLink to="/product">Product</NavLink></a>
                    <a><NavLink to="/about">About</NavLink></a>
                    <a><NavLink to="/admin">Admin</NavLink></a>

                    <div className="dot" />
                </nav>
                <div className="search_cart">
                    <div className="search-box">
                        <input type="text" className="input-search" placeholder="Search..." />
                    </div>
                    <div className="cart">
                        <a href="#">
                            <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648482875/cart_gafuul.png" alt="" width="25px" height="25px" />
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="footer-01 max-w-screen-md">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0 ">
                        <h2 className="footer-heading">About</h2>
                            <p>Our aspiration is to be people positive investing in humanity and the well-being of everyone we connect with, from our partners to coffee farmers to the customers in our stores and beyond.</p>
                        <ul className="ftco-footer-social p-0">
                        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter" /></a></li>
                        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook" /></a></li>
                        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram" /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <h2 className="footer-heading">News</h2>
                        <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsirnbuyv/image/upload/v1648497832/Tai-sao-Starbucks-lai-that-sung-o-thi-truong-Viet-Nam_03032020220205_pvmawc.jpg)'}} />
                        <div className="text">
                                    <h3 className="heading"><a href="#">Starbucks affirms commitment to a planet positive future through innovation and learnings from store partners</a></h3>
                            <div className="meta">
                            <div><a href="#"><span className="icon-calendar" /> 29/3/2022</a></div>
                            </div>
                        </div>
                        </div>
                        <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsirnbuyv/image/upload/v1648497831/tai-sao-starbucks-lai-that-sung-o-thi-truong-viet-nam_lt7wlr.jpg)'}} />
                        <div className="text">
                                    <h3 className="heading"><a href="#">Starbucks Innovates, Tests and Learns from Store Partners to Achieve Waste Goals</a></h3>
                            <div className="meta">
                                <div><a href="#"><span className="icon-calendar" /> 29/3/2022</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
                        <h2 className="footer-heading">Menu Page</h2>
                        <ul className="list-unstyled">
                        <li><a href="#" className="py-2 d-block"><NavLink to="/">Home</NavLink></a></li>
                        <li><a href="#" className="py-2 d-block"><NavLink to="/about">About</NavLink></a></li>
                        <li><a href="#" className="py-2 d-block"><NavLink to="/product">Product</NavLink></a></li>
                        <li><a href="#" className="py-2 d-block"><NavLink to="">Signup</NavLink></a></li>
                        <li><a href="#" className="py-2 d-block"><NavLink to="">Signin</NavLink></a></li>



                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">Contact</h2>
                        <div className="block-23 mb-3">
                        <ul>
                            <li><span className="icon ion-ios-pin" /><span className="text">FPT Polytechnic Hà Nội</span></li>
                            <li><a href="#"><span className="icon ion-ios-call" /><span className="text">0923.239.468</span></a></li>
                            <li><a href="#"><span className="icon ion-ios-send" /><span className="text">anhntph14690@fpt.edu.vn</span></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <p className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © anhntph14690 | Assignment React-TypeSecript and Assignment NodeJS <i className="ion-ios-heart" aria-hidden="true" />
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default WebsiteLayout