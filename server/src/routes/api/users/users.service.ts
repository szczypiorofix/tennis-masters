import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntitiy } from '../../../typeorm/entities/user.entity';
import { CreateUserParams, UpdateUserParams } from '../../../utils/types';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntitiy)
        private userRepository: Repository<UserEntitiy>,
    ) {}

    getUser() {
        return this.userRepository.find();
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({ ...userDetails, register: new Date() });
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails })
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id)
    }
}
