import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './AdminLayout.css';

import { NavLink } from 'react-router-dom'

import './../../pages/assets/vendor/fonts/boxicons.css';

import './../../pages/assets/vendor/css/core.css';
import './../../pages/assets/vendor/css/theme-default.css';
import './../../pages/assets/css/demo.css';

import './../../pages/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import './../../pages/assets/vendor/libs/apex-charts/apex-charts.css';

import './../../pages/assets/vendor/js/bootstrap.js';





type Props = {}

const AdminLayout = (props: Props) => {
    return (
            
        <div>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* Menu */}
                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="app-brand demo">
                            <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648496099/1024px-Starbucks_Corporation_Logo_2011.svg_lkbznl.png" alt="" width="180px" />
                        </div>
                        <div className="menu-inner-shadow" />
                        <ul className="menu-inner py-1">
                            {/* Dashboard */}
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Admin Page</span>
                            </li>

                            <li className="menu-item active">
                                <NavLink to="/admin/dashboard">
                                    <a href="index.html" className="menu-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="menu-icon bi bi-speedometer2" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                            <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                        </svg>
                                        <div data-i18n="Analytics">Dashboard</div>
                                    </a>
                                </NavLink>

                            </li>

                            <li className="menu-item">
                                <NavLink to="/admin/products">
                                    <a href="index.html" className="menu-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="menu-icon bi bi-inboxes-fill" viewBox="0 0 16 16">
                                            <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" />
                                        </svg>
                                        <div data-i18n="Analytics">Product</div>
                                    </a>
                                </NavLink>
                            </li>

                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Back to Home</span>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/">
                                    <a href="index.html" className="menu-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="menu-icon bi bi-house-door" viewBox="0 0 16 16">
                                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                        </svg>
                                        <div data-i18n="Analytics">Home</div>
                                    </a>
                                </NavLink>
                            </li>



                        </ul>
                    </aside>
                    <div className="layout-page">

                        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i className="bx bx-menu bx-sm" />
                                </a>
                            </div>
                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                {/* Search */}
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                        <i className="bx bx-search fs-4 lh-0" />
                                        <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
                                    </div>
                                </div>
                                {/* /Search */}
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
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-user me-2" />
                                                    <span className="align-middle">My Profile</span>
                                                </a>
                                            </li>
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
                        </nav>
                        <main className="ms-sm-auto" id="main-admin-outlet">
                            <Outlet />
                        </main>

                    </div>

                </div>
            </div>


        </div>

    )
}

export default AdminLayout