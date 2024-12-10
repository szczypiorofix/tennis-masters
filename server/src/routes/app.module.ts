import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { HeaderMiddleware } from '../middlewares/header.middleware';
import { LoggerMiddleware } from '../middlewares/loger.middleware';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';

@Module({
  imports: [ApiModule],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, HeaderMiddleware).forRoutes('/');
  }
}
