import React from "react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

import {ErrorResponse} from "@remix-run/router/utils";

const ErrorPage: React.FC = () => {
    const error: ErrorResponse | Error = useRouteError() as ErrorResponse | Error;
    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <h3>{error.status}</h3>
                <p>{error.statusText}</p>
                {error.data?.message && (
                    <p>
                        <i>{error.data.message}</i>
                    </p>
                )}
            </div>
        );
    }
    else if (error instanceof Error) {
        return (
            <div id="error-page">
                <h1>Oops! Unexpected Error</h1>
                <p>Something went wrong.</p>
                <p>
                    <i>{error.message}</i>
                </p>
            </div>
        );
    }
    return <></>;
}

export default ErrorPage;
