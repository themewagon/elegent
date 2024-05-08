/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import PageLoader from '../components/loading/PageLoader';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import sales from './paths';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Error404 = lazy(() => import('pages/errors/Error404'));

import Sales from 'pages/home/Sales';
import Login from 'pages/authentication/Login';
import SignUp from 'pages/authentication/SignUp';
import Splash from 'components/loading/Splash';
import Dashboard from 'pages/home/Dashboard';
import ResetPassword from 'pages/authentication/ResetPassword';

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
            path: '',
            element: <Sales />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
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
          {
            path: paths.resetPassword,
            element: <ResetPassword />,
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
