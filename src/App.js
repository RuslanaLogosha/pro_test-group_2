import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Switch,
  useLocation,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import queryString from 'query-string';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeView from './views/HomeView/HomeView';
import TestView from './views/TestView/TestView';
import SpinnerLoader from './components/SpinnerLoader';
import RegisterView from './views/RegisterView';
import ResultsView from './views/ResultsView';
import UsefulInfoView from './views/UsefulInfoView';
import ContactsView from './views/ContactsView/';
import { authOperations, authSelectors, authActions } from 'redux/auth';
import Skeleton from 'components/Skeleton';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getEmail);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  const ErrorUnauthorized = useSelector(authSelectors.getErrorUnauthorized);
  const [isModalOpen, setModal] = useState(false);

  const handleModal = () => {
    setModal(!isModalOpen);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSignOutBtnClick = () => {
    dispatch(authOperations.logOut());
  };

  const location = useLocation();
  const parsedLocation = queryString.parse(location.search);

  const history = useHistory();
  const savedLocation = useSelector(authSelectors.getSavedLocation);

  useEffect(() => {
    const userFromGoogle = {
      email: parsedLocation.email,
      token: parsedLocation.token,
      refreshToken: parsedLocation.refreshToken,
      sessionId: parsedLocation.sessionId,
    };

    if (
      parsedLocation.email &&
      parsedLocation.token &&
      parsedLocation.refreshToken &&
      parsedLocation.sessionId
    ) {
      dispatch(authActions.setGoogleUser(userFromGoogle));
    }
  }, [
    dispatch,
    parsedLocation.email,
    parsedLocation.refreshToken,
    parsedLocation.sessionId,
    parsedLocation.token,
  ]);

  useEffect(() => {
    if (ErrorUnauthorized === 'Not authorized') {
      dispatch(authOperations.refreshToken());
    }
    if (!ErrorUnauthorized) {
      dispatch(authOperations.fetchCurrentUser());
    }
  }, [dispatch, ErrorUnauthorized]);

  useEffect(() => {
    if (isLoggedIn && savedLocation) {
      history.push(savedLocation);
    }
  }, [history, isLoggedIn, savedLocation]);

  return (
    <>
      <ToastContainer autoClose={3000} />
      {isFetchingCurrentUser ? (
        <Skeleton />
      ) : (
        <>
          <Header
            isLoggedIn={isLoggedIn}
            userEmail={email}
            handleSignOutBtnClick={handleSignOutBtnClick}
            handleModal={handleModal}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
            setModal={setModal}
          />

          <div className={isModalOpen ? 'content modalOpen' : 'content'}>
            <Switch>
              <Suspense fallback={<SpinnerLoader />}>
                <PublicRoute path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PrivateRoute exact path="/" redirectTo="/register" restricted>
                  <HomeView />
                </PrivateRoute>
                <PrivateRoute
                  exact
                  path="/test"
                  redirectTo="/register"
                  restricted
                >
                  <TestView />
                </PrivateRoute>
                <PrivateRoute
                  exact
                  path="/results"
                  redirectTo="/register"
                  restricted
                >
                  <ResultsView />
                </PrivateRoute>
                <PrivateRoute
                  exact
                  path="/materials"
                  redirectTo="/register"
                  restricted
                >
                  <UsefulInfoView />
                </PrivateRoute>
                <Route path="/contacts">
                  <ContactsView />
                </Route>

                {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/register" />}
              </Suspense>
            </Switch>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}
export default App;
