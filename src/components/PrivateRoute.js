import { useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from "react-router-dom";






export function PrivateRoute({component: Component, redirectTo = "/"}) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const isRefreshing = useSelector(state => state.auth.isRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

