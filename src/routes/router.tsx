/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import PageLoader from '../components/loading/PageLoader';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';
import paths, { rootPaths } from './paths';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Error404 = lazy(() => import('pages/errors/Error404'));

import Home from 'pages/dashboard/Home';
import Login from 'pages/authentication/Login';
import SignUp from 'pages/authentication/SignUp';
import Splash from 'components/loading/Splash';

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {},
        ],
      },
      {
        path: rootPaths.pagesRoot,
        element: <></>,
        children: [],
      },
      {
        path: rootPaths.applicationsRoot,
        element: <></>,
        children: [],
      },
      {
        path: rootPaths.ecommerceRoot,
        element: <></>,
        children: [],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            {' '}
            <Outlet />{' '}
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <SignUp />,
          },
        ],
      },
      {
        path: rootPaths.notificationsRoot,
        element: <></>,
      },
      {
        path: rootPaths.calendarRoot,
        element: <></>,
      },
      {
        path: rootPaths.messageRoot,
        element: <></>,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
