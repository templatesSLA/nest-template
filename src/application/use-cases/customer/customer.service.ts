import { Injectable } from '@nestjs/common';
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
    const user = new User();
    user.name = createUserDto.name;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.age = createUserDto.age;

    return this.usersRepository.save(user);
  }
}
