import styled from 'styled-components';

const NavContainer = styled.nav`
    width: 100%;
    display: block;
`;

const NavUl = styled.ul`
    width: 100%;
    padding-left: 0;
    list-style: none;
    display: flex;
    overflow: hidden;
    background-color: #333;
`;

const NavLi = styled.li`

`;

const NavLiA = styled.a<{ $active?: boolean; }>`
    text-decoration: none;
    display: flex;
    color: #f2f2f2;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    font-size: 17px;
    ${props => props.$active && 'background-color: #04AA6D; color: white;'};
    transition: all 0.15s ease-in-out;
    &:hover {
        background-color: #ddd;
        color: black;
    }
`;

export { NavContainer, NavUl, NavLi, NavLiA };
