import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
            
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto  ">
                    <Outlet />
                </main>
                
            </div>
        </div>
        

    )
}

export default AdminLayout