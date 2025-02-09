import styled from 'styled-components';

import { IconButtonStyled } from '../button/Button.styled';

const TableContainer = styled.div`
    background-color: #ffffff;
    min-height: 500px;
    overflow: auto;
    display: block;
    margin: 12px auto;
    /* padding: 12px; */
    max-width: 60%;
    border: 1px solid rgb(226, 232, 240);
    border-radius: 10px;
    margin-bottom: 1rem;
    /* padding: 2rem; */
`;

const TableStyled = styled.table`
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    border-color: inherit;
    margin: 0 auto;
    text-indent: 0;
    &::after, &::before {
        border: 0 solid #e5e7eb;
    }
`;

const TableHeadStyled = styled.thead`
    position: sticky;
    top: 0;
    border: 0 solid #e5e7eb;
    background-color: #ffffff;
    & > tr > th {
        text-align: start;
        border-color: rgb(229, 231, 235);
        border-style: solid;
        border-width: 0 0 1px 0;
        cursor: pointer;
        user-select: none;

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
    & > tr:last-of-type > td {
        border-bottom-width: 0;
    }
`;

const TableFooterStyled = styled.tfoot`
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    /* position: sticky;
    bottom: 0px; */
    background-color: #ffffff;
    & > tr > th {
        text-align: start;
        border-color: rgb(229, 231, 235);
        border-style: solid;
        border-width: 1px 0 0 0;
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

const  TableCaptionStyled = styled.caption`
    border-color: inherit;
    margin: 0 auto;
    text-indent: 0;
    caption-side: bottom;;
    text-align: left;
    padding: 16px 14px;
`;

const SortingButtonStyled = styled(IconButtonStyled)<{ $active?: boolean; }>`
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

const SortIconStyled = styled.span<{ $active?: boolean; }>`
    color: ${props => props.$active ? "black" : "transparent" };
    margin-left: 6px;
`;

export { SortIconStyled, SortingButtonStyled, TableBodyStyled, TableCaptionStyled, TableContainer, TableFooterStyled, TableHeadStyled, TableStyled, TableTdStyled, TableThStyled, TableTrStyled };
