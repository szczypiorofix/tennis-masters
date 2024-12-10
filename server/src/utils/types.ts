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
