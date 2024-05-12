/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import PageLoader from '../components/loading/PageLoader';
import { Navigate, Outlet, createBrowserRouter, redirect } from 'react-router-dom';
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
import Overview from 'pages/pages/profile/Overview';
import AllProjects from 'pages/pages/profile/AllProjects';
import AllUsers from 'pages/pages/users/AllUsers';
import AddUser from 'pages/pages/users/AddUser';
import Setting from 'pages/pages/account/Setting';
import Billing from 'pages/pages/account/Billing';
import Invoice from 'pages/pages/account/Invoice';
import Timeline from 'pages/pages/projects/Timeline';
import Kanban from 'pages/applications/Kanban';
import Wizard from 'pages/applications/Wizard';
import DataTables from 'pages/applications/DataTables';
import Schedule from 'pages/applications/Schedule';
import AllProducts from 'pages/ecommerce/products/AllProducts';
import EditProduct from 'pages/ecommerce/products/EditProduct';
import NewProduct from 'pages/ecommerce/products/NewProduct';
import OrderList from 'pages/ecommerce/orders/OrderList';
import OrderDetail from 'pages/ecommerce/orders/OrderDetail';
import Notification from 'pages/notification/Notification';
import Calendar from 'pages/calendar/Calendar';
import Message from 'pages/message/Message';

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
          // {
          //   path: '',
          //   element: <Navigate to="/sales" />,
          // },
          {
            // path: 'sales',
            path: '',
            element: <Sales />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'pages',
            children: [
              {
                path: 'profile',
                children: [
                  {
                    path: 'overview',
                    element: <Overview />,
                  },
                  {
                    path: 'all-projects',
                    element: <AllProjects />,
                  },
                ],
              },
              {
                path: 'users',
                children: [
                  {
                    path: 'all-users',
                    element: <AllUsers />,
                  },
                  {
                    path: 'add-user',
                    element: <AddUser />,
                  },
                ],
              },
              {
                path: 'account',
                children: [
                  {
                    path: 'setting',
                    element: <Setting />,
                  },
                  {
                    path: 'billing',
                    element: <Billing />,
                  },
                  {
                    path: 'invoice',
                    element: <Invoice />,
                  },
                ],
              },
              {
                path: 'projects',
                children: [
                  {
                    path: 'timeline',
                    element: <Timeline />,
                  },
                ],
              },
            ],
          },
          {
            path: 'applications',
            children: [
              {
                path: 'kanban',
                element: <Kanban />,
              },
              {
                path: 'wizard',
                element: <Wizard />,
              },
              {
                path: 'data-tables',
                element: <DataTables />,
              },
              {
                path: 'schedule',
                element: <Schedule />,
              },
            ],
          },
          {
            path: 'ecommerce',
            children: [
              {
                path: 'products',
                children: [
                  {
                    path: 'all-products',
                    element: <AllProducts />,
                  },
                  {
                    path: 'edit-product',
                    element: <EditProduct />,
                  },
                  {
                    path: 'new-product',
                    element: <NewProduct />,
                  },
                ],
              },
              {
                path: 'orders',
                children: [
                  {
                    path: 'order-list',
                    element: <OrderList />,
                  },
                  {
                    path: 'order-detail',
                    element: <OrderDetail />,
                  },
                ],
              },
            ],
          },
          {
            path: 'notifications',
            element: <Notification />,
          },
          {
            path: 'calendar',
            element: <Calendar />,
          },
          {
            path: 'messages',
            element: <Message />,
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
