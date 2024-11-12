import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import { MainRouter } from "./router";

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider
            router={MainRouter}
            future={{ v7_startTransition: true }}
        />
    </React.StrictMode>,
    document.getElementById("root")
);
