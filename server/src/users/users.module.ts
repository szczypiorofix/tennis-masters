import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntitiy } from '../typeorm/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntitiy])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
