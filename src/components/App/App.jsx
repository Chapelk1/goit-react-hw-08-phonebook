import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/selectors'
import { refreshUser } from "redux/auth/operations";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";
import { Load } from './App.styled'

const RegisterForm = lazy(() => import('pages/Register/Register'))
const LoginForm = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const HomePage = lazy(()=>import('pages/Home/Home'))


export function App() {
  const dispach = useDispatch()
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispach(refreshUser())
  },[dispach])

  return isRefreshing ? (
    <Load>Refreshing user...</Load>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<RegisterForm />}
              redirectTo={'/contacts'}
            />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute
              component={<LoginForm />}
              redirectTo={'/contacts'}
            />
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo={'/login'} />
          }
        />

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
































