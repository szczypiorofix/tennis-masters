import { TableHeader } from "../../components/table/Table.model";

export function sortTableDataByColumn<T>(data: readonly T[], header: TableHeader<T>, ascend: boolean): T[] {
    return [...data].sort((a, b) => {
      const valueA: string = ""+a[header.name];
      const valueB: string = ""+b[header.name];
  
      if (header.numeric) {
        return ascend ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA) ;
      } else {
        return ascend ? valueA.toString().localeCompare(valueB.toString()) : valueB.toString().localeCompare(valueA.toString()) ;
      }
    });
}
