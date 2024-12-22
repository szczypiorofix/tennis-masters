import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { DatabaseConfigModule } from '../database/database-config.module';
import { DatabaseConfigService } from '../database/database-config.service';
import { HeaderMiddleware } from '../middlewares/header.middleware';
import { LoggerMiddleware } from '../middlewares/loger.middleware';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [DatabaseConfigModule],
            inject: [DatabaseConfigService],
            useFactory: (databaseConfigService: DatabaseConfigService) => databaseConfigService.getDatabaseConfig()
        }),
        UsersModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),
    ],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule implements NestModule {
      configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware, HeaderMiddleware).forRoutes('/');
      }
}
