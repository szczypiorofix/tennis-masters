import express, { Request, Response, Router } from 'express';

import { ServerResponse } from '../../../shared';
import TokenHelper from '../../helpers/jwtoken/token.helper';

const tokenRouter: Router = express.Router();

tokenRouter.get('/', (request: Request, response: Response) => {
    const resp: ServerResponse = {
        code: 200,
        error: false,
        message: TokenHelper.generateSecretToken(),
    };
    response.status(resp.code).json(resp);
});

tokenRouter.post('/', (request: Request, response: Response) => {
    if (request.body.username) {
        const token = TokenHelper.generateAccessToken(request.body.username);
        response.status(200).json(token);
        return;
    }
    response.status(401).json({});
});

export default tokenRouter;
