import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from './App.component';
import { Home } from './routes/Home.route';
import { Login } from './routes/Login.route';
import { ROUTER_PATH } from './shared/enums';

export const MainRouter = createBrowserRouter([
    {
        path: ROUTER_PATH.HOME,
        element: <App><Home/></App>
    },
    {
        path: ROUTER_PATH.LOGIN,
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