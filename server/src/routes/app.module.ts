import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HeaderMiddleware } from '../middlewares/header.middleware';
import { LoggerMiddleware } from '../middlewares/loger.middleware';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { UserEntitiy } from 'src/typeorm/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tennismasters',
      entities: [UserEntitiy],
      synchronize: true,
    }),
    ApiModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, HeaderMiddleware).forRoutes('/');
  }
}
