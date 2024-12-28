export interface User {
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
}
