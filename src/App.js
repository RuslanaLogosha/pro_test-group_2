import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/MainPage/MainPage';
import SpinnerLoader from './components/SpinnerLoader';
import MaterialsView from './components/MaterialsView/MaterialsView';

// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <>
      <Header isLoggedIn={true} />

      <BrowserRouter>
        <Switch>
          <Suspense fallback={<SpinnerLoader />}>
            <Route
              path="/register"
              // component={ RegisterView }
            />
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
            <Route
              path="/contacts"
              // component={ ContactsView }
            />
          </Suspense>
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}
export default App;
