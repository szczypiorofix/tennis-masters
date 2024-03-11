import {Request, Response} from "express";
import {IUser, IUserDefaults, ServerResponseUser, ServerResponseUsers} from "../../../../shared";
import {MongooseDocument, UserModel} from "../../../models";
import {asyncErrorHandlerMiddleware} from "../../../middleware";
import MongooseDocumentMapper from "../../../helpers/mongodb/mongo.helper";
import AppError from "../../../core/AppError";
import {UserResults} from "../models/users.model";

export const getAllUsers = asyncErrorHandlerMiddleware( async (request: Request, response: Response<ServerResponseUsers>) => {
    const usersWithSchema: MongooseDocument<IUser>[] = await UserModel.find();
    const users: IUser[] = MongooseDocumentMapper<IUser>(usersWithSchema, IUserDefaults);
    const resp: ServerResponseUsers = {
        code: 200,
        error: false,
        message: "OK",
        data: users
    }
    response.status(resp.code).json(resp);
});

export const createUser = asyncErrorHandlerMiddleware(async (request: Request, response: Response): Promise<void> => {
    const {email, password, password2} = request.body;
    const resp: ServerResponseUser = {
        code: 200,
        error: true,
        message: `User already exists`
    };

    if (password !== password2) {
        resp.code = 400;
        resp.message = `Passwords do not match`;
        response.status(resp.code).json(resp);
        throw new AppError("Password do not match!", 500);
    }

    const userExists: (MongooseDocument<IUser>)[] = await UserModel.find({
        email: email
    });

    if (Array.isArray(userExists) && userExists.length > 0) {
        throw new AppError("User already exists!", 400);
    }

    const newUser: MongooseDocument<IUser> = new UserModel({
        email: email,
        password: password
    });

    newUser.save()
        .then((doc: MongooseDocument<IUser>) => {
            resp.code = 200;
            resp.error = false;
            resp.message = "User registered";
            resp.data = MongooseDocumentMapper<IUser>(doc, IUserDefaults)[0];
            response.status(resp.code).json(resp);
        })
        .catch((err) => {
            console.error('User save error', err);
            resp.code = 500;
            response.status(resp.code).json(resp);
        });
});

export const getUserById = asyncErrorHandlerMiddleware( async (request: Request, response: Response<ServerResponseUser>) => {
    const id: string = request.params.id;
    const user: UserResults = await UserModel.find({id: id});
    const resp: ServerResponseUser = {
        code: 200,
        error: false,
        message: `User with id ${id} found`,
        data: MongooseDocumentMapper<IUser>(user, IUserDefaults).pop()
    };

    response.status(resp.code).json(resp);
});

export const deleteUserById = asyncErrorHandlerMiddleware( async (request: Request, response: Response<ServerResponseUser>) => {
    const resp: ServerResponseUser = {
        code: 200,
        error: false,
        message: `Delete user ...`,
        data: null
    };

    response.status(resp.code).json(resp);
});

export const updateUserById = asyncErrorHandlerMiddleware( async (request: Request, response: Response<ServerResponseUser>) => {
    const resp: ServerResponseUser = {
        code: 200,
        error: false,
        message: `Update user ...`,
        data: null
    };

    response.status(resp.code).json(resp);
});
