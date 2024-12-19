import React, { useEffect } from 'react';

import { TableHeader } from '@/components/table/Table.model';
import { SpinnerComponent as Spinner } from '../..//components/spinner/Spinner.component';
import { ContainerComponent as Container } from '../../components/container/Container.component';
import { SORT_ORDER } from '../../components/enums';
import { TableComponent as Table } from '../../components/table/Table.component';
import { EnvironmentScheme, getEnvironmentDetails } from '../../config/environment.config';
import { useAPIRequest } from '../../hooks/useAPIRequest';
import { User } from '../../shared/models';

const defaultTetData: User[] = [];

const rankingsRequestOptions: RequestInit = {
    method: "GET"
};

export const Rankings = (): React.JSX.Element => {
    const environmentVar: string = process.env.REACT_APP_ENVIRONMENT || 'localhost';
    const environment: EnvironmentScheme = getEnvironmentDetails(environmentVar);
    const [execute, response, loading, hasError, errorMessage] = useAPIRequest<User[]>(environment.url + "/users", defaultTetData);

    useEffect(() => {
        if (!loading && response.length === 0) {
            console.log("Calling execute...");
            execute(rankingsRequestOptions);
        }
    }, [execute, loading, response.length]);

    const headers: TableHeader<User>[] = [
        {
            id: 0,
            name: 'id',
            display: "ID",
            sortable: true,
            numeric: true,
        },
        {
            id: 1,
            name: 'firstname',
            display: "Imię",
            sortable: true,
            numeric: false,
        },
        {
            id: 2,
            name: 'lastname',
            display: "Nazwisko",
            sortable: true,
            numeric: false,
        },
        {
            id: 3,
            name: 'email',
            display: "E-mail" ,
            sortable: true,
            numeric: false,
        },
    ];

    return <div>
        <div>
            <h1>Rankingi</h1>
        </div>
        <div>
            { loading && <Spinner /> }
        </div>

        {hasError && <p>ERROR: {errorMessage}</p>}

        <Container>
            { (response && !loading) && <Table
                data={ response }
                headers={ headers }
                defaultSortColumn="firstname"
                defaultSortOrder={SORT_ORDER.ASC}
            ></Table> }
        </Container>
    </div>;
};
