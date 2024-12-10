import styled from 'styled-components';

const TableContainer = styled.div`
    background-color: #44455511;
    padding: 4px;
    max-height: 300px;
    overflow: auto;
    display: block;
    max-width: 40%;
    margin: 12px auto;
`;

const Table = styled.table`
    padding: 4px;
    width: 100%;
    margin: 0 auto;
`;

const Row = styled.tr`
    background-color: #AACCCC;
    padding: 4px;
`;

export { Table, TableContainer, Row };
