import React, { useEffect } from 'react';

import { TableHeader } from '@/components/table/Table.model';
import { SpinnerComponent as Spinner } from '../..//components/spinner/Spinner.component';
import { TableComponent as Table } from '../../components/table/Table.component';
import { EnvironmentScheme, getEnvironmentDetails } from '../../config/environment.config';
import { useAPIRequest } from '../../hooks/useAPIRequest';
import { User } from '../../shared/models';

const defaultTetData: User[] = [];

export const Rankings: React.FC = () => {
    const environmentVar: string = process.env.REACT_APP_ENVIRONMENT || 'localhost';
    const environment: EnvironmentScheme = getEnvironmentDetails(environmentVar);
    const [execute, response, loading, hasError, errorMessage] = useAPIRequest<User[]>(environment.url + "/users", defaultTetData);

    const requestOptions: RequestInit = {
        method: "GET"
    };

    useEffect(() => {
        if (!loading) {
            console.log("Calling execute...");
            execute(requestOptions);
        }
    }, [execute]);

    const headers: TableHeader<User>[] = [
        {
            id: 0,
            name: 'id',
            display: "ID"
        },
        {
            id: 1,
            name: 'firstname',
            display: "Imię"
        },
        {
            id: 2,
            name: 'lastname',
            display: "Nazwisko"
        },
        {
            id: 3,
            name: 'email',
            display: "E-mail" 
        }
    ];

    return <div>
        <div>
            <h1>Rankingi</h1>
        </div>
        <div>
            { loading && <Spinner /> }
        </div>
        {hasError && <p>ERROR: {errorMessage}</p>}
        <div>
            { response && <Table data={ response } headers={ headers }></Table> }
        </div>
    </div>;
};
