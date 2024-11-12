import React from 'react';

import { Li, Link, Title, Ul } from './Header.styled';

export const Header: React.FC = () => {
    return <header>
        <Title>Tennis Masters</Title>
        <Ul>
            <Li>
                <Link  to="/">Home</Link>
            </Li>
            <Li>
                <Link  to="/login">Login</Link>
            </Li>
        </Ul>
    </header>
}
