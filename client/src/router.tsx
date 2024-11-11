import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from './components/App.component';
import { Home } from './routes/Home.route';
import { Login } from './routes/Login.route';

export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <App><Home/></App>
    },
    {
        path: "/login",
        element: <App><Login/></App>
    }
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
    }
});


/**
V7 REACT ROUTER DOM FUTURE FLAGS

v7_relativeSplatPath: true,
v7_fetcherPersist: true,
v7_normalizeFormMethod: true,
v7_partialHydration: true,
v7_skipActionErrorRevalidation: true

 */