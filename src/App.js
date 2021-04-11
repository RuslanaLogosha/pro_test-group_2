import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/MainPage/MainPage';
import TestPage from './components/TestPage/TestPage';
import SpinnerLoader from './components/SpinnerLoader';
import RegisterView from './views/RegisterView';
import MaterialsView from './components/MaterialsView/MaterialsView';
import ContactsView from './components/Contacts/ContactsView';
import { authOperations, authSelectors } from 'redux/auth';
import Skeleton from 'components/Skeleton';

// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getEmail);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  const ErrorUnauthorized = useSelector(authSelectors.getErrorUnauthorized);
  // console.log(isErrorUnauthorized);

  const handleSignOutBtnClick = () => {
    dispatch(authOperations.logOut());
  };

  useEffect(() => {
    if (ErrorUnauthorized === 'Not authorized') {
      dispatch(authOperations.refreshToken());
    }
    if (!ErrorUnauthorized) {
      dispatch(authOperations.fetchCurrentUser());
    }
  }, [dispatch, ErrorUnauthorized]);

  return (
    <>
      <ToastContainer autoClose={3000} />
      {isFetchingCurrentUser ? (
        <Skeleton />
      ) : (
        <>
          <BrowserRouter>
            <Header
              isLoggedIn={isLoggedIn}
              userEmail={email}
              handleSignOutBtnClick={handleSignOutBtnClick}
            />
            <Switch>
              <Suspense fallback={<SpinnerLoader />}>
                <Route path="/register" restricted component={RegisterView} />
                <Route
                  exact
                  path="/"
                  component={HomePage}
                  redirectTo="/register"
                  restricted
                />
                <Route
                  exact
                  path="/test"
                  component={TestPage}
                  redirectTo="/register"
                  restricted
                />
                <Route
                  exact
                  path="/materials"
                  component={MaterialsView}
                  redirectTo="/register"
                  restricted
                />
                <Route path="/contacts" component={ContactsView} />
              </Suspense>
            </Switch>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
}
export default App;
