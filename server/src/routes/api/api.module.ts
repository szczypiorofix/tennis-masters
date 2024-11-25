import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from 'src/routes/api/users/users.module';
import { UserEntitiy } from 'src/typeorm/entities/user.entity';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

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
    UsersModule
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
