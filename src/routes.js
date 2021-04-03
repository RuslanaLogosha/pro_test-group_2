import { lazy } from 'react';

const routes = {
  firstRoutes: [
    {
      path: '/' /* edit path */,
      label: 'Name' /* edit name */,
      exact: true,
      component: lazy(() => import('./views/TestPublic')) /* edit import url */,
      private: false,
      restricted: false,
    },
  ],

  secondRoutes: [
    {
      path: '/' /* edit path */,
      label: 'Name' /* edit name */,
      exact: true,
      component: lazy(() =>
        import('./views/TestPrivate'),
      ) /* edit import url */,
      private: true,
      restricted: false,
    },
  ],
};

export default routes;
