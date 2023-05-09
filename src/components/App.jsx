import { lazy, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch} from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth} from 'hooks/useAuth/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home.js'));
const Register = lazy(() => import('../pages/Registration/Registration.js'));
const Login = lazy(() => import('../pages/Login/Login.js'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts.js'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  

  useEffect(() => {
      dispatch(refreshUser());
      return;
    
  }, [dispatch]);

  return isRefreshing ? (
    <b>Fetching user data...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Route>
      <Route
        path="*" element={<Navigate to="/" />}
      />
    </Routes>
  );
};
