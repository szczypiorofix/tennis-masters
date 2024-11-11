import React from 'react';
import ReactDOM from 'react-dom';

import { MainRouter } from './router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider
            router={ MainRouter }
            future={{ v7_startTransition: true }}
        />
    </React.StrictMode>
    , document.getElementById("root")
);
