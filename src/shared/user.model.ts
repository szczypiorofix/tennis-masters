import { ServerResponse } from './response.model';

export interface IUser {
    email: string;
    password: string;
}

export interface ServerResponseUser extends ServerResponse {
    data?: IUser;
}

export interface ServerResponseUsers extends ServerResponse {
    data?: IUser[];
}

export interface ServerUsersResponse extends ServerResponse {
    data?: IUser[];
}

export const IUserDefaults: IUser = {
    email: '',
    password: '',
};
