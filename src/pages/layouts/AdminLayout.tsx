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

import './../../pages/assets/vendor/js/bootstrap.js'



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
                                        <i className="menu-icon tf-icons bx bx-home-circle" />
                                        <div data-i18n="Analytics">Dashboard</div>
                                    </a>
                                </NavLink>

                            </li>

                            <li className="menu-item">
                                <NavLink to="/admin/products">
                                    <a href="index.html" className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-home-circle" />
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
                                        <i className="menu-icon tf-icons bx bx-home-circle" />
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