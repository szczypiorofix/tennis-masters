export interface NavListItem {
    id: number;
    title: string;
    urlPath: string;
}

export interface NavList {
    list: Array<NavListItem>;
    activeId: number;
}

export interface NavComponentsProps {
    navList: NavList;
}
