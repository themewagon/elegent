/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
// import sales from './paths';
import Splash from 'components/loading/Splash';
import PageLoader from '../components/loading/PageLoader';

const App = lazy(() => import('App'));
const MainLayout = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import('layouts/main-layout');
});
const AuthLayout = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import('layouts/auth-layout');
});

const Error404 = lazy(() => import('pages/errors/Error404'));

const Dashboard = lazy(() => import('pages/home/Dashboard'));

const Sales = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import('pages/home/Sales');
});

const Login = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import('pages/authentication/Login');
});
const SignUp = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import('pages/authentication/SignUp');
});

const ResetPassword = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import('pages/authentication/ResetPassword');
});

const Overview = lazy(() => import('pages/pages/profile/Overview'));
const AllProjects = lazy(() => import('pages/pages/profile/AllProjects'));
const AllUsers = lazy(() => import('pages/pages/users/AllUsers'));
const AddUser = lazy(() => import('pages/pages/users/AddUser'));
const Setting = lazy(() => import('pages/pages/account/Setting'));
const Billing = lazy(() => import('pages/pages/account/Billing'));
const Invoice = lazy(() => import('pages/pages/account/Invoice'));
const Timeline = lazy(() => import('pages/pages/projects/Timeline'));

const Kanban = lazy(() => import('pages/applications/Kanban'));
const Wizard = lazy(() => import('pages/applications/Wizard'));
const DataTables = lazy(() => import('pages/applications/DataTables'));
const Schedule = lazy(() => import('pages/applications/Schedule'));

const AllProducts = lazy(() => import('pages/ecommerce/products/AllProducts'));
const EditProduct = lazy(() => import('pages/ecommerce/products/EditProduct'));
const NewProduct = lazy(() => import('pages/ecommerce/products/NewProduct'));
const OrderList = lazy(() => import('pages/ecommerce/orders/OrderList'));
const OrderDetail = lazy(() => import('pages/ecommerce/orders/OrderDetail'));

const Notification = lazy(() => import('pages/notification/Notification'));

const Calendar = lazy(() => import('pages/calendar/Calendar'));

const Message = lazy(() => import('pages/message/Message'));

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
            element: (
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            ),
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
            element: (
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            ),
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
            element: (
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            ),
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
            element: (
              <Suspense fallback={<PageLoader />}>
                <Notification />
              </Suspense>
            ),
          },
          {
            path: 'calendar',
            element: (
              <Suspense fallback={<PageLoader />}>
                <Calendar />
              </Suspense>
            ),
          },
          {
            path: 'messages',
            element: (
              <Suspense fallback={<PageLoader />}>
                <Message />
              </Suspense>
            ),
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
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
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
