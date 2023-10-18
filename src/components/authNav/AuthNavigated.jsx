import { NavLink } from "react-router-dom"




export function AuthNav() {
    return (
        <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}