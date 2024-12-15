import styled from 'styled-components';

const NavStyled = styled.nav`
    width: 100%;
    display: block;
`;

const NavUlStyled = styled.ul`
    width: 100%;
    padding-left: 0;
    list-style: none;
    display: flex;
    overflow: hidden;
    background-color: #333;
`;

const NavLiStyled= styled.li`

`;

const NavLiAStyled = styled.a<{ $active?: boolean; }>`
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

export { NavStyled, NavUlStyled, NavLiStyled, NavLiAStyled };
