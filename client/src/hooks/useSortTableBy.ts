import { TableHeader } from '@/components/table/Table.model';
import { useCallback, useState } from 'react';
import { sortTableDataByColumn } from '../shared/helpers';

export const useSortTableBy = <T,>(defaultValue: readonly T[]): [(data: readonly T[], column: TableHeader<T>, ascend: boolean) => void, readonly T[]] => {
    const [tableData, setTableData] = useState<readonly T[]>(defaultValue);
    const sort = useCallback((data: readonly T[], column: TableHeader<T>, ascend: boolean) => {
        const sortedData: T[] = sortTableDataByColumn<T>(data, column, ascend);
        setTableData(sortedData);
    }, []);
    return [
        sort,
        tableData
    ];
};
