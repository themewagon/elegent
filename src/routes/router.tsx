import { Suspense, lazy } from "react";
import PageLoader from "../components/loading/PageLoader";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { rootPaths } from "./paths";
import Home from "pages/dashboard/Home";
// import App from "App";
// import MainLayout from "layouts/main-layout";
// import AuthLayout from "layouts/auth-layout";
// import Error404 from "pages/errors/Error404";

const App = lazy(() => import("App"));
const MainLayout = lazy(() => import("layouts/main-layout"));
const AuthLayout = lazy(() => import("layouts/auth-layout"));
const Error404 = lazy(() => import("pages/errors/Error404"));

export const router = createBrowserRouter([
    {
        element: (
            <Suspense>
                <App />
            </Suspense>
        ),
        children: [
            {
                path: '/',
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
                    {

                    },
                ]
            },
            {
                path: rootPaths.authRoot,
                element: <AuthLayout />,
                children: [

                ],
            },
            {
                path: '*',
                element: <Error404 />
            },
        ],
    },
]);
