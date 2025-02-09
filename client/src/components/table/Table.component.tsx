import React, { useEffect, useState } from 'react';

import { sortTableDataByColumn } from '../../shared/helpers';
import { SortingButtonComponent as SortingButton } from './SortingButton.component';
import { sortSignAsc, sortSignDesc, TableHeader, TableModel } from '../models';
import {
    TableBodyStyled,
    TableCaptionStyled,
    TableContainer,
    TableFooterStyled,
    TableHeadStyled,
    TableStyled,
    TableTdStyled,
    TableThStyled,
    TableTrStyled
} from './Table.styled';

interface TableComponentState<T,> {
    loaded: boolean;
    sortBy?: keyof T;
    sortOrderAsc: boolean;
    resultsPerPage: number;
    data: T[];
}

export const TableComponent = <T,>(props: TableModel<T>): React.JSX.Element => {
    const [state, setState] = useState<TableComponentState<T>>({
        loaded: false,
        sortOrderAsc: true,
        resultsPerPage: 0,
        data: []
    });

    useEffect(() => {
        if (props.data.length > 0 && !state.loaded) {
            if (props.defaultSortColumn && state.sortBy !== props.defaultSortColumn) {
                const foundColumn: TableHeader<T> | undefined = props.headers.find(item => item.name === props.defaultSortColumn);
                if (foundColumn) {
                    setState({
                        ...state,
                        sortOrderAsc: props.defaultSortOrderAsc ?? true,
                        loaded: true,
                        sortBy: props.defaultSortColumn,
                        resultsPerPage: props.resultsPerPage,
                        data: sortTableDataByColumn(props.data, foundColumn, props.defaultSortOrderAsc ?? true)
                    });
                }
            }
        }
    }, [props, state]);

    return <TableContainer>
        <TableStyled>
            <TableHeadStyled>
                <TableTrStyled>
                { props.headers && props.headers.map(
                    (headerItem, headerIndex) => {
                        if (!headerItem.hidden) {
                            return <TableThStyled className="p_datatable_header_cell" key={ "th" + headerIndex }>
                                { headerItem.sortable &&
                                    <SortingButton
                                        active={ state.sortBy === headerItem.name }
                                        text={ headerItem.display }
                                        sortIcon={ (state.sortOrderAsc ? sortSignAsc : sortSignDesc) }
                                        onClick={() => {

                                            // props.setPage(
                                            //     props.page,
                                            //     state.resultsPerPage,
                                            //     headerItem.name,
                                            //     state.sortOrderAsc
                                            // );

                                            setState({
                                                ...state,
                                                sortBy: headerItem.name,
                                                sortOrderAsc: headerItem.name === state.sortBy ? !state.sortOrderAsc : state.sortOrderAsc,
                                                data: sortTableDataByColumn(
                                                    props.data, 
                                                    headerItem,
                                                    headerItem.name === state.sortBy ? !state.sortOrderAsc : state.sortOrderAsc,
                                                )
                                            });
                                        }}
                                    />
                                }
                            </TableThStyled>
                        }
                        return null;
                    }
                )}
                </TableTrStyled>
            </TableHeadStyled>
            <TableBodyStyled>
                { state.data && state.data.map(
                    (rowItem, rowIndex) =>
                        <TableTrStyled key={"tr" + rowIndex}>
                            { props.headers && props.headers.map(
                                (headerItem, headerIndex) => {
                                    if (!headerItem.hidden) {
                                        return <TableTdStyled
                                            key={"td_"+headerIndex}
                                        >
                                            { rowItem[headerItem.name] ?? '' }
                                        </TableTdStyled>
                                    }
                                    return null;
                                }
                            ) }
                        </TableTrStyled>
                    )
                }
            </TableBodyStyled>
            <TableFooterStyled>
                <tr>
                    <th colSpan={ props.headers.length }>
                        <div>
                            <span>Page { props.page} / {Math.ceil(props.maxResults / props.resultsPerPage)}</span>
                            <span style={{marginLeft: "6px", marginRight: "6px"}}>Per page {props.resultsPerPage}</span>
                            <select
                                name="cars"
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                    setState({
                                        ...state,
                                        resultsPerPage: parseInt(event.target.value)
                                    });
                                    if (state.sortBy) {
                                        props.setPage(
                                            props.page,
                                            parseInt(event.target.value),
                                            state.sortBy,
                                            state.sortOrderAsc
                                        );
                                    }
                                }}
                                value={ state.resultsPerPage }
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <button
                                disabled={  props.page <= 0 }
                                onClick={() => {
                                    if (state.sortBy) {
                                        props.setPage(
                                            props.page - 1,
                                            state.resultsPerPage,
                                            state.sortBy,
                                            state.sortOrderAsc
                                        );
                                    }
                                }}
                            >
                                Prev
                            </button>
                            <button
                                disabled={ props.page >= Math.ceil(props.maxResults / props.resultsPerPage) }
                                onClick={() => {
                                    if (state.sortBy) {
                                        props.setPage(
                                            props.page + 1,
                                            state.resultsPerPage,
                                            state.sortBy,
                                            state.sortOrderAsc
                                        );
                                    }
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </th>
                </tr>
            </TableFooterStyled>
            { props.caption && <TableCaptionStyled>
                { props.caption }
            </TableCaptionStyled> }
        </TableStyled>
    </TableContainer>;
};
