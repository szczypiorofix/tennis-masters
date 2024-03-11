import { NextFunction, Request, Response } from 'express';

import { ServerResponse } from '../../shared';

const invalidPathHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const serverResponse: ServerResponse = {
        error: true,
        message: `Invalid path: ${req.path}`,
        code: 404,
    };
    res.status(serverResponse.code).json(serverResponse);
};

export { invalidPathHandler };
