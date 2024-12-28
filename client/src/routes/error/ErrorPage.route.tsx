import React from 'react';
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = (): React.JSX.Element => {
    const error = useRouteError() as Error;
    if (!isRouteErrorResponse(error)) {
        return <React.Fragment></React.Fragment>;
    }
    console.error(error);
    return (
        <div id="error-page">
            <h1>404 Page</h1>
            <p>Nie odnaleziono strony</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>{error.data}</p>
        </div>
    );
};
