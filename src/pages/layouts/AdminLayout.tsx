import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './AdminLayout.css';

type Props = {}

const AdminLayout = (props: Props) => {
    return (
            
        <div className="container-fluid">
            <div className="row">
                <div className="fixed-top">
                    <Sidebar />  
                </div>
                
                <main className="ms-sm-auto" id="main-admin-outlet">
                    <Outlet />
                </main>
                
            </div>
        </div>
        

    )
}

export default AdminLayout