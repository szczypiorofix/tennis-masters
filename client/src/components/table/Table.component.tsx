import React, { useEffect, useState } from 'react';

import { useSortTableBy } from '../../hooks/useSortTableBy';
import { SortingButtonComponent as SortingButton} from './SortingButton.component';
import { sortSignAsc, sortSignDesc, TableHeader, TableModel } from './Table.model';
import {
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
    const [sortOrderAsc, setSortOrderAsc] = useState<boolean>(true);

    const [sortTableData, sortedTableData] = useSortTableBy<T>(props.data);

    useEffect(() => {
        if (props.data.length > 0 && !loadedDataAtStart) {
            if (props.defaultSortOrderAsc && sortOrderAsc !== props.defaultSortOrderAsc) {
                setSortOrderAsc(props.defaultSortOrderAsc);
            }
            if (props.defaultSortColumn && sort !== props.defaultSortColumn) {
                const foundColumn: TableHeader<T> | undefined = props.headers.find(item => item.name === props.defaultSortColumn);
                if (foundColumn) {
                    setSort(props.defaultSortColumn);
                    console.log('set sort data');
                    sortTableData(props.data, foundColumn, sortOrderAsc);
                    SetLoadedDataAtStart(true);
                }
            }
        }
    }, [props, sort, sortOrderAsc, sortTableData, loadedDataAtStart]);

    return <TableContainer>
        <TableStyled>
            <TableHeadStyled>
                <TableTrStyled>
                { props.headers && props.headers.map(
                    (headerItem, headerIndex) => {
                        if (!headerItem.hidden) {
                            return <TableThStyled key={ "th" + headerIndex }>
                                { headerItem.sortable &&
                                    <SortingButton
                                        active={ sort === headerItem.name }
                                        text={ headerItem.display }
                                        sortIcon={ (sortOrderAsc ? sortSignAsc : sortSignDesc) }
                                        onClick={() => {
                                            setSort(headerItem.name);
                                            if (sort === headerItem.name) {
                                                setSortOrderAsc(!sortOrderAsc);
                                            }
                                            sortTableData(props.data, headerItem, sortOrderAsc);
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
