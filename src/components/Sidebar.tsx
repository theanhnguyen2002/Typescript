import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        // <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        //     <div className="position-sticky pt-3">
        //         <ul className="nav flex-column">
        //             <li className="nav-item">
        //                 <NavLink className="nav-link active" aria-current="page" to="/admin/dashboard">
        //                     Dashboard
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink className="nav-link active" aria-current="page" to="/admin/products">
        //                     Product
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink className="nav-link active" aria-current="page" to="/">
        //                     Home
        //                 </NavLink>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        
            <div className="navigation">
                <div className="wrapper2 position-sticky pt-3">
                    <div className="abilan">
                        <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648496099/1024px-Starbucks_Corporation_Logo_2011.svg_lkbznl.png" />
                    </div>


                    <a><NavLink className="text-slate-600" to="/">
                        <button className="compose">
                            HOME
                            <span className="plus">
                                <img src="https://i.ibb.co/v1HxGWj/add-1.png" />
                            </span>
                        </button>
                    </NavLink></a>
                    

                    <div className="folders">Folders</div>
                    
                    <div className="folder-icons">
                        <div className="icon1">
                            <img src="https://i.ibb.co/2yLfX9W/sent-mail.png" />
                        </div>
                        <div className="icon-name">
                            <a><NavLink className="text-slate-600" to="/admin/dashboard">
                                Dashboard
                            </NavLink></a>
                        </div>
                    </div>
                    <div className="folder-icons">
                        <div className="icon1">
                            <img src="https://i.ibb.co/2yLfX9W/sent-mail.png" />
                        </div>
                        <div className="icon-name">
                            <a><NavLink className="text-slate-600" to="/admin/products">
                                Product
                            </NavLink></a>
                        </div>
                    </div>
                    
                    
                    <div className="folders">
                    Online Friends
                    </div>
                    <div className="folder-icons">
                    <div className="avatar">
                        <div className="online">
                        </div>
                        <img src="https://randomuser.me/api/portraits/women/65.jpg" />
                    </div>
                    <div className="names">Don Allen
                    </div>
                    </div>
                </div>
            </div>
        


    )
}

export default Sidebar