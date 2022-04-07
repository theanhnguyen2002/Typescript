import { NavLink } from "react-router-dom";
import { User } from "../types/User";

export const authenticated = (user: User, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}
export const check = () => {
    const checks = JSON.parse(localStorage.getItem('user') as string)
    if(checks){
        if(checks.user.role == 0){
            return <div> 
                <NavLink to={`/admin`}>
                    <li>
                        <a className="dropdown-item" href="#">
                            <i className="bx bx-user me-2" />
                            <span className="align-middle">Admin</span>
                        </a>
                    </li>
                </NavLink>
            </div>
        }else{  
            ""
        }
    }


}