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
    resultsPerPage?: number;
    defaultSortColumn?: keyof T;
}
