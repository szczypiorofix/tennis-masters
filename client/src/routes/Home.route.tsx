import { EnvironmentScheme, getEnvironmentDetails } from '../config/environment.config';
import React, { useEffect, useState } from 'react';

interface HomeApiCall {
    run: boolean;
    finished: boolean;
    result: string;
    env: string;
}

export const Home: React.FC = () => {
    const [state, setState] = useState<HomeApiCall>({
        run: false,
        finished: false,
        result: "",
        env: process.env.REACT_APP_ENVIRONMENT || 'development'
    });

    useEffect(() => {
        if (state.run && !state.finished) {
            const environmentVar: string = process.env.REACT_APP_ENVIRONMENT || 'development';
            const environment: EnvironmentScheme = getEnvironmentDetails(environmentVar);

            let responseResult = "";
            fetch(environment.url)
            .then((res) => res.json())
            .then(result => {
                console.log('Result: ', result);
                responseResult = result.data; 
            })
            .catch(err => {
                console.error(err);
                responseResult = JSON.stringify(err);
            })
            .finally(() => {
                setState({
                    ...state,
                    result: responseResult,
                    run: false,
                    finished: true
                });
            });
        }
    }, [state.run]);

    const makeApiCall = () => {
        console.log('Call to API...');
        setState({
            ...state,
            result: "",
            run: true,
            finished: false
        });
    }

    return <div>
        <h1>Home page</h1>
        <p>REACT_APP_ENVIRONMENT: {state.env}</p>
        <div>
            <button 
                onClick={ makeApiCall }
                disabled={state.run}
            >Test API call:</button>
        </div>
        <div>
            <pre>{ state.result }</pre>
        </div>
    </div>
}
