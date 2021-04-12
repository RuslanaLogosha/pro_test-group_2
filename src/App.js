import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/MainPage/MainPage';
import TestView from './views/TestView/TestView';
import SpinnerLoader from './components/SpinnerLoader';
import RegisterView from './views/RegisterView';
import MaterialsView from './views/MaterialsView/MaterialsView';
import ContactsView from './components/Contacts/ContactsView';
import { authOperations, authSelectors } from 'redux/auth';
import Skeleton from 'components/Skeleton';

// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getEmail);

  const handleSignOutBtnClick = () => {
    dispatch(authOperations.logOut());
  };

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
            <div className="content">
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
                    component={TestView}
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
            </div>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
}
export default App;
