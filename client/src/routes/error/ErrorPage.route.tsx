import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError() as Error;
    if (!isRouteErrorResponse(error)) {
        return null;
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
