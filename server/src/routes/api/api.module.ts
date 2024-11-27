import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { DatabaseConfigService } from 'src/services/database-config.service';
import { allEntities } from 'src/typeorm/entities';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DBHOST,
        port: parseInt(process.env.DBPORT),
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME,
        entities: [...allEntities],
        synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
