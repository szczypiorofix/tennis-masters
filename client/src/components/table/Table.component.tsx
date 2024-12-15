import React, { useEffect, useReducer, useState } from 'react';

import { SORT_ORDER } from '../enums';
import { sortTableDataByColumn } from './Table.helper';
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
    const [sort, setSort] = useState<string | number | symbol>("id");
    const [sortOrder, setSortOrder] = useState<SORT_ORDER>(SORT_ORDER.ASC);
    const [tableData, setTableData] = useReducer(
        (state: TableModel<T>, newState: TableModel<T>) => ({...state, ...newState}), {
            headers: [],
            data: []
        }
    );

    useEffect(() => {
        if (props.data.length) {
            if (props.defaultSortOrder) {
                setSortOrder(props.defaultSortOrder);
            }
            if (props.defaultSortColumn && sort !== props.defaultSortColumn) {
                setSort(props.defaultSortColumn);
                const foundColumn = props.headers.find(item => item.name === props.defaultSortColumn);
                if (foundColumn) {
                    sortTableBy(foundColumn);
                }
            }
            setTableData(props);
        }

    }, [props]);

    const sortTableBy = (column: TableHeader<T>, ascend: boolean = true) => {
        const sortedData: T[] = sortTableDataByColumn([...tableData.data], column, ascend);
        setTableData({
            ...tableData,
            data: sortedData
        });
    }

    return <TableContainer>
        <TableStyled>
            <TableHeadStyled>
                <TableTrStyled>
                { tableData.headers && tableData.headers.map(
                    (headerItem, headerIndex) => {
                        if (!headerItem.hidden) {
                            return <TableThStyled key={ "th" + headerIndex }>
                                <div>
                                    <span>{ headerItem.display }</span>
                                    { headerItem.sortable && <div>
                                        <div>
                                            <SortingButton
                                                $active={ sort === headerItem.name && sortOrder === SORT_ORDER.ASC }
                                                onClick={() => {
                                                    setSortOrder(SORT_ORDER.ASC);
                                                    setSort(headerItem.name);
                                                    sortTableBy(headerItem, true);
                                                }}
                                            >
                                                <span>{ sortSignAsc }</span>
                                            </SortingButton>
                                            <SortingButton
                                                $active={ sort === headerItem.name && sortOrder === SORT_ORDER.DESC }
                                                onClick={() => {
                                                    setSortOrder(SORT_ORDER.DESC);
                                                    setSort(headerItem.name);
                                                    sortTableBy(headerItem, false);
                                                }}
                                            >
                                                <span>{ sortSignDesc }</span>
                                            </SortingButton>
                                        </div>
                                    </div> }
                                </div>
                            </TableThStyled>
                        }
                        return null;
                    }
                )}
                </TableTrStyled>
            </TableHeadStyled>
            <TableBodyStyled>
                { tableData.data && tableData.data.map(
                    (rowItem, rowIndex) =>
                        <TableTrStyled key={"tr" + rowIndex}>
                            { tableData.headers && tableData.headers.map(
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
