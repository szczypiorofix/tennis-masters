import { createBrowserRouter } from "react-router-dom";

import { App } from "./App.component";
import { ErrorPage } from "./routes";
import { Home, Login } from "./routes/";
import { Rankings } from "./routes/rankings/Rankings.route";
import { ROUTER_PATH } from "./shared/enums";

const AppComponentWrapper = (children: React.JSX.Element): React.JSX.Element => {
    return <App>{ children }</App>;
}

export const MainRouter = createBrowserRouter(
    [
        {
            path: ROUTER_PATH.HOME,
            element: (AppComponentWrapper(<Home />)),
            errorElement: <ErrorPage />,
        },
        {
            path: ROUTER_PATH.LOGIN,
            element: (AppComponentWrapper(<Login />)),
            errorElement: <ErrorPage />,
        },
        {
            path: ROUTER_PATH.RANKINGS,
            element: (AppComponentWrapper(<Rankings />)),
            errorElement: <ErrorPage />,
        },
    ],
    {
        /**
            V7 REACT ROUTER DOM FUTURE FLAGS
        */
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);
