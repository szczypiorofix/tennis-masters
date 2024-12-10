import React from 'react';

import { Li, Link, Title, Ul } from './Header.styled';
import { NavComponent as Nav } from '../nav/Nav.component';

export const HeaderComponent: React.FC = () => {
    return <header>
        <Title>Tennis Masters</Title>
        <Ul>
            <Li>
                <Link  to="/">Home</Link>
            </Li>
            <Li>
                <Link  to="/login">Login</Link>
            </Li>
            <Li>
                <Link  to="/rankingi">Rankingi</Link>
            </Li>
        </Ul>
        <Nav></Nav>
    </header>;
};
