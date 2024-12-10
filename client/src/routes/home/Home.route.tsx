import React from 'react';

import { EnvironmentScheme, getEnvironmentDetails } from '../../config/environment.config';
import { useAPIRequest } from '../../hooks/useAPIRequest';
import { TestDataModel } from '../../shared/models';

const defaultTetData: TestDataModel = {
    name: "<default name>",
    path: "<default path>",
    version: "<default version>",
};

export const Home = (): React.JSX.Element => {
    const environmentVar: string = process.env.REACT_APP_ENVIRONMENT || 'localhost';
    const environment: EnvironmentScheme = getEnvironmentDetails(environmentVar);
    const [execute, response, loading, hasError, errorMessage] = useAPIRequest<TestDataModel>(environment.url, defaultTetData);

    const requestOptions: RequestInit = {
        method: "GET"
    };

    return <div>
        <h1>Home page</h1>
        <p>REACT_APP_ENVIRONMENT: {environmentVar}</p>
        <div>
            <button 
                onClick={() => execute(requestOptions)}
                disabled={loading}
            >Test API call:</button>
        </div>
        <div>
            { loading && <p>Loading...</p> }
        </div>
        {hasError && <p>ERROR: {errorMessage}</p>}
        <div>
            <pre>{ JSON.stringify(response) }</pre>
        </div>
    </div>;
};
