import { SORT_ORDER } from "src/shared/enums/SortOrder.enum";

export type CreateUserParams = {
    email: string;
    password: string;
    fistname: string;
    lastname: string;
    address: string;
    city: string;
    country: string;
};

export type UpdateUserParams = {
    id: number;
    email: string;
    password: string;
    fistname: string;
    lastname: string;
    active: number;
    address: string;
    city: string;
    country: string;
    lastlogin: string;
    exp: number;
    level: number;
};

export type UserParams = {
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    active: number;
    address: string;
    city: string;
    country: string;
    register: Date;
    lastlogin: Date;
    exp: number;
    level: number;
};

export type GetUsersParams = {
    page: number;
    resultsPerPage: number;
    order: keyof UserParams;
    sortOrder: SORT_ORDER;
}
