import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { allEntities } from 'src/typeorm/entities';

@Injectable()
export class DatabaseConfigService {
    constructor(private configService: ConfigService) {}

    getDatabaseConfig(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: process.env.DBHOST,
            port: parseInt(process.env.DBPORT),
            username: process.env.DBUSER,
            password: process.env.DBPASS,
            database: process.env.DBNAME,
            entities: allEntities,
            synchronize: true,
        } as TypeOrmModuleOptions;
    }
}
