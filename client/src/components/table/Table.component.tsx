import React, { useEffect, useReducer, useState } from 'react';

import { sortTableDataByColumn } from './Table.helper';
import { TableHeader, TableModel } from './Table.model';
import {
    Row,
    Table,
    TableContainer,
    SortingButton,
    TableHead,
    TableBody
} from './Table.styled';

enum SORT_TYPE {
    ASC,
    DESC
}

export const TableComponent = <T,>(props: TableModel<T>): React.JSX.Element => {
    const [sort, setSort] = useState<string | number | symbol>("");
    const [sortType, setSortType] = useState<SORT_TYPE>(SORT_TYPE.ASC);
    const [tableData, setTableData] = useReducer(
        (state: TableModel<T>, newState: TableModel<T>) => ({
          ...state,
          ...newState,
        }), {
            headers: [],
            data: []
        }
    );

    useEffect(() => {
        if (props.data.length) {
            console.log('Set table data...');
            setTableData(props);
            setSort(props.defaultSortColumn || "");
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
        <Table>
            <TableHead>
                <Row>
                { tableData.headers && tableData.headers.map(
                    (headerItem, headerIndex) => {
                        if (!headerItem.hidden) {
                            return <th key={ "th" + headerIndex }>
                                <div>
                                    <span>{ headerItem.display }</span>
                                    { headerItem.sortable && <div>
                                        <div>
                                            <SortingButton
                                                $active={ sort === headerItem.name && sortType === SORT_TYPE.ASC }
                                                onClick={() => {
                                                    setSortType(SORT_TYPE.ASC);
                                                    setSort(headerItem.name);
                                                    sortTableBy(headerItem, true);
                                                }}
                                            >
                                                <span>&#8593;</span>
                                            </SortingButton>
                                            <SortingButton
                                                $active={ sort === headerItem.name && sortType === SORT_TYPE.DESC }
                                                onClick={() => {
                                                    setSortType(SORT_TYPE.DESC);
                                                    setSort(headerItem.name);
                                                    sortTableBy(headerItem, false);
                                                }}
                                            >
                                                <span>&#8595;</span>
                                            </SortingButton>
                                        </div>
                                    </div> }
                                </div>
                            </th>
                        }
                        return null;
                    }
                )}
                </Row>
            </TableHead>
            <TableBody>
                { tableData.data && tableData.data.map(
                    (rowItem, rowIndex) =>
                        <Row key={"tr" + rowIndex}>
                            { tableData.headers && tableData.headers.map(
                                (headerItem, headerIndex) => {
                                    if (!headerItem.hidden) {
                                        return <td key={"td_"+headerIndex}>{ rowItem[headerItem.name] ?? '' }</td>
                                    }
                                    return null;
                                }
                            ) }
                        </Row>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>;
};
