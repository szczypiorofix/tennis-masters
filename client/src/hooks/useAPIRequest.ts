import {useCallback, useState} from 'react';

export const useAPIRequest = <T,>(url: string, defaultValue: T): [(requestOptions: RequestInit) => void, T, boolean, boolean, string] => {
    const [response, setResponse] = useState<T>(defaultValue);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const execute = useCallback((requestOptions: RequestInit) => {
        (async function fetchApi() {
            setLoading(true);
            try {
                const response: Response = await fetch(url, requestOptions);
                if (!response.ok) {
                    const responseString = JSON.stringify(response);
                    console.error("useAPIRequest: ", responseString);
                    setHasError(true);
                    setErrorMessage("API request error: " + JSON.stringify(responseString));
                    setLoading(false);
                }
                const responseResult: T = await response.json() as T;
                setResponse(responseResult);
            } catch(err) {
                console.error("useAPIRequest: ", err);
                setErrorMessage("API request error: " + JSON.stringify(response));
                setLoading(false);
                setHasError(true);
            }
            finally {
                setLoading(false);
            }
        })();
    }, [url, response]);
    return [
        execute,
        response,
        loading,
        hasError,
        errorMessage
    ];
};
