export interface TableHeader<T> {
    id: number;
    display: string;
    name: keyof T;
}

export interface TableModel<T> {
    headers: Array<TableHeader<T>>;
    data: Array<T>;
}
