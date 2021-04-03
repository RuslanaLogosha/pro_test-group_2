import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import SpinnerLoader from '../SpinnerLoader';
import routes from '../../routes.js';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function App() {
  return (
    <>
      <Header isLoggedIn={true} />

      <BrowserRouter>
        <Suspense fallback={<SpinnerLoader />}>
          {/* example public router */}
          <Switch>
            {routes.firstRoutes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
          </Switch>

          {/* example private router */}
          <Switch>
            {routes.secondRoutes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>

      <Footer />
    </>
  );
}
