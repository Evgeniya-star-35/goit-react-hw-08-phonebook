import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AppBar from '../AppBar/AppBar';
import { getIsFetchingCurrent } from '../../redux/auth/auth-selectors';
import PrivateRoute from '../PrivatRoute/PrivatRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import Container from '../../components/Container';

import { getCurrentUser } from '../../redux/auth/auth-operations';

// import s from './App.module.css';

const HomePage = lazy(() =>
  import(
    '../../pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */
  ),
);
const Registration = lazy(() =>
  import(
    '../../pages/Registration/Registration.js' /* webpackChunkName: "register-page" */
  ),
);
const Login = lazy(() =>
  import('../../pages/Login/Login.js' /* webpackChunkName: "login-page" */),
);
const Phonebook = lazy(() =>
  import(
    '../../pages/Phonebook/Phonebook.js' /* webpackChunkName: "phonebook-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    '../../pages/NoFoundPage/NoFoundPage.js' /* webpackChunkName: "not-found-page" */
  ),
);

const App = () => {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Registration}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
            />
            <PrivateRoute
              path="/contacts"
              restricted
              redirectTo="/login"
              component={Phonebook}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
