import { Request, Response } from 'express';
import mongoose from 'mongoose';

import { MongoDBResponse, ServerResponse } from '../../../../shared';
import MongoClient from '../../../core/MongoClient';

export const mongoDbStatus = async (request: Request, response: Response) => {
    let resp: ServerResponse & MongoDBResponse = {
        error: false,
        code: 200,
        message: 'MongoDB connected',
    };
    try {
        const mongoClient: MongoClient = MongoClient.getInstance();
        const connection: mongoose.Connection = await mongoClient.connect();
        resp.message = 'Connected to MongoDB'; //JSON.stringify(connectionObject.db.databaseName);
        resp.data = {
            dbname: connection.db.databaseName,
        };
    } catch (err) {
        resp = {
            error: true,
            code: 500,
            message: JSON.stringify(err),
        };
    }
    response.status(resp.code).json(resp);
};

export const serverStatus = (request: Request, response: Response) => {
    const resp: ServerResponse = {
        error: false,
        code: 200,
        message: 'OK',
    };
    response.status(resp.code).json(resp);
};
