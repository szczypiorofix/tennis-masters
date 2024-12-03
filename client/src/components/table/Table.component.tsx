import React from 'react';

import { TableModel } from './Table.model';
import { Row, Table, TableContainer } from './Table.styled';

export const TableComponent = <T,>(props: TableModel<T>): React.JSX.Element => {
    return <TableContainer>
        <Table>
            <thead>
                <Row>
                { props.headers && props.headers.map(
                    (headerItem, headerIndex) =>
                        <th key={ "th" + headerIndex }>
                            { headerItem.display }
                        </th>
                )}
                </Row>
            </thead>
            <tbody>
                { props.data && props.data.map(
                    (rowItem, rowIndex) =>
                        <Row key={"tr" + rowIndex}>
                            { props.headers && props.headers.map(
                                (headerItem, headerIndex) => <td key={"td_"+headerIndex}>{ rowItem[headerItem.name] ?? '' }</td>
                            ) }
                        </Row>
                    )
                }
            </tbody>
        </Table>
    </TableContainer>;
};
