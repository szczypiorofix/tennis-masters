import styled from 'styled-components';

const NavContainer = styled.nav`
    width: 100%;
    display: block;
`;

const NavList = styled.ul`
    width: 100%;
    padding-left: 0;
    list-style: none;
`;

const NavListItem = styled.li`
    padding: 4px;
`;

const NavListItemLink = styled.a`
    text-decoration: none;
    color: #442266;
`;

export { NavContainer, NavList, NavListItem, NavListItemLink };
