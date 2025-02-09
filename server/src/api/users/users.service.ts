import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SORT_ORDER } from 'src/shared/enums/SortOrder.enum';
import { Repository } from 'typeorm';
import { UserEntitiy } from '../../typeorm/entities/user.entity';
import { CreateUserParams, GetUsersParams, UpdateUserParams, UserParams } from '../../utils/types';

type OrderMapped = Partial<{
    [key in keyof UserParams]: SORT_ORDER;
}>;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntitiy)
        private userRepository: Repository<UserEntitiy>,
    ) {}

    getUser(query: GetUsersParams) {       
        const orderMapped: OrderMapped = {
            [query.order]: query.sortOrder
        };
        if (query) {
            return this.userRepository.findAndCount({
                take: query.resultsPerPage,
                skip: query.resultsPerPage * query.page,
                order: orderMapped,
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true
                }
            });
        }
        return this.userRepository.findAndCount();
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({ ...userDetails, register: new Date() });
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails });
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id);
    }
}
