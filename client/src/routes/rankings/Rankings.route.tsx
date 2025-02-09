import React, { useEffect, useState } from 'react';

import { TableHeader } from '@/components/models/Table.model';
import { SpinnerComponent as Spinner } from '../..//components/spinner/Spinner.component';
import { ContainerComponent as Container } from '../../components/container/Container.component';
import { TableComponent as Table } from '../../components/table/Table.component';
import { EnvironmentScheme, getEnvironmentDetails } from '../../config/environment.config';
import { useAPIRequest } from '../../hooks/useAPIRequest';
import { User } from '../../shared/models';
import { SORT_ORDER } from '../../shared/enums';

const defaultTetData: RankingsResponse = {
    0: [],
    1:  0
};

const rankingsRequestOptions: RequestInit = {
    method: "GET"
};

interface RankingsState<T> {
    reload: boolean;
    page: number;
    resultsPerPage: number;
    maxResults: number;
    order: keyof T;
    sortOrder: SORT_ORDER
    data: T[];
}

interface RankingsResponse {
    [0]: User[];
    [1]: number;
}

export const Rankings = (): React.JSX.Element => {
    const environmentVar: string = process.env.REACT_APP_ENVIRONMENT || 'localhost';
    const environment: EnvironmentScheme = getEnvironmentDetails(environmentVar);
    const [state, setState] = useState<RankingsState<User>>({
        reload: true,
        page: 0,
        maxResults: 0,
        resultsPerPage: 10,
        sortOrder: SORT_ORDER.ASC,
        order: 'id',
        data: []
    });
    const [execute, response, loading, hasError, errorMessage] = useAPIRequest<RankingsResponse>(
        environment.url + "/users?page=" + state.page + "&resultsPerPage=" + state.resultsPerPage  + "&order=" + state.order + "&sortOrder=" + state.sortOrder,
        defaultTetData
    );

    useEffect(() => {
        if (response[0]?.length > 0) {
            setState({
                data: response[0],
                maxResults: response[1],
                order: state.order,
                page: state.page,
                resultsPerPage: state.resultsPerPage,
                sortOrder: state.sortOrder,
                reload: state.reload
            });
        }
    }, [
        response,
        state.order,
        state.page,
        state.resultsPerPage,
        state.sortOrder,
        state.reload
    ]);

    useEffect(() => {
        if (state.reload) {
            console.log('Reload...');
            execute(rankingsRequestOptions);
            setState({
                reload: false,
                data: state.data,
                maxResults: state.maxResults,
                order: state.order,
                page: state.page,
                resultsPerPage: state.resultsPerPage,
                sortOrder: state.sortOrder
            });
        }
    }, [
        state.reload,
        execute,
        // state.data,
        // state.maxResults,
        // state.order,
        // state.page,
        // state.resultsPerPage,
        // state.sortOrder
    ]);

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

        { (!Array.isArray(state.data) || hasError ) && <p>Błąd pobierania danych z serwera:  { errorMessage }</p>}

        <Container>
            { (Array.isArray(state.data) && !loading) && <Table
                data={ state.data }
                headers={ headers }
                defaultSortColumn='id'
                page={ state.page }
                maxResults={  state.maxResults }
                resultsPerPage={ state.resultsPerPage }
                defaultSortOrderAsc={ true }
                setPage={ (page, resultsPerPage, order, asc) => {
                    setState({
                        ...state,
                        reload: true,
                        page: page,
                        order: order,
                        resultsPerPage: resultsPerPage,
                        sortOrder: asc ? SORT_ORDER.ASC : SORT_ORDER.DESC
                    });
                }}
            ></Table> }
        </Container>
    </div>;
};
