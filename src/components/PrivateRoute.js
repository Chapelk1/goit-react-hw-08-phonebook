import { useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from "react-router-dom";
import { getIsLoggedIn, getIsRefreshing } from 'redux/selectors';





export function PrivateRoute({component: Component, redirectTo = "/"}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

