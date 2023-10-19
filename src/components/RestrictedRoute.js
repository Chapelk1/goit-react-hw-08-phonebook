import { useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from 'redux/selectors';


export function RestrictedRoute({component: Component, redirectTo = '/'}) {
const isLoggedIn = useSelector(getIsLoggedIn);

    return  isLoggedIn ? <Navigate to={redirectTo}/> : Component ;
}






