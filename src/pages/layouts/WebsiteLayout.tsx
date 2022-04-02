import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "./Header.css";

import "./../css/ionicons.min.css";
import "./../css/style.css";
import "./../js/jquery.min.js";
// import "./../js/popper.js";
import "./../js/bootstrap.min.js";
import "./../js/main.js";


import './../../pages/assets/vendor/css/core.css';



type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <div className="fixed-top" id="bg-header">
                <header className="fixed-top" id="header">
                    <div className="logo">
                        <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648705533/1024px-Starbucks_Corporation_Logo_2011.svg_yoawtg.png" alt="" width="160px" height="50px" />
                    </div>
                    <nav className="navMenu">

                        <a><NavLink to="/">Home</NavLink></a>
                        <a><NavLink to="/product">Product</NavLink></a>
                        <a><NavLink to="/about">About</NavLink></a>
                        {/* <a><NavLink to="/admin">Admin</NavLink></a> */}

                        <div className="dot" />
                    </nav>
                    <div className="search_cart">
                        <div className="search-box">
                            <input type="text" className="input-search" placeholder="Search..." />
                        </div>
                        <div className="cart">
                            <a href="#">
                                <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648705533/cart_v2r6xb.png" alt="" width="25px" height="25px" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="">
                        <ul className="navbar-nav flex-row align-items-center ms-auto">

                            {/* User */}
                            <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <div className="avatar avatar-online">
                                        <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648479418/1024px-Starbucks_Corporation_Logo_2011.svg_m6pub6.png" className="w-px-40 h-auto rounded-circle" />
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar avatar-online">
                                                        <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648479418/1024px-Starbucks_Corporation_Logo_2011.svg_m6pub6.png" className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="fw-semibold d-block">Name</span>
                                                    <small className="text-muted">Admin</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider" />
                                    </li>
                                    <NavLink to="/admin">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="bx bx-user me-2" />
                                            <span className="align-middle">Admin</span>
                                        </a>
                                    </li>
                                    </NavLink>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="bx bx-cog me-2" />
                                            <span className="align-middle">Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <span className="d-flex align-items-center align-middle">
                                                <i className="flex-shrink-0 bx bx-credit-card me-2" />
                                                <span className="flex-grow-1 align-middle">Billing</span>
                                                <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="auth-login-basic.html">
                                            <i className="bx bx-power-off me-2" />
                                            <span className="align-middle">Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/*/ User */}
                        </ul>
                    </div>


                </header>
            </div>
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
                        <li><a href="#" className="py-2 d-block"><NavLink to="/product">Product</NavLink></a></li>
                        <li><a href="#" className="py-2 d-block"><NavLink to="/about">About</NavLink></a></li>
                        <li><a href="#" className="py-2 d-block"><NavLink to="/signup">Signup</NavLink></a></li>
                        <li><a href="#" className="py-2 d-block"><NavLink to="/signin">Signin</NavLink></a></li>



                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">Contact</h2>
                        <div className="block-23 mb-3">
                        <ul>
                            <li><span className="icon ion-ios-pin" /><span className="">FPT Polytechnic Hà Nội</span></li>
                            <li><a href="#"><span className="icon ion-ios-call" /><span className="">0923.239.468</span></a></li>
                            <li><a href="#"><span className="icon ion-ios-send" /><span className="">anhntph14690@fpt.edu.vn</span></a></li>
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