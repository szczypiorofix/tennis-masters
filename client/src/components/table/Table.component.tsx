import React, { useEffect, useReducer, useState } from 'react';

import { useSortTableBy } from '../../hooks/useSortTableBy';
import { SORT_ORDER } from '../enums';
import { sortSignAsc, sortSignDesc, TableHeader, TableModel } from './Table.model';
import {
    SortingButton,
    TableBodyStyled,
    TableContainer,
    TableHeadStyled,
    TableStyled,
    TableTdStyled,
    TableThStyled,
    TableTrStyled
} from './Table.styled';

export const TableComponent = <T,>(props: TableModel<T>): React.JSX.Element => {
    const [loadedDataAtStart, SetLoadedDataAtStart] = useState<boolean>(false);
    const [sort, setSort] = useState<string | number | symbol>("id");
    
    function sortOrderReducer(state: SORT_ORDER, newState: SORT_ORDER) {
        return newState;
    }
    const [sortOrder, setSortOrder] = useReducer(sortOrderReducer, SORT_ORDER.ASC);

    const [sortTableData, sortedTableData] = useSortTableBy<T>(props.data);

    useEffect(() => {
        if (props.data.length > 0 && !loadedDataAtStart) {
            if (props.defaultSortOrder && sortOrder !== props.defaultSortOrder) {
                setSortOrder(props.defaultSortOrder);
            }
            if (props.defaultSortColumn && sort !== props.defaultSortColumn) {
                const foundColumn: TableHeader<T> | undefined = props.headers.find(item => item.name === props.defaultSortColumn);
                if (foundColumn) {
                    setSort(props.defaultSortColumn);
                    console.log('set sort data');
                    sortTableData(props.data, foundColumn, sortOrder === SORT_ORDER.ASC);
                    SetLoadedDataAtStart(true);
                }
            }
        }
    }, [props, sort, sortOrder, sortTableData]);

    return <TableContainer>
        <TableStyled>
            <TableHeadStyled>
                <TableTrStyled>
                { props.headers && props.headers.map(
                    (headerItem, headerIndex) => {
                        if (!headerItem.hidden) {
                            return <TableThStyled key={ "th" + headerIndex }>
                                { headerItem.sortable && <div>
                                    <div>
                                        <SortingButton
                                            $active={ sort === headerItem.name && sortOrder === SORT_ORDER.ASC }
                                            onClick={() => {
                                                setSortOrder(sortOrder === SORT_ORDER.ASC ? SORT_ORDER.DESC : SORT_ORDER.ASC);
                                                setSort(headerItem.name);
                                                sortTableData(props.data, headerItem, sortOrder === SORT_ORDER.ASC);
                                            }}
                                        >
                                            <span>{ headerItem.display } { sortOrder === SORT_ORDER.ASC ? sortSignAsc : sortSignDesc }</span>
                                        </SortingButton>
                                    </div>
                                </div> }
                            </TableThStyled>
                        }
                        return null;
                    }
                )}
                </TableTrStyled>
            </TableHeadStyled>
            <TableBodyStyled>
                { sortedTableData && sortedTableData.map(
                    (rowItem, rowIndex) =>
                        <TableTrStyled key={"tr" + rowIndex}>
                            { props.headers && props.headers.map(
                                (headerItem, headerIndex) => {
                                    if (!headerItem.hidden) {
                                        return <TableTdStyled key={"td_"+headerIndex}>{ rowItem[headerItem.name] ?? '' }</TableTdStyled>
                                    }
                                    return null;
                                }
                            ) }
                        </TableTrStyled>
                    )
                }
            </TableBodyStyled>
        </TableStyled>
    </TableContainer>;
};
