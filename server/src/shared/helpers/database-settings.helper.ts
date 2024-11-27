import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Environment } from "src/shared/models";

export function databaeSettingsForEnv(environment?: Environment): TypeOrmModuleOptions {
    const settings: TypeOrmModuleOptions = {
        type: 'mysql',
        host: process.env.DNHOST,
        port: parseInt(process.env.DBPORT) || 3306,
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME,
        synchronize: true, // only for dev environments
    };
    
    return settings;
}
