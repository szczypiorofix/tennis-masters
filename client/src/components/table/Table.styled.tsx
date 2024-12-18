import styled from 'styled-components';

import { IconButtonStyled } from '../button/Button.styled';

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

const TableStyled = styled.table`
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

const TableHeadStyled = styled.thead`
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

const TableBodyStyled = styled.tbody`
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

const TableTrStyled = styled.tr`
    padding: 4px;
`;

const TableTdStyled = styled.td`
    padding: 4px;
`;

const TableThStyled = styled.th`
    font-weight: bold;
`;

const SortingButton = styled(IconButtonStyled)<{ $active?: boolean; }>`
    color: black;
    transition: all 0.1s ease-in-out;
    border-style: solid;
    border-width: 1px;
    border-color: gray;
    background-color: ${props => props.$active ? "#CCCCCC" : "#EEEEEE" };
    border-radius: 3px;
    font-size: 700;
    min-width: 28px;
    min-height: 28px;
    width: 100%;
    &:hover {
        background-color: #DDDDDD;
    }
`;

export { SortingButton, TableBodyStyled, TableContainer, TableHeadStyled, TableStyled, TableTdStyled, TableThStyled, TableTrStyled };

