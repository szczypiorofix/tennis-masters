export const sortSignAsc: string = "\u2191";

export const sortSignDesc: string = "\u2193";

export interface TableHeader<T> {
    id: number;
    display: string;
    name: keyof T;
    numeric?: boolean;
    sortable?: boolean;
    hidden?: boolean;
}

export interface TableModel<T> {
    headers: ReadonlyArray<TableHeader<T>>;
    data: ReadonlyArray<T>;
    resultsPerPage: number;
    page: number;
    maxResults: number;
    caption?: string;
    defaultSortColumn?: keyof T;
    defaultSortOrderAsc?: true;
    setPage: (page: number, resultsPerPage: number, order: keyof T, asc: boolean) => void;
}
