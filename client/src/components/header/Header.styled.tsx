import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2.25em;
    text-align: center;
    color: #BF4F74;
`;

const Ul = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
`;

const Li = styled.li`
    background-color: #444555111;
    padding: 10px;
    cursor: pointer;
`;

const Link = styled(RouterLink)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2em;
`;

export { Li, Link, Title, Ul };
