import { SORT_ORDER } from "src/shared/enums/SortOrder.enum";
import { UserParams } from "src/utils/types";

export type GetUserDto = {
    page: number;
    resultsPerPage: number;
    order: keyof UserParams;
    sortOrder: SORT_ORDER;
}

export type GetUsersDto = {
    page: number;
    resultsPerPage: number;
    order: keyof UserParams;
    sortOrder: SORT_ORDER;
}
