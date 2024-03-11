import { Request, Response } from 'express';

import { asyncErrorHandlerMiddleware } from '../../../middleware';
import { IUser, IUserDefaults, ServerResponseUser } from '../../../../shared';
import { MongooseDocument, UserModel } from '../../../models';
import MongooseDocumentMapper from '../../../helpers/mongodb/mongo.helper';

export const loginUser = asyncErrorHandlerMiddleware(
    async (request: Request, response: Response<ServerResponseUser>) => {
        const { email, password } = request.body;
        const resp: ServerResponseUser = {
            code: 404,
            error: false,
            message: `User not found`,
        };
        const userExists: MongooseDocument<IUser>[] = await UserModel.find({
            email: email,
            password: password,
        });
        if (Array.isArray(userExists) && userExists.length > 0) {
            resp.code = 200;
            resp.message = `User found`;
            resp.data = MongooseDocumentMapper<IUser>(
                userExists,
                IUserDefaults
            ).pop();
        }
        response.status(resp.code).json(resp);
    }
);
