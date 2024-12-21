import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class HeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // if (!req.url.startsWith('/api')) {
      res.header('Content-Type', 'application/json');
    // }
    next();
  }
}
