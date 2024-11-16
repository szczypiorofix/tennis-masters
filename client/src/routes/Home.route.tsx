import React, { useCallback, useEffect, useState } from 'react';

import { EnvironmentScheme, getEnvironmentDetails } from '../config/environment.config';

export const Home: React.FC = () => {
    const [run, setRun] = useState<boolean>(false);
    const [result, setResult] = useState<string>("");
    const [env] = useState<string>(process.env.REACT_APP_ENVIRONMENT || 'localhost');

    const getData = useCallback(async () => {
        const environmentVar: string = process.env.REACT_APP_ENVIRONMENT || 'development';
        const environment: EnvironmentScheme = getEnvironmentDetails(environmentVar);

        try {
            const resp = await fetch(environment.url);
            const response = await resp.json();
            setResult(response.data);
        } catch(e) {
            console.error(e);
            setResult(JSON.stringify(e));
        }
        finally {
            setRun(false);
        }
    }, [result]);

    useEffect(() => {
        if (run) {
          getData().then(() => setRun(false));
        }
      }, [run, getData]);

    const makeApiCall = () => {
        console.log('Call to API...');
        setRun(true);
    }

    return <div>
        <h1>Home page</h1>
        <p>REACT_APP_ENVIRONMENT: {env}</p>
        <div>
            <button 
                onClick={ makeApiCall }
                disabled={run}
            >Test API call:</button>
        </div>
        <div>
            <pre>{ result }</pre>
        </div>
    </div>
}
