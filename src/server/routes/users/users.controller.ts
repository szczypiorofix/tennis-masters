import express, {Request, Response, Router} from 'express';
import {MongooseDocument, UserModel} from '../../models';
import {UserResults} from './models/users.model';
import {IUser, IUserDefaults, ServerResponseUser, ServerResponseUsers} from '../../../shared';
import MongooseDocumentMapper from '../../helpers/mongodb/mongo.helper';
import {asyncErrorHandlerMiddleware} from '../../middleware';
import AppError from '../../core/AppError';

const usersRouter: Router = express.Router();

usersRouter.get("/", asyncErrorHandlerMiddleware( async (request: Request, response: Response<ServerResponseUsers>) => {
    const users: MongooseDocument<IUser>[] = await UserModel.find();
    const usersFiltered: IUser[] = MongooseDocumentMapper<IUser>(users, IUserDefaults);
    const resp: ServerResponseUsers = {
        code: 200,
        error: false,
        message: "OK",
        data: usersFiltered
    }
    response.status(resp.code).json(resp);
}));

usersRouter.get("/:id", asyncErrorHandlerMiddleware( async (request: Request, response: Response<ServerResponseUser>) => {
    const id: string = request.params.id;
    const user: UserResults = await UserModel.find({id: id});
    const resp: ServerResponseUser = {
        code: 200,
        error: false,
        message: `User with id ${id} found`,
        data: MongooseDocumentMapper<IUser>(user, IUserDefaults).pop()
    };

    response.status(resp.code).json(resp);
}));

// =============== LOGIN ===============

usersRouter.post("/login", asyncErrorHandlerMiddleware(async (request: Request, response: Response<ServerResponseUser>) => {
    const { email, password } = request.body;
    const resp: ServerResponseUser = {
        code: 404,
        error: false,
        message: `User not found`
    };
    const userExists: (MongooseDocument<IUser>)[] = await UserModel.find({
        email: email,
        password: password
    });
    if (Array.isArray(userExists) && userExists.length > 0) {
        resp.code = 200;
        resp.message = `User found`;
        resp.data = MongooseDocumentMapper<IUser>(userExists, IUserDefaults).pop();
    }
    response.status(resp.code).json(resp);
}));

// =============== REGISTER ===============

usersRouter.post("/register", asyncErrorHandlerMiddleware(async (request: Request, response: Response): Promise<void> => {
    const { email, password, password2 } = request.body;
    const resp: ServerResponseUser = {
        code: 200,
        error: true,
        message: `User already exists`
    };

    if ( password !== password2 ) {
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
}));

export default usersRouter;
