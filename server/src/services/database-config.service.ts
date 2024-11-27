import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { allEntities } from 'src/typeorm/entities';

@Injectable()
export class DatabaseConfigService {
    public constructor(private configService: ConfigService) {}

    public getDatabaseConfig(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get("DBHOST"),
            port: parseInt(this.configService.get("DBPORT")),
            username: this.configService.get("DBUSER"),
            password: this.configService.get("DBPASS"),
            database: this.configService.get("DBNAME"),
            entities: allEntities,
            synchronize: true,
        } as TypeOrmModuleOptions;
    }
}
