import {NavLink} from './AuthNavigated.styled'




export function AuthNav() {
    return (
        <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}