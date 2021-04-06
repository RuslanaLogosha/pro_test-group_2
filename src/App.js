import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/MainPage/MainPage';
import SpinnerLoader from './components/SpinnerLoader';
import RegisterView from './views/RegisterView';
import MaterialsView from './components/MaterialsView/MaterialsView';
import ContactsView from './components/Contacts/ContactsView';
import { authOperations, authSelectors } from 'redux/auth';

// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <h1>Show React Skeleton</h1>
  ) : (
    <>
      <BrowserRouter>
        <Header isLoggedIn={true} userName="Vladymyr" />
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
  );
}
export default App;
