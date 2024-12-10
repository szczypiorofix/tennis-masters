import React from 'react';

import { TitleH1 } from './Header.styled';
import { NavComponent as Nav } from '../nav/Nav.component';
import { NavList } from '../models';

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
        <TitleH1>Tennis Masters</TitleH1>
        <Nav navList={ navList } />
    </header>;
};
