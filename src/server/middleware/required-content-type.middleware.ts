import { NextFunction, Request, Response } from 'express';

import { ServerResponse } from '../../shared';

const requiredContentTypeHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.headers['content-type'] !== 'application/json') {
        const serverResponse: ServerResponse = {
            error: true,
            message: 'Content-Type must be application/json',
            code: 400,
        };
        res.status(serverResponse.code).json(serverResponse);
    } else {
        next();
    }
};

export { requiredContentTypeHandler };
