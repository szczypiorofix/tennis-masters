import React from 'react';

import { NavList } from '../models';
import { NavComponent as Nav } from '../nav/Nav.component';
import { TitleH1Styled } from './Header.styled';

const HeaderNavList: NavList = {
    list: [
        {
            id: 0,
            title: "Strona główna",
            urlPath: '/'
        },
        {
            id: 1,
            title: "Logowanie",
            urlPath: '/login'
        },
        {
            id: 2,
            title: "Rankingi",
            urlPath: '/rankingi'
        },
    ],
    activeId: 0
}

function resolveActiveNavElement(): number {
    const url = new URL(window.location.href);
    const pathName = url.pathname;
    const foundUrlPath = HeaderNavList.list.find(navListItem => navListItem.urlPath === pathName);
    if (foundUrlPath) {
        return foundUrlPath.id;
    }
    return 0;
}

export const HeaderComponent = (): React.JSX.Element => {
    const resolvedActiveNavElement = resolveActiveNavElement();
    const navList: NavList = {
        ...HeaderNavList,
        activeId: resolvedActiveNavElement
    };
    return <header>
        <TitleH1Styled>Tennis Masters</TitleH1Styled>
        <Nav navList={ navList } />
    </header>;
};
