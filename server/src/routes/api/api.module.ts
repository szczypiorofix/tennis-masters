import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfigModule } from '../../database/database-config.module';
import { DatabaseConfigService } from '../../database/database-config.service';
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
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
