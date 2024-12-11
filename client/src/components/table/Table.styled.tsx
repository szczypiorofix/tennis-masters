import styled from 'styled-components';

const TableContainer = styled.div`
    background-color: #ffffff;
    max-height: 300px;
    overflow: auto;
    display: block;
    margin: 12px auto;
    padding: 12px;
    max-width: 60%;
    border: 1px solid rgb(226, 232, 240);
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 2rem;
`;

const Table = styled.table`
    min-width: 50rem;
    border-spacing: 0;
    border-collapse: separate;
    width: 100%;
    border-color: inherit;
    text-indent: 0;
    margin: 0 auto;
    &::after, &::before {
        border: 0 solid #e5e7eb;
    }
`;

const TableHead = styled.thead`
    position: sticky;
    border: 0 solid #e5e7eb;
    & > tr > th {
        text-align: start;
        border-color: rgb(229, 231, 235);
        border-style: solid;
        border-width: 0 0 1px 0;
        padding: 14px;
    }
`;

const TableBody = styled.tbody`
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    & > tr > td {
        text-align: start;
        border-color: rgb(229, 231, 235);
        border-style: solid;
        border-width: 0 0 1px 0;
        padding: 14px;
    }
`;

const Row = styled.tr`
    padding: 4px;
`;

const SortingButton = styled.button<{ $active?: boolean; }>`
    color: black;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border-style:solid;
    border-width: 1px;
    border-color: gray;
    background-color: ${props => props.$active ? "#CCCCCC" : "#EEEEEE" };
    border-radius: 3px;
    font-size: 700;
    width: 24px;
    height: 26px;
    &:hover {
        background-color: #DDDDDD;
    }
`;

export { Table, TableContainer, Row, SortingButton, TableHead, TableBody };
