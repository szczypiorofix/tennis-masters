import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./views/home/Home";
import Admin from "./views/admin/Admin";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import ErrorPage from "./views/error/ErrorPage";

export const App: React.FC = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/dashboard",
            element: <Admin />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
