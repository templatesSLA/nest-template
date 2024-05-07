import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../../domain/entities/user.entity';
import { CreateUserDto } from '../../../domain/dto/user.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = new User();
      user.name = createUserDto.name;
      user.lastName = createUserDto.lastName;
      user.email = createUserDto.email;
      user.age = createUserDto.age;

      return await this.usersRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Invalid input.');
    }
  }
}
